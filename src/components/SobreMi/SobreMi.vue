<template>
  <div class="sobre-mi m-2 p-sm-5 d-flex flex-column flex-wrap align-items-center">
    <transition appear name="bounce">
    <img :src="foto" alt="Foto del candidato" class="d-block d-md-none mb-5">
    </transition>
    <transition appear name="bounce">
      <h1><span>{{sobremi.nombre}}</span> <span>{{sobremi.apellidos}}</span></h1>
    </transition>
    <h4>{{sobremi.direccion}} </h4>
    <h4><a :href="'mailto:'+sobremi.email">{{sobremi.email}}</a></h4>
    <h4><a :href="'tel:'+sobremi.telefono">{{sobremi.telefono}}</a></h4>
    <div class="mt-5 d-flex flex-wrap flex-row justify-content-around  w-100">
        <a :href="social.enlace" target="_blank" v-for="(social, index) in sobremi.redesSociales" :key="index">
          <img v-b-tooltip.hover :title="social.tool" class="iconSocial p-2" :src="social.icono" alt="Icono red social">
        </a>
      
    </div>
    <p class="mt-5">{{sobremi.presentacion}}</p>
  </div>
</template>

<script>
export default {
  name: 'SobreMi',
  data () {
    return {}
  },
  props:['sobremi', 'foto']
}
</script>

<style scoped>
img{
    height: 35vh;
    width: 35vh;
    border-radius: 100%;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.iconSocial{
  width: 10vh;
  height: 10vh;
  transition: all 300ms ease-in-out;
}
.iconSocial:hover{
  background-color: rgba(255, 166, 0, 0.685);
  transform: translateY(-7px);
}
</style>
