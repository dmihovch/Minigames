<script>
  import "../global-styles.css";
</script>

<nav>
  <a href="/">Home</a>
  <a href="/tictactoe">TicTacToe</a>
</nav>

<div class="play-area">
  <slot />
</div>

<style>
  nav {
    padding-bottom: 15px;
  }
  .play-area {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: rgb(40, 10, 10);
    width: 70dvw;
    height: 85dvh;
  }
</style>
