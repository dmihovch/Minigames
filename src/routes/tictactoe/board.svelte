<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { gameOver, symbol, draw } from "../stores";
  import Tile from "./tile.svelte";
  import Controls from "./controls.svelte";

  type StringArrayAndNumber = {
    boardArr: string[];
    id: number;
  };
  const dispatch = createEventDispatcher<{ click: StringArrayAndNumber }>();

  const tileSrc: string[] = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  function onClick(event: CustomEvent<number>) {
    setSymbol();
    displaySymbol(event.detail);
    dispatch("click", { boardArr: tileSrc, id: event.detail });
  }

  function setSymbol() {
    if ($symbol === "X") {
      symbol.set("O");
      return;
    }

    if ($symbol === "O") {
      symbol.set("X");
      return;
    }
  }

  function displaySymbol(id: number) {
    tileSrc[id] = $symbol;
  }

  let tiles: Tile[] = [];

  function restartGame() {
    tileSrc.forEach((symbol, i) => {
      tileSrc[i] = " ";
    });
    tiles.forEach((tile) => {
      tile.reset();
    });
    symbol.update(() => "O");
    gameOver.update(() => false);
    draw.update(() => false);
  }
</script>

<div class="board-container">
  <Tile id={0} src={tileSrc[0]} bind:this={tiles[0]} on:click={onClick} />
  <Tile id={1} src={tileSrc[1]} bind:this={tiles[1]} on:click={onClick} />
  <Tile id={2} src={tileSrc[2]} bind:this={tiles[2]} on:click={onClick} />
  <Tile id={3} src={tileSrc[3]} bind:this={tiles[3]} on:click={onClick} />
  <Tile id={4} src={tileSrc[4]} bind:this={tiles[4]} on:click={onClick} />
  <Tile id={5} src={tileSrc[5]} bind:this={tiles[5]} on:click={onClick} />
  <Tile id={6} src={tileSrc[6]} bind:this={tiles[6]} on:click={onClick} />
  <Tile id={7} src={tileSrc[7]} bind:this={tiles[7]} on:click={onClick} />
  <Tile id={8} src={tileSrc[8]} bind:this={tiles[8]} on:click={onClick} />
</div>
<Controls onRestart={restartGame} />

<style>
  .board-container {
    height: 600px;
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: rgba(10, 10, 10, 0.5);

    display: flex;
    flex-wrap: wrap;
  }
</style>
