<script>
  import "../styles.css";
  import ButtonLoginGoogle from "../lib/ButtonLoginGoogle.svelte";
</script>

<div class="main-layout">
  <header>
    <div class="left-h">
        <h1>Inicio</h1>
        <h2>@Jamesxtmp</h2>
    </div>
    <div class="rigth-h">
      <ButtonLoginGoogle />
    </div>
  </header>
  <slot />
</div>

<style>
  .main-layout {
    max-width: var(--main-size);
    margin: auto;
  }
  header {
    display: flex;
    background-color: var(--background-2);
    justify-content: space-between;
    align-items: center;
  }
  .left-h{
    padding-left: 8px;
  }
  .rigth-h {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 2px 8px 2px 0;
  }
  h1 {
    font-size: 2em;
  }
  h2 {
    position: relative;
    bottom: 4px;
    font-size: .8em;
    padding-left: 4px;
    color: var(--font-color-2);
  }
</style>