<script lang="ts">
  import { createEventDispatcher } from "svelte";

  let isDisabled: boolean = false;

  export let src: string = " ";

  export let id: number = 0;

  const dispatch = createEventDispatcher<{ click: number }>();
  export function reset() {
    isDisabled = false;
  }
  function onClick() {
    dispatch("click", id);
    isDisabled = true;
  }
</script>

<button on:click={onClick} disabled={isDisabled}>{src}</button>

<style>
  button {
    height: 200px;
    width: 200px;
    cursor: crosshair;
    font-size: 100px;
    color: white;
  }
  button:disabled {
    background-color: blue;
  }
</style>
