//
//  NavigationContainer.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import SwiftUI

struct NavigationContainer: View {
    @State private var navigationPath = [NavigationRoute]()

    var body: some View {
        NavigationStack(path: $navigationPath) {
            SearchScreen(navigationPath: $navigationPath)
                .navigationDestination(for: NavigationRoute.self) { value in
                    switch value {
                    case .search:
                        SearchScreen(navigationPath: $navigationPath)
                    case let .list(query):
                        EntityListScreen(searchQuery: query)
                    case let .detail(album):
                        EntityDetailScreen(album: album)
                    }
                }
        }
    }
}

struct NavigationContainer_Previews: PreviewProvider {
    static var previews: some View {
        NavigationContainer()
    }
}

