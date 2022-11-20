<script>
  import "../styles.css";
  import ButtonLoginGoogle from "../lib/ButtonLoginGoogle.svelte";
  import { user, isLogin } from '../store/store'
  
  if ( $isLogin ) {
    console.log( $user )
  }
</script>

<div class="main-layout">
  <header>
    <div class="left-h">
        <h1>Inicio</h1>
        <h2>@Jamesxtmp</h2>
    </div>
    <div class="rigth-h">
      {#if $isLogin && $user.photoURL }
        <h2>{ $user.photoURL }</h2>
        <img src={ $user.photoURL } alt="perfil" />
        <h2>{ $user.displayName }</h2>
      {:else}
        <ButtonLoginGoogle />
      {/if}
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
    height: 60px;
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
  img {
    border-radius: 50%;
    height: 30px;
    margin: 5px 0;
  }
</style>