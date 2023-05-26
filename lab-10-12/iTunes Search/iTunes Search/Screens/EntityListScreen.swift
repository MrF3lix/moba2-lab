//
//  EntityListScreen.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import SwiftUI

struct EntityListScreen: View {
    @StateObject private var viewModel: ViewModel

    init(searchQuery: String) {
        _viewModel = StateObject(wrappedValue: ViewModel(searchQuery: searchQuery))
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
                Text("An error occured while searching for «\(viewModel.searchQuery)».\n\(error.localizedDescription)")
                    .padding()
                Spacer()
            } else if let entityResponse = viewModel.entityResponse, entityResponse.results.count > 0 {
                EntityListView(entities: entityResponse.results)
            } else {
                Spacer()
                Text("No results found for «\(viewModel.searchQuery)»")
                    .padding()
                Spacer()
            }
        }
        .multilineTextAlignment(.center)
        .frame(maxWidth: .infinity)
        .background(Color(.systemGroupedBackground))
        .navigationTitle(viewModel.searchQuery)
    }
}
