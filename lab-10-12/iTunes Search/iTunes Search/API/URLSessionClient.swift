//
//  URLSessionClient.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import Foundation

struct URLSessionClient {
    private let session = URLSession.shared

    func getJSON<T: Decodable>(from url: URL, of type: T.Type) async throws -> T {
        let data = try await get(from: url)

        let decoder = JSONDecoder()
        decoder.dateDecodingStrategy = .iso8601

        do {
            return try decoder.decode(type.self, from: data)
        } catch {
            throw NetworkRequestError.decodingError(error)
        }
    }

    func get(from url: URL) async throws -> Data {
        try await task(url: url, httpMethod: "GET")
    }

    private func task(
        url: URL,
        httpMethod: String,
        httpBody: Data? = nil
    ) async throws -> Data {
        var request = URLRequest(url: url)
        request.httpMethod = httpMethod

        if let httpBody {
            request.httpBody = httpBody
        }

        let (data, response): (Data, URLResponse)
        do {
            (data, response) = try await session.data(for: request)
        } catch {
            throw NetworkRequestError.sessionError(error)
        }

        guard let httpURLResponse = response as? HTTPURLResponse, 200 ..< 300 ~= httpURLResponse.statusCode else {
            throw NetworkRequestError.unexpectedStatusCode
        }

        return data
    }
}
