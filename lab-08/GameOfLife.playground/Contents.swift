import UIKit

let size = 9

let first = (0...size).map { idx1 in
    (0...size).map { idx2 in
        Int(arc4random() % 2)
    }
}

func printBoard(board: [[Int]]) {
    board.forEach { line in
        print(line)
    }
}

func evaluateBoard(board: [[Int]]) -> [[Int]] {
    var newBoard = board
    for i in 0..<board.count {
        for j in 0..<board.count {
            var alive = 0
            if i > 0 {
                alive += board[i-1][j]

                if j > 0 {
                    alive += board[i-1][j-1]
                }
            }
            if i < board.count-1 {
                alive += board[i+1][j]

                if j < board.count-1 {
                    alive += board[i+1][j+1]
                }
            }

            if j > 0 {
                alive += board[i][j-1]

                if i < board.count-1 {
                    alive += board[i+1][j-1]
                }
            }
            if j < board.count-1 {
                alive += board[i][j+1]

                if i > 0 {
                    alive += board[i-1][j+1]
                }
            }

            newBoard[i][j] = alive
        }
    }

    return newBoard.map({ cell in
        cell.map { value in
            if value == 2 || value == 3 {
                return 1
            }
            return 0
        }
    })
}

let second = evaluateBoard(board: first)

print("Board 1")
printBoard(board: first)

print("")

print("Board 2")
printBoard(board: second)
