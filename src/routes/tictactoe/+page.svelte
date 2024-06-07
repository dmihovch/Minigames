<script lang="ts">
  import Board from "./board.svelte";
  import { gameOver } from "../stores";
  import Controls from "./controls.svelte";

  function checkWinCondition(
    event: CustomEvent<{ boardArr: string[]; id: number }>
  ) {
    const id: number = event.detail.id;
    const board: string[] = event.detail.boardArr;
    const symbolBeingChecked: string = board[id];

    if (board[0] === board[1] && board[1] === board[2] && board[0] !== " ") {
      gameOver.update(() => true);
      console.log($gameOver);
      return;
    }
    if (board[3] === board[4] && board[4] === board[5] && board[3] !== " ") {
      gameOver.update(() => true);
      console.log($gameOver);
      return;
    }
    if (board[6] === board[7] && board[7] === board[8] && board[6] !== " ") {
      gameOver.update(() => true);
      console.log($gameOver);
      return;
    }
    if (board[0] === board[4] && board[4] === board[8] && board[0] !== " ") {
      gameOver.update(() => true);
      console.log($gameOver);
      return;
    }
    if (board[2] === board[4] && board[4] === board[6] && board[2] !== " ") {
      gameOver.update(() => true);
      console.log($gameOver);
      return;
    }
    if (board[0] === board[3] && board[3] === board[6] && board[0] !== " ") {
      gameOver.update(() => true);
      console.log($gameOver);
      return;
    }
    if (board[1] === board[4] && board[4] === board[7] && board[1] !== " ") {
      gameOver.update(() => true);
      console.log($gameOver);
      return;
    }
    if (board[2] === board[5] && board[5] === board[8] && board[2] !== " ") {
      gameOver.update(() => true);
      console.log($gameOver);
      return;
    }
  }
</script>

<Board on:click={checkWinCondition} />
