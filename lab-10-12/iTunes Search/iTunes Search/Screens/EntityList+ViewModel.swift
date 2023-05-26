//
//  EntityList+ViewModel.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import SwiftUI

extension EntityListScreen {
    @MainActor class ViewModel: ObservableObject {
        private let api = iTunesAPI()

        @Published private(set) var isLoading = true
        @Published private(set) var error: Error?
        @Published private(set) var entityResponse: EntityCollectionResponse?
        @Published var searchQuery: String

        init(searchQuery: String) {
            self.searchQuery = searchQuery
            Task {
                await fetchEntities()
            }
        }

        func fetchEntities() async {
            isLoading = true

            do {
                error = nil
                entityResponse = try await api.searchTerm(query: searchQuery)
            } catch {
                self.error = error
                entityResponse = nil
            }

            isLoading = false
        }
    }
}
