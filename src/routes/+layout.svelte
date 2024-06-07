<script>
  import "../global-styles.css";
</script>

<nav>
  <a href="/">Home</a>
  <a href="/tictactoe">TicTacToe</a>
</nav>

<div class="tv-shell">
  <slot />
</div>

<style>
  nav {
    padding-bottom: 15px;
  }
  .tv-shell {
    top: 10;
    left: 0;
    position: absolute;
    background-color: rgb(40, 10, 10);
    width: 100dvw;
    height: 100dvh;
  }
</style>
