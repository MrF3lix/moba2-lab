//
//  SearchView.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import SwiftUI

struct SearchView: View {
    @State private var query = ""

    let onSubmit: (String) -> Void

    var body: some View {
        HStack {
            TextField("Search...", text: $query)
                .font(.system(size: 24, weight: .bold))
                .keyboardType(.default)
                .submitLabel(.search)
                .onSubmit {
                    onSubmit(query)
                }
                .padding()
            Button {
                onSubmit(query)
            } label: {
                HStack {
                    Image(systemName: "magnifyingglass")
                        .foregroundColor(.white)
                        .font(.system(size: 25))
                }
                .frame(width: 50, height: 50)
                .background(.black)
                .cornerRadius(10)
                .padding(6)
            }
        }
        .background(
            ZStack {
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .fill(Color(.systemBackground))
                RoundedRectangle(cornerRadius: 10, style: .continuous)
                    .stroke(lineWidth: 1)
                    .fill(Color(.label))
            }
        )
    }
}
