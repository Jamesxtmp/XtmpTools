<script>
  import { auth } from '../firebase/sdkFire'
  import { signInWithPopup, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
  import { user, isLogin } from '../store/store'

  // TODO ventanas en celular no funcionan
  // TODO no hay las imagenes de perfil no cargan bien
  // TODO se reinicia al refrescar
  const login = async() => {
    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider)
      $user = res.user
      $isLogin = true
      console.log( res.user )
    } catch (error) {
      console.log( error )
    }
  }
</script>

<div class="login-google-button" on:click={login} on:keydown={login}>
  <span class="material-symbols-outlined"> login </span>
  <img src="google.svg" alt="" />
</div>

<style>
  .login-google-button {
    height: 40px;
    background-color: var(--background-2);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-google-button img {
    height: 60%;
  }
</style>
