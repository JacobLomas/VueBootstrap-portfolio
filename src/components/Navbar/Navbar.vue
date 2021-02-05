<template>
    <b-navbar pills v-b-scrollspy:nav-scroller toggleable="md" class="bg-dark" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav class="w-100">
      <b-nav pills vertical class="d-flex justify-content-center text-center nav">
        <b-nav-item :href="foto" target="_blank">
          <transition appear name="bounce">
            <img :src="foto" width="30%" height="30%" class="mb-2 d-none d-md-inline-block mt-0 " alt="Foto personal">
          </transition>
        </b-nav-item>
         <transition-group name="bounce" tag="li">
        <b-nav-item :href="menuItem.scroll" class="nav-item mb-3 p-2" v-for="menuItem in menu" v-bind:key="menuItem.text">
          {{menuItem.text}}
        </b-nav-item>
        </transition-group>
         <b-nav-item-dropdown text="Idiomas">
          
          <b-dropdown-item class="idioma" v-for="idioma in idiomas" 
            v-bind:key="idioma.text"
            v-on:click="cambiarIdioma(idioma.text)">
              {{idioma.text}}
          </b-dropdown-item>
           
        </b-nav-item-dropdown>
      </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
  },
  props:['menu', 'idiomas', 'foto'],
  methods:{
    cambiarIdioma:function(idioma){
      this.$emit('nuevoIdioma', idioma);
    }, 
  }
}
</script>

<style scoped>
img{
    height: 25vh;
    width: 25vh;
    border-radius: 100%;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.navbar-toggler, .show{
  width: 100%;
}
@media screen and (min-width:768px){
  #navbar{
    height: 100%;
  }
  .nav{
    flex-flow: column wrap;
    height: 100% !important;
    width: 100% !important;
    letter-spacing: 3px;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
    justify-content: center !important;
  }
  li{
    width: 100%;
    order: 2;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 0.7s;
  }
  li li:hover{
    background-color: rgba(255, 166, 0, 0.575);
  }
  li li:hover a{
    color: white !important;
  }
  .dropdown{
    order:1;
  }
  ul{
    overflow: auto !important;
    height: 100vh;
  }
  

}
</style>
