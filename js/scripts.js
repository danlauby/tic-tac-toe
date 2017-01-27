function Player(playerName, symbol, turn) {
  this.playerName = playerName;
  this.symbol = symbol;
  this.turn = turn;
  this.winTotal = 0;
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
  var objValues = Object.values(this.board).join("");
  var reg = new RegExp(/[0-8]/g);
  var search = reg.exec(objValues);
  var winInfo = [];
  // console.log(this.board);
  if (this.board.column00 === this.board.column01 && this.board.column00 === this.board.column02) {
    if(this.board.column00 === "X"){
      winInfo.push(this.player1.playerName);
      this.player1.winTotal += 1;
      console.log(this.player1.winTotal);
    }else{
      winInfo.push(this.player2.playerName);
      this.player2.winTotal += 1;
      console.log(this.player2.winTotal);
    }
    winInfo.push("column00");
    winInfo.push("column01");
    winInfo.push("column02");
    this.gameOver = true;
  }else if (this.board.column10 === this.board.column11 && this.board.column10 === this.board.column12) {
    if(this.board.column10 === "X"){
      winInfo.push(this.player1.playerName);
      this.player1.winTotal += 1;

    }else{
      winInfo.push(this.player2.playerName);
      this.player2.winTotal += 1;
    }
    winInfo.push("column10");
    winInfo.push("column11");
    winInfo.push("column12");
    this.gameOver = true;
  }else if (this.board.column20 === this.board.column21 && this.board.column20 === this.board.column22) {
    if(this.board.column20 === "X"){
      winInfo.push(this.player1.playerName);
      this.player1.winTotal += 1;

    }else{
      winInfo.push(this.player2.playerName);
      this.player2.winTotal += 1;
    }
    winInfo.push("column20");
    winInfo.push("column21");
    winInfo.push("column22");
    this.gameOver = true;
  }else if (this.board.column00 === this.board.column10 && this.board.column00 === this.board.column20) {
    if(this.board.column00 === "X"){
      winInfo.push(this.player1.playerName);
      this.player1.winTotal += 1;

    }else{
      winInfo.push(this.player2.playerName);
      this.player2.winTotal += 1;
    }
    winInfo.push("column00");
    winInfo.push("column10");
    winInfo.push("column20");
    this.gameOver = true;
  }else if (this.board.column01 === this.board.column11 && this.board.column01 === this.board.column21) {
    if(this.board.column01 === "X"){
      winInfo.push(this.player1.playerName);
      this.player1.winTotal += 1;

    }else{
      winInfo.push(this.player2.playerName);
      this.player2.winTotal += 1;
    }
    winInfo.push("column01");
    winInfo.push("column11");
    winInfo.push("column21");
    this.gameOver = true;
  }else if (this.board.column02 === this.board.column12 && this.board.column02 === this.board.column22) {
    if(this.board.column02 === "X"){
      winInfo.push(this.player1.playerName);
      this.player1.winTotal += 1;
    }else{
      winInfo.push(this.player2.playerName);
      this.player2.winTotal += 1;
    }
    winInfo.push("column02");
    winInfo.push("column12");
    winInfo.push("column22");
    this.gameOver = true;
  }else if (this.board.column00 === this.board.column11 && this.board.column00 === this.board.column22) {
    if(this.board.column00 === "X"){
      winInfo.push(this.player1.playerName);
      this.player1.winTotal += 1;

    }else{
      winInfo.push(this.player2.playerName);
      this.player2.winTotal += 1;
    }
    winInfo.push("column00");
    winInfo.push("column11");
    winInfo.push("column22");
    this.gameOver = true;
  }else if (this.board.column02 === this.board.column11 && this.board.column02 === this.board.column20) {
    if(this.board.column02 === "X"){
      winInfo.push(this.player1.playerName);
      this.player1.winTotal += 1;

    }else{
      winInfo.push(this.player2.playerName);
      this.player2.winTotal += 1;
    }
    winInfo.push("column02");
    winInfo.push("column11");
    winInfo.push("column20");
    this.gameOver = true;
  } else if (search === null) {
    console.log("Tie game");
    winInfo.push("-");
    this.gameOver = true;
  }

  if(this.gameOver===true){
    return winInfo;
  }else{
    return ["no winner"]
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
  var player1Name = $("#player1").val();
  var player2Name = $("#player2").val();
  if(player1Name === ""){
    player1Name = "Player X";
  };
  if(player2Name === ""){
    player2Name = "Player O";
  };
  var player1 = new Player(player1Name, 'X',true);
  var player2 = new Player(player2Name, 'O', false);
  var board = new Board();
  var newGame = new Game(board, player1, player2);

  $(".startGame").click(function(){
    $(".p1").removeClass("winTitle");
    $(".p2").removeClass("winTitle");
    $("input").hide();
    $(".p1 h4").empty();
    $(".p2 h4").empty();
    $(".p1").append("<h4>Player X: "+player1Name+ "(" + player1.winTotal + ")</h4>");
    $(".p2").append("<h4>Player O: "+player2Name+ "(" + player2.winTotal + ")</h4>");


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
            if(win[0]===player1Name || win[0]==="-"){
              if(win[0]===player1Name){
                $(".win-board").prepend("<h2>"+ win[0]+ " is the winner!</h2>");
                $(".p1").addClass("winTitle");
              } else if (win[0]==="-"){
                $(".win-board").prepend("<h2>It's a tie!</h2>");
              }
            }
            $("#" + win[1]).addClass("winSquare");
            $("#" + win[2]).addClass("winSquare");
            $("#" + win[3]).addClass("winSquare");

          }
        }else{
          if($(this).children().length===0){
            $("#" + this.id).append("<p>0</p>");
            newGame.board[this.id] = 'O';
            player1.turn = true;
            player2.turn = false;
            var win = newGame.checkWin();
            if(win[0]===player2Name || win[0]==="-"){
              if(win[0]===player2Name){
                $(".win-board").prepend("<h2>"+ win[0]+ " is the winner!</h2>");
                $(".p2").addClass("winTitle");
              } else if (win[0]==="-"){
                $(".win-board").prepend("<h2>It's a tie!</h2>");
              }
            }
            $("#" + win[1]).addClass("winSquare");
            $("#" + win[2]).addClass("winSquare");
            $("#" + win[3]).addClass("winSquare");
          }
        };
      }
    })
  });

});
