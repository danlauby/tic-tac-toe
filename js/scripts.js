function Player(playerName, symbol, turn) {
  this.playerName = playerName;
  this.symbol = symbol;
  this.turn = turn;
}

function Board() {
  this.board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
}

function Game(board, player1, player2) {
  this.board = board;
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.clearBoard = function() {
  activeBoard.board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
}











// user logic
Game.prototype.setGame = function() {
  $('.show-board').empty();
  $('.show-board').append('<div class="container"></div>');
  for (i=0 ; i<=2 ; i++) {
    $('.container').append('<div class="row" id="row' + i + '"></div>');
      for (j=0; j<=2; j++) {
        $('#row' + i).append('<div class="col-xs-4" id="column' + i + "-" + j + '"></div>');
      }
  }
  // newGame.clearBoard();
  return "setgame works";
}

Game.prototype.fillBoard = function(){
  $("#column0-0").append("<p>X</p>");
  return "fill works";
}

$(function(){
  var player1 = new Player('Dan', 'X',true);
  var player2 = new Player('Matt', 'O', false);
  var board = new Board();
  var newGame = new Game(board, player1, player2);

  newGame.setGame();
  $(".col-xs-4").click(function(){
    console.log(this.id);
    if(player1.turn === true){
      $("#" + this.id).append("<p>X</p>");
      player1.turn = false;
      player2.turn = true;
    }else{
      $("#" + this.id).append("<p>0</p>");
      player1.turn = true;
      player2.turn = false;
    };
  })

});
