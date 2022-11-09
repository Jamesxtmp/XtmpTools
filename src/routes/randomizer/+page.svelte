<div class="randomizer">
  <div class="items">
    <div class="sets">
      <p>Conjunto 1</p>
      <span class="material-symbols-outlined"> expand_less </span>
    </div>
    <div class="wrap-items">
      <div class="item">
        <input type="checkbox" class="selected" />
        <div>Nombre del Participante</div>
        <span class="material-symbols-outlined"> edit </span>
      </div>
      <div class="item">
        <input type="checkbox" class="selected" />
        <div>Nombre del Participante</div>
        <span class="material-symbols-outlined"> edit </span>
      </div>
      <div class="button-plus">
        <span class="material-symbols-outlined"> add </span>
      </div>
    </div>
  </div>
  <div class="center-butons">
    <p>Organizar</p>
    <span class="material-symbols-outlined"> shuffle </span>
  </div>
  <div class="results">
    <div class="res-group">
      <p>Grupo 1</p>
      <div class="item">
        <div>Nombre del Participante</div>
      </div>
      <div class="item">
        <div>Nombre del Participante</div>
      </div>
    </div>
    <div class="res-group">
      <p>Grupo 2</p>
      <div class="item">
        <div>Nombre del Participante</div>
      </div>
      <div class="item">
        <div>Nombre del Participante</div>
      </div>
    </div>
  </div>
</div>

<style>
  .randomizer{
    display: block;
  }
  .items{
    margin: 10px auto;
    border-radius: 8px;
    width: 90%;
    display: flex;
    flex-direction: column;
    background-color: var(--background-2);
  }
  .items .sets{
    display: flex;
    align-items: center;
    margin: 4px auto;
    padding: 4px 6px;
    border-radius: 8px;
    background-color: var(--background-3);
  }
  .items .wrap-items{
    background-color: var(--background-3);
    border-radius: 8px;
    margin-top: 2px;
    padding: 2px 0;
  }
  .button-plus{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    border-radius: 8px;
    margin: 8px auto 4px auto;
    background-color: var(--background-2);
  }

  /*--------------------------items*/
  .items .item{
    box-shadow: 0px 1px 0px 0px var(--background-2);
    padding: 4px 0;
    display: flex;
    align-items: center;
    width: 70%;
    margin: 1px auto;
  }
  .items .item div , .items .item span{
    font-size: 1em;
    margin-left: 4px;
  }


  .center-butons{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
    background-color: var(--background-3);
    border-radius: 8px;

    width: 40%;
    margin: 5px auto;
    padding: 6px 3px;
  }
  .center-butons span{
    margin-left: 4px;
  }


  .results{
    margin: 10px auto;
    padding: 4px 0;
    border-radius: 8px;
    width: 90%;
    display: flex;
    flex-direction: column;
    background-color: var(--background-3);
  }
  .results .res-group{
    margin-top: 5px;
    border-radius: 8px;
    width: 100%;
    background-color: var(--background-2);
  }
  .results p{
    font-size: 1.3em;
    padding: 4px;
    text-align: center;
  }
  .results .item{
    width: 70%;
    margin: auto;
  }
  .results .item div{
    display: block;
  }
</style>