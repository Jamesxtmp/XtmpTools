<script>
    import { onMount } from 'svelte';
    import '../styles.css'
    let device
    function deviceIndentify() {
        let deviceWidth = window.innerWidth
        if( deviceWidth < 767 ){
            device = 'smartphone'
        }else if( deviceWidth < 1023 ){
            device = 'tablet'
        }else{
            device = 'computer'
        }
    }
    onMount( () =>{
        deviceIndentify()
        window.addEventListener('resize', (e) => {
            deviceIndentify()
        })
        
    })
</script>

<div class="main-layout">
    <header>
        <div class="title">
            <h1>Inicio</h1>
        </div>
        <div class="rigth-tools">
            <span class="material-symbols-outlined">{device}</span>
            <h2>@Jamesxtmp</h2>
        </div>
    </header>
    <slot></slot>
</div>

<style>
    .main-layout{
        max-width: var(--main-size);
        margin: auto;
        background-color: #222;
    }
    header{
        display: flex;
        background-color: #333;
        justify-content: space-between;
        align-items: center;
    }
    .title{
        padding: 2px 0 2px 8px;
    }
    .rigth-tools{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 2px 8px 2px 0;
    }
    h1{
        font-size: 2em;
    }
    h2{
        font-size: 1em;
        padding-left: 4px;
    }
</style>