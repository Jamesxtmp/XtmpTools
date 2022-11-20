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

  <nav>
    <ul>

      <li>
        <a href="/randomizer">
          <div class="nav-element">
            <span class="material-symbols-outlined"> shuffle </span>
            <p>  
              Organizador Aleatorio
            </p>
          </div>
        </a> 
      </li>
      <li>
        <a href="/matrices">
          <div class="nav-element">
            <span class="material-symbols-outlined"> function </span>
            <p>  
              Matrices
            </p>
          </div>
        </a> 
      </li>
      <li>
        <a href="/randomizer">
          <div class="nav-element">
            <span class="material-symbols-outlined"> shuffle </span>
            <p>  
              Organizador Aleatorio
            </p>
          </div>
        </a> 
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
    margin-top: 10px;
    list-style: none;
  }
  li {
    background-color: var(--background-2);
    height: 45px;
    width: 70%;
    margin: 8px auto;
    border-radius: 8px;
  }
  a {
    height: 45px;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .nav-element {
    display: flex;
    align-items: center;
  }
  .nav-element span{
    margin: 0 8px;
  }
  
</style>