//
//  EntityCollection.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import Foundation

struct EntityCollection: Codable, Hashable {
    let wrapperType: WrapperType
    let collectionName: String
    let releaseDate: Date
    let artistName: String
    let artworkUrl100: URL
    let trackName: String?
    let trackId: Int?
    let collectionId: Int!
    let trackNumber: Int?
    let discNumber: Int?
    let trackTimeMillis: Int?
}

extension EntityCollection {
    enum WrapperType: String, Codable, Hashable {
        case collection
        case track
    }
}
