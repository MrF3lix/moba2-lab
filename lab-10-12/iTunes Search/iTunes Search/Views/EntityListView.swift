//
//  EntityListView.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import SwiftUI

struct EntityListView: View {
    let entities: [EntityCollection]

    var body: some View {
        List {
            ForEach(entities, id: \.collectionId) { entity in
                NavigationLink(value: NavigationRoute.detail(entity)) {
                    VStack(alignment: .leading, spacing: 6) {
                        Text(entity.artistName)
                            .font(.system(.headline))
                        Text(entity.collectionName)
                            .font(.system(.body))
                    }
                    .multilineTextAlignment(.leading)
                }
            }
        }
    }
}
