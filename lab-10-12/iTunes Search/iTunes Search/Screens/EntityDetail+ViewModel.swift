//
//  EntityDetail+ViewModel.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import SwiftUI

extension EntityDetailScreen {
    @MainActor class ViewModel: ObservableObject {
        private let api = iTunesAPI()

        @Published private(set) var isLoading = true
        @Published private(set) var error: Error?
        @Published private(set) var entityResponse: EntityCollectionResponse?
        @Published private(set) var album: EntityCollection
        @Published private(set) var songs = [EntityCollection]()

        init(album: EntityCollection) {
            self.album = album
            Task {
                await fetchEntities()
            }
        }

        func fetchEntities() async {
            isLoading = true

            do {
                error = nil
                entityResponse = try await api.lookupCollection(id: album.collectionId)
                songs = entityResponse?.results.filter { $0.wrapperType == .track } ?? []
            } catch {
                self.error = error
                entityResponse = nil
            }

            isLoading = false
        }
    }
}
