<script lang="ts">
  import Board from "./board.svelte";
  import { gameOver, draw } from "../stores";
  import Scoreboard from "./scoreboard.svelte";

  function checkWinCondition(
    event: CustomEvent<{ boardArr: string[]; id: number }>
  ) {
    const id: number = event.detail.id;
    const board: string[] = event.detail.boardArr;
    const symbolBeingChecked: string = board[id];

    if (board[0] === board[1] && board[1] === board[2] && board[0] !== " ") {
      if (board[0] === "X") {
        xWins++;
      }
      if (board[0] === "O") {
        oWins++;
      }
      gameOver.update(() => true);
      return;
    }
    if (board[3] === board[4] && board[4] === board[5] && board[3] !== " ") {
      if (board[3] === "X") {
        xWins++;
      }
      if (board[3] === "O") {
        oWins++;
      }
      gameOver.update(() => true);
      return;
    }
    if (board[6] === board[7] && board[7] === board[8] && board[6] !== " ") {
      if (board[6] === "X") {
        xWins++;
      }
      if (board[6] === "O") {
        oWins++;
      }
      gameOver.update(() => true);
      return;
    }
    if (board[0] === board[4] && board[4] === board[8] && board[0] !== " ") {
      if (board[0] === "X") {
        xWins++;
      }
      if (board[0] === "O") {
        oWins++;
      }
      gameOver.update(() => true);
      return;
    }
    if (board[2] === board[4] && board[4] === board[6] && board[2] !== " ") {
      if (board[2] === "X") {
        xWins++;
      }
      if (board[2] === "O") {
        oWins++;
      }
      gameOver.update(() => true);
      return;
    }
    if (board[0] === board[3] && board[3] === board[6] && board[0] !== " ") {
      if (board[0] === "X") {
        xWins++;
      }
      if (board[0] === "O") {
        oWins++;
      }
      gameOver.update(() => true);
      return;
    }
    if (board[1] === board[4] && board[4] === board[7] && board[1] !== " ") {
      if (board[1] === "X") {
        xWins++;
      }
      if (board[1] === "O") {
        oWins++;
      }
      gameOver.update(() => true);
      return;
    }
    if (board[2] === board[5] && board[5] === board[8] && board[2] !== " ") {
      if (board[2] === "X") {
        xWins++;
      }
      if (board[2] === "O") {
        oWins++;
      }
      gameOver.update(() => true);
      return;
    }
    let emptySpace: boolean = true;
    for (let i: number = 0; i < board.length; i++) {
      if (board[i] === " ") {
        emptySpace = false;
      }
    }
    //bruh lmao
    if (emptySpace) {
      draws++;
      draw.update(() => true);
    }
  }

  let xWins: number = 0;
  let oWins: number = 0;
  let draws: number = 0;

  let board: Board;
</script>

<Board on:click={checkWinCondition} bind:this={board}></Board>
<Scoreboard {xWins} {oWins} {draws} />
