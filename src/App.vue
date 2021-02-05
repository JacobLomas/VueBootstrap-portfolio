<template>

  <div id="app" class="container-fluid">
    <div id="loader" class="loader"><img class="loader-img" src="../public/imagenes/loader.svg" alt="Loading"></div>
    <div class="row overflow-scroll">
    <Navbar class="col-12 col-md-4 sticky-top" :foto="ccvv.foto" :idiomas="ccvv.idiomas" :menu="ccvvIdioma.menu" @nuevoIdioma="idioma=$event"/>
    <div style=" overflow-y: scroll" id="nav-scroller" ref="content" class="col-12 col-md-8">
        <SobreMi id="sobremi" :foto="ccvv.foto" :sobremi="ccvvIdioma.sobremi" class="mb-5"/>
        <hr>
        <Experiencia id="experiencia" :experiencia="ccvvIdioma.experiencia" class="mb-5"/>
        <hr>
        <Educacion id="educacion" :educacion="ccvvIdioma.educacion" />
        <hr>
        <Habilidades id="habilidades" :habilidades="ccvvIdioma.habilidades"/>
        <hr>
        <Proyectos id="proyectos" :proyectos="ccvvIdioma.proyectos"/>
        <hr>
        <Contacto id="contacto" :contacto="ccvvIdioma.contacto"/>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import SobreMi from './components/SobreMi/SobreMi.vue'
import Experiencia from './components/Experiencia/Experiencia.vue'
import Educacion from './components/Educacion/Educacion.vue'
import Habilidades from './components/Habilidades/Habilidades.vue'
import Proyectos from './components/Proyectos/Proyectos.vue'
import Contacto from './components/Contacto/Contacto.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
export default {
  name: 'App',
  components: {
    Navbar,
    SobreMi,
    Experiencia,
    Educacion,
    Habilidades,
    Proyectos,
    Contacto
  },
  mounted(){
    axios.get('/json/ccvv.json').then((response)=>{
      this.ccvv=response.data;
      let loader=document.getElementById('loader');
      loader.style.cssText="display:none";
      document.getElementById('app').removeChild(loader);
      
    });
  },
  data(){
    return{
        idioma:'Español',
        ccvv:{
          foto:"",
          idiomas:""
        },
        text:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
    }
  },
  computed:{
    ccvvIdioma:function(){
        if(this.idioma=="Español" && this.ccvv['Español'])
            return this.ccvv.Español;
        if(this.idioma=="English" && this.ccvv['English'])
          return this.ccvv.English;
        else
           return {
             sobremi:{nombre:""},
             experiencia:{section:"", exps:""},
             educacion:{section:"", btntext:""},
             habilidades:{section:""},
             proyectos:{section:""},
             contacto:{section:""}
             }
    }
  },
}
</script>

<style>
.row > *{
    padding: 0% !important;
  overflow-y:auto  !important;
    max-height: 100vh !important;
}
#nav-scroller{
    height: 100vh  !important;
}
@media screen and (min-width:768px){
    .fixed{
        position: fixed;
    }

    .row > *{
    height: 100vh !important;
}
}
</style>