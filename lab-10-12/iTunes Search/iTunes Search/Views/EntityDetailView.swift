//
//  EntityDetailScreen.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import SwiftUI

struct EntityDetailView: View {
    let album: EntityCollection
    let songs: [EntityCollection]

    var body: some View {
        ScrollView {
            VStack(alignment: .center, spacing: 32) {
                VStack {
                    Text(album.collectionName)
                        .font(.title)
                    Text(album.releaseDate.year())
                }
                .frame(maxWidth: .infinity)
                AsyncImage(url: album.artworkUrl100, scale: 0.5)
                VStack {
                    ForEach(songs, id: \.trackId!) { song in
                        HStack {
                            Text(.init("\(song.trackNumber!)"))
                            Text(song.trackName!)
                            Spacer()
                            Text(.init("\((song.trackTimeMillis! / 1000) % 3600 / 60):\((song.trackTimeMillis! / 1000) % 60)"))
                                .font(.system(size: 12))
                        }
                        .font(.system(size: 16))
                    }
                }
                Spacer()
            }
            .multilineTextAlignment(.leading)
            .padding()
        }
    }
}

