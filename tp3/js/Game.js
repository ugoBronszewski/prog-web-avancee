function Game(boardSize) {
    this.board

    this.initBoard = (boardSize) => {
        let i, j

        for (i in boardSize) {
            for (j in boardSize) {
                this.board[i][j] = new maCase()
            }
        }
    }

    this.isEmptyRow = (rowNumber) => {
        let row = this.board[rowNumber],
            i, result = 0

        for (i in row) {
            i.isEmpty ? result++ : null
        }

        return result === 4
    }

    this.isEmptycolumn = (columnNumber) => {
        let column, i, j, k, result = 0

        for (j in this.board) {
            for (k in this.board[j]) {
                k === columnNumber ? column.push(this.board[j][k]) : null
            }
        }

        for (i in column) {
            i.isEmpty ? result++ : null
        }

        return result === 4
    }

    this.initBoard(boardSize)
}