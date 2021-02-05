<template>
  <div class="habilidades mt-5 p-5">
    <transition name="bounce" appear>
      <h1 class="text-center">{{habilidades.section}}</h1>
    </transition>
    <div class="d-flex justify-content-center flex-column">
      <transition-group appear name="bounce">
      <div v-for="(skill, index) in habilidades.habs" :key="index" class="mb-5 d-flex flex-row justify-content-center align-items-center">
        <img v-b-tooltip.hover :title="skill.titulo" :id="skill.titulo" :src="skill.logo" :alt="skill.titulo"  class="mr-5">
        <b-progress v-b-tooltip.hover :title="skill.nivel+'/10'" :value="skill.nivel" :max="10" variant="primary" animated></b-progress>
      </div>  
      </transition-group>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Habilidades',
  data () {
    return {}
  },
  props:['habilidades']
}
</script>

<style scoped>
img{
  width: 10%;
}
.progress{
  width: 60%;
  height: 3.5vw;
}
</style>
