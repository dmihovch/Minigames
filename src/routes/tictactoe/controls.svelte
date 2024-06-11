<script lang="ts">
  import { gameOver } from "../stores";
  import { symbol } from "../stores";
  import { draw } from "../stores";
  export let onRestart: () => void;
  function onClickRestart() {
    onRestart();
  }
</script>

{#if $gameOver}
  <div class="overlay">
    <div class="control-wrapper">
      <h1>Game Over! {$symbol} Wins!</h1>
      <button on:click={onClickRestart}>Restart Game</button>
    </div>
  </div>
{/if}

{#if $draw}
  <div class="overlay">
    <div class="control-wrapper">
      <h1>Game Over! Draw!</h1>
      <button on:click={onClickRestart}>Restart Game</button>
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: absolute;
    z-index: 999;
    background-color: rgba(10, 10, 10, 0.5);
    width: 600px;
    height: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .control-wrapper {
    width: max-content;
    position: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
