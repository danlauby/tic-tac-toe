function Player(playerName, symbol) {
  this.playerName = playerName;
  this.symbol = symbol;
}

function Board() {
  this.board = ['-','-','-','-','-','-','-','-','-'];
}

function Game(board, player1, player2) {
  this.board = board;
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.clearBoard = function() {
  activeBoard.board = ['-','-','-','-','-','-','-','-','-'];
}
