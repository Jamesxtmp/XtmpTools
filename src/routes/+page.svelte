<script>
  import ButtonLoginGoogle from "../lib/ButtonLoginGoogle.svelte";
  import SearchBasic from "../lib/SearchBasic.svelte";
</script>

<div class="main-page">
  <div class="top-tools">
    <div class="top-tool-left"></div>
    <div class="top-tool-center">
      <SearchBasic />
    </div>
    <div class="top-tool-rigth"></div>
  </div>
  <!-- TODO añadir respuesta a todo el li -->
  <nav>
    <ul>
      <li>
        <div class="nav-element">
          <span class="material-symbols-outlined"> shuffle </span><a
            href="/randomizer">Organizador Aleatorio</a
          >
        </div>
      </li>
      <li>
        <div class="nav-element">
          <span class="material-symbols-outlined"> calculate </span><a
            href="/matricez">Matricez</a
          >
        </div>
      </li>
      <li>
        <div class="nav-element">
          <span class="material-symbols-outlined"> shuffle </span><a
            href="/randomizer">Organizador Aleatorio</a
          >
        </div>
      </li>
      <li>
        <div class="nav-element">
          <span class="material-symbols-outlined"> shuffle </span><a
            href="/randomizer">Organizador o</a
          >
        </div>
      </li>
    </ul>
  </nav>
</div>

<style>
  .top-tools{
    margin-top: 8px;
    display: flex;
  }
  .top-tools > div{
    margin: 0 4px;
  }
  .top-tool-rigth, .top-tool-left{
    width: 20%;
  }
  .top-tool-center{
    width: 60%;
  }

  ul {
    list-style: none;
  }
  .nav-element {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  li {
    display: flex;
    height: 45px;
    text-align: center;
    background-color: var(--background-2);
    width: 70%;
    margin: 8px auto;
    padding: 4px 4px;
    border-radius: 8px;
  }
  a {
    margin-left: 4px;
    text-decoration: none;
  }
</style>