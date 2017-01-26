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











// user logic
Game.prototype.setGame = function() {
  $('.show-board').empty();
  $('.show-board').append('<div class="container"></div>');
    for (i=0 ; i<=2 ; i++) {
      $('.container').append('<div class="row" id="row' + i + '"></div>');
        for (j=0; j<=2; j++) {
          $('#row' + i).append('<div class="col-xs-4" id="column' + j + '"></div>');
        }
    }
    return "works";
}

var player1 = new Player('Dan', 'X');
var player2 = new Player('Matt', 'O');
var board = new Board();
var newGame = new Game(board, player1, player2);
