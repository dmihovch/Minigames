<script>
  import { gameOver } from "../stores";
  import { symbol } from "../stores";
</script>

{#if $gameOver}
  <div class="overlay">
    <h1>Game Over! {$symbol} Wins!</h1>
    <button>Restart Game</button>
  </div>
{/if}

<style>
  .overlay {
    position: absolute;
    z-index: 999;
    background-color: rgba(10, 10, 10, 0.5);
    width: max-content;
    height: max-content;
  }
</style>
