function Player(playerName, symbol, turn) {
  this.playerName = playerName;
  this.symbol = symbol;
  this.turn = turn;
}

function Board() {
  this.board = {
    column00: 0, column01: 1, column02: 2,
    column10: 3, column11: 4, column12: 5,
    column20: 6, column21: 7, column22: 8
  };
}

function Game(board, player1, player2) {
  this.board = board;
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.clearBoard = function() {
  this.board = {
    column00: 0, column01: 1, column02: 2,
    column10: 3, column11: 4, column12: 5,
    column20: 6, column21: 7, column22: 8
  };
}

Game.prototype.checkWin = function() {
  // console.log(this.board);
  if (this.board.column00 === this.board.column01 && this.board.column00 === this.board.column02) {
    console.log('someone wins first row');
  }else if (this.board.column10 === this.board.column11 && this.board.column10 === this.board.column12) {
    console.log('someone wins second row');
  }else if (this.board.column20 === this.board.column21 && this.board.column20 === this.board.column22) {
    console.log('someone wins third row');
  }else if (this.board.column00 === this.board.column10 && this.board.column00 === this.board.column20) {
    console.log('someone wins first column');
  }else if (this.board.column01 === this.board.column11 && this.board.column01 === this.board.column21) {
    console.log('someone wins second column');
  }else if (this.board.column02 === this.board.column12 && this.board.column02 === this.board.column22) {
    console.log('someone wins third column');
  }else if (this.board.column00 === this.board.column11 && this.board.column00 === this.board.column22) {
    console.log('someone wins backslash');
  }else if (this.board.column02 === this.board.column11 && this.board.column02 === this.board.column20) {
    console.log('someone wins forwardslash');
  }

  //checks for tie game
  var objValues = Object.values(this.board).join("");
  var reg = new RegExp(/[0-8]/g);
  var search = reg.exec(objValues);
  if (search === null) {
    console.log("Tie game");
  }
}











// user logic
Game.prototype.setGame = function() {
  $('.show-board').empty();
  $('.show-board').append('<div class="container"></div>');
  for (i=0 ; i<=2 ; i++) {
    $('.container').append('<div class="row" id="row' + i + '"></div>');
      for (j=0; j<=2; j++) {
        $('#row' + i).append('<div class="col-xs-4" id="column' + i + j + '"></div>');
      }
  }
  this.clearBoard();
  return "setgame works";
}

// Game.prototype.fillBoard = function(){
//   $("#column0-0").append("<p>X</p>");
//   return "fill works";
// }

$(function(){
  var player1 = new Player('Dan', 'X',true);
  var player2 = new Player('Matt', 'O', false);
  var board = new Board();
  var newGame = new Game(board, player1, player2);

  newGame.setGame();
  $(".col-xs-4").click(function(){
    console.log(this.id);
    if(player1.turn === true){
      if($(this).children().length===0){
        $("#" + this.id).append("<p>X</p>");
        newGame.board[this.id] = 'X';
        player1.turn = false;
        player2.turn = true;
        newGame.checkWin();
      }
    }else{
      if($(this).children().length===0){
        $("#" + this.id).append("<p>0</p>");
        newGame.board[this.id] = 'O';
        player1.turn = true;
        player2.turn = false;
        newGame.checkWin();
      }
    };
  })

});
