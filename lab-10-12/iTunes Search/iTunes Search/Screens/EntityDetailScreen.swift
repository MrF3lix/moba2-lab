//
//  EntityDetailScreen.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import SwiftUI

struct EntityDetailScreen: View {
    @StateObject private var viewModel: ViewModel
    let album: EntityCollection

    init(album: EntityCollection) {
        self.album = album
        _viewModel = StateObject(wrappedValue: ViewModel(album: album))
    }

    var body: some View {
        VStack {
            if viewModel.isLoading {
                Spacer()
                ProgressView()
                    .controlSize(.large)
                    .padding()
                Spacer()
            } else if let error = viewModel.error {
                Spacer()
                Text("An error occured while searching for «\(album.collectionName)».\n\(error.localizedDescription)")
                    .padding()
                Spacer()
            } else if let entityResponse = viewModel.entityResponse, entityResponse.results.count > 0 {
                EntityDetailView(album: album, songs: entityResponse.results.filter { $0.wrapperType == .track })
            } else {
                Spacer()
                Text("Nothing found.")
                    .padding()
                Spacer()
            }
        }
        .multilineTextAlignment(.center)
        .frame(maxWidth: .infinity)
        .background(Color(.systemGroupedBackground))
    }
}
