<template>
  <div class="proyectos">
    <transition name="bounce" appear>
      <h1 class="text-center">{{proyectos.section}}</h1>
    </transition>
    <b-card-group deck class="p-md-5 w-100 d-flex flex-row flex-wrap justify-content-center ">
    <b-card class="mt-5 m-1" v-for="(proyecto, index) in proyectos.prs" :key="index" :title="proyecto.titulo" :img-src="proyecto.imagen" :img-alt="proyecto.titulo" img-top>
      <b-card-text>
        <p class="tecnologias text-center mt-3">{{proyecto.tecnologias}}</p>
      </b-card-text>
      <template #footer>
        <b-button v-b-modal="proyecto.titulo" variant="primary">{{proyectos.btntext}}</b-button>
      </template>
      <b-modal  scrollable  class="d-flex justify-content-center align-items-center" :id="proyecto.titulo" ok-only size="xl" centered>
        <img :src="proyecto.imagen" :alt="proyecto.titulo" class="w-100">
        <p><br>{{proyecto.explicacion}}</p>
        <p>Repository: <a :href="proyecto.linkRepositorio">Link GitHub</a></p>
        <p>Demo web: <a :href="proyecto.linkProduccion">Link GitHub Pages</a></p>
      </b-modal>
    </b-card>
  </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'Proyectos',
  data () {
    return {}
  },
  props:['proyectos']
}
</script>

<style scoped>
.card-title{
  font-family: 'Chewy', cursive;
  font-size: 2.3rem;
  color: var(--primaryColor);
  text-align: center;
}
.card-deck{
margin-left: 0px !important;
}
.card-footer{
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.tecnologias{
  font-family: 'Chewy', cursive;
  letter-spacing: 1px;
}
.card{
  width:100% !important;
  flex-basis: initial !important;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.137);;
}
@media screen and (min-width:992px) {
  .card{
  width:32.5% !important;
}
}
</style>
