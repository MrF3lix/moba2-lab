//
//  ContentView.swift
//  SimpleCalculator
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import SwiftUI

struct ContentView: View {
    @State private var first = ""
    @State private var second = ""

    @State private var firstDouble: Double?
    @State private var secondDouble: Double?

    @State private var isValid = false

    @State private var result = ""

    var body: some View {
        VStack(spacing: 32) {
            Text("Calculator")
                .font(.title)
            TextField("First", text: $first)
                .textFieldStyle(.roundedBorder)
            HStack(alignment: .center) {
                Button("+") {
                    result = "\(firstDouble! + secondDouble!)"
                }
                Button("-") {
                    result = "\(firstDouble! - secondDouble!)"
                }
                Button("*") {
                    result =  "\(firstDouble! * secondDouble!)"
                }
                Button("/") {
                    result = "\(firstDouble! / secondDouble!)"
                }
            }
            .disabled(!isValid)
            .buttonStyle(.bordered)
            .buttonBorderShape(.roundedRectangle)
            TextField("Second", text: $second)
                .textFieldStyle(.roundedBorder)
            Text(result)
                .font(.system(size: 20))
        }
        .onChange(of: first) { newValue in
            firstDouble = Double(newValue)
            isValid = firstDouble != nil && secondDouble != nil
        }
        .onChange(of: second) { newValue in
            secondDouble = Double(newValue)
            isValid = firstDouble != nil && secondDouble != nil
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
