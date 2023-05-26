//
//  SearchScreen.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import SwiftUI

struct SearchScreen: View {
    @Binding var navigationPath: [NavigationRoute]

    var body: some View {
        VStack {
            Spacer()
            SearchView { query in
                navigationPath.append(.list(query))
            }
            .padding(32)
            Spacer()
        }
        .background(Color(.systemGroupedBackground))
        .navigationTitle("Search")
    }
}
