<script lang="ts">
  import Board from "./board.svelte";
  function checkWinCondition(
    event: CustomEvent<{ boardArr: string[]; id: number }>
  ) {
    //implement
  }
  function threeInARowCheck(tilesToCheck: string[]): boolean {
    if (
      tilesToCheck[0] === tilesToCheck[1] &&
      tilesToCheck[0] === tilesToCheck[2]
    ) {
      return true;
    }
    return false;
  }
</script>

<Board on:click={checkWinCondition} />
