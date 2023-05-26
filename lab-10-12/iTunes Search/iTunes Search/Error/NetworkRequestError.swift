//
//  NetworkRequestError.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import Foundation

enum NetworkRequestError: Error {
    case unexpectedStatusCode
    case sessionError(Error)
    case decodingError(Error)
}
