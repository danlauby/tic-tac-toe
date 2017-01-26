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
  this.gameOver = false;
}

Game.prototype.clearBoard = function() {
  this.board = {
    column00: 0, column01: 1, column02: 2,
    column10: 3, column11: 4, column12: 5,
    column20: 6, column21: 7, column22: 8
  };
}

Game.prototype.checkWin = function() {
  var winnerIs="";
  // console.log(this.board);
  if (this.board.column00 === this.board.column01 && this.board.column00 === this.board.column02) {
    console.log('someone wins first row');
    // console.log(this.player1);
    winnerIs = this.board.column00;
    this.gameOver = true;
  }else if (this.board.column10 === this.board.column11 && this.board.column10 === this.board.column12) {
    console.log('someone wins second row');
    winnerIs = this.board.column10;
    this.gameOver = true;
  }else if (this.board.column20 === this.board.column21 && this.board.column20 === this.board.column22) {
    console.log('someone wins third row');
    winnerIs = this.board.column20;
    this.gameOver = true;
  }else if (this.board.column00 === this.board.column10 && this.board.column00 === this.board.column20) {
    console.log('someone wins first column');
    winnerIs = this.board.column00;
    this.gameOver = true;
  }else if (this.board.column01 === this.board.column11 && this.board.column01 === this.board.column21) {
    console.log('someone wins second column');
    winnerIs = this.board.column01;
    this.gameOver = true;
  }else if (this.board.column02 === this.board.column12 && this.board.column02 === this.board.column22) {
    console.log('someone wins third column');
    winnerIs = this.board.column02;
    this.gameOver = true;
  }else if (this.board.column00 === this.board.column11 && this.board.column00 === this.board.column22) {
    console.log('someone wins backslash');
    winnerIs = this.board.column00;
    this.gameOver = true;
  }else if (this.board.column02 === this.board.column11 && this.board.column02 === this.board.column20) {
    console.log('someone wins forwardslash');
    winnerIs = this.board.column02;
    this.gameOver = true;
  }

  //checks for tie game
  var objValues = Object.values(this.board).join("");
  var reg = new RegExp(/[0-8]/g);
  var search = reg.exec(objValues);
  if (search === null) {
    console.log("Tie game");
    winnerIs = "-";
    this.gameOver = true;
  }

  if(this.gameOver===true){
    return winnerIs;
  }
}











// user logic
Game.prototype.setGame = function() {
  $('.win-board').empty();
  $(".show-board").empty();
  $('.show-board').append('<div class="gameContainer"></div>');
  for (i=0 ; i<=2 ; i++) {
    $('.gameContainer').append('<div class="row" id="row' + i + '"></div>');
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
  var player1 = new Player("player1Name", 'X',true);
  var player2 = new Player("player2Name", 'O', false);
  var board = new Board();
  var newGame = new Game(board, player1, player2);
  $(".startGame").click(function(){
    // var player1Name = $("#player1").val();
    // var player2Name = $("#player2").val();
    // console.log(player1 Name + player2Name);

    newGame.setGame();
    newGame.gameOver = false;
    newGame.player1.turn = true;
    newGame.player2.turn = false;

    $(".col-xs-4").click(function(){
      if(newGame.gameOver === false){
        if(player1.turn === true){
          if($(this).children().length===0){
            $("#" + this.id).append("<p>X</p>");
            newGame.board[this.id] = 'X';
            player1.turn = false;
            player2.turn = true;
            var win = newGame.checkWin();
            if(win==="X" || win==="-"){
              if(win==="X"){
                $(".win-board").prepend("<h2>"+ win+ " is the winner!</h2>");
              } else if (win==="-"){
                $(".win-board").prepend("<h2>It's a tie!</h2>");
              }
            }
          }
        }else{
          if($(this).children().length===0){
            $("#" + this.id).append("<p>0</p>");
            newGame.board[this.id] = 'O';
            player1.turn = true;
            player2.turn = false;
            var win = newGame.checkWin();
            if(win==="O" || win==="-"){
              if(win==="O"){
                $(".win-board").prepend("<h2>"+ win+ " is the winner!</h2>");
              } else if (win==="-"){
                $(".win-board").prepend("<h2>It's a tie!</h2>");
              }
            }
          }
        };
      }
    })
  });

});
