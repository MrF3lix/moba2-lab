//
//  Extensions+Date.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import Foundation

extension Date {
    func year() -> String {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy"

        return formatter.string(for: self)!
    }
}
