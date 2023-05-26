//
//  NavigationRoute.swift
//  iTunes Search
//
//  Created by Simon Schuhmacher on 26.05.23.
//

import Foundation

enum NavigationRoute {
    case search
    case list(String)
    case detail(EntityCollection)
}

extension NavigationRoute: Hashable {}
