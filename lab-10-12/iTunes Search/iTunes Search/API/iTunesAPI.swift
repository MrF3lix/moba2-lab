//
//  iTunesAPI.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import Foundation

struct iTunesAPI {
    private static let baseURL = URL(string: "https://itunes.apple.com")!
    private let sessionClient = URLSessionClient()

    func searchTerm(query: String) async throws -> EntityCollectionResponse {
        let url = Self.baseURL
            .appending(path: "/search")
            .appending(queryItems: [URLQueryItem(name: "term", value: query)])
            .appending(queryItems: [URLQueryItem(name: "entity", value: "album")])

        return try await sessionClient.getJSON(from: url, of: EntityCollectionResponse.self)
    }

    func lookupCollection(id: Int) async throws  -> EntityCollectionResponse {
        let url = Self.baseURL
            .appending(path: "/lookup")
            .appending(queryItems: [URLQueryItem(name: "id", value: "\(id)")])
            .appending(queryItems: [URLQueryItem(name: "entity", value: "song")])

        return try await sessionClient.getJSON(from: url, of: EntityCollectionResponse.self)
    }
}
