//
//  EntityTermRespone.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import Foundation

struct EntityCollectionResponse: Codable, Hashable {
    let resultCount: Int
    let results: [EntityCollection]
}
