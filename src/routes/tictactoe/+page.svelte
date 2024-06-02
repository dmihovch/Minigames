<script lang="ts">
  import Board from "./board.svelte";

  function checkWinCondition(event: CustomEvent<string[]>) {
    const tiles: string[] = event.detail;
    //implement checking win condition here
  }
</script>

<Board on:click={checkWinCondition} />
