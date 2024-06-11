<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { symbol } from "../stores";
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
</script>

<div class="board-container">
  <Tile id={0} src={tileSrc[0]} on:click={onClick} />
  <Tile id={1} src={tileSrc[1]} on:click={onClick} />
  <Tile id={2} src={tileSrc[2]} on:click={onClick} />
  <Tile id={3} src={tileSrc[3]} on:click={onClick} />
  <Tile id={4} src={tileSrc[4]} on:click={onClick} />
  <Tile id={5} src={tileSrc[5]} on:click={onClick} />
  <Tile id={6} src={tileSrc[6]} on:click={onClick} />
  <Tile id={7} src={tileSrc[7]} on:click={onClick} />
  <Tile id={8} src={tileSrc[8]} on:click={onClick} />
  <Controls></Controls>
</div>

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
