<template>
  <div class="experiencia d-flex flex-column flex-wrap align-items-center justify-content-center pb-5" role="tablist">   
    <transition name="bounce" appear>
      <h1 class="text-center">{{experiencia.section}}</h1>
    </transition>
    <b-card no-body class="mb-1 w-75" v-for="(exp, index) in experiencia.exps" :key="indice(index)">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle=indice(index) variant="info" class="bg-dark"><h4>{{exp.nombrePuesto}}</h4></b-button>
      </b-card-header>
      <b-collapse :id=indice(index) visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><h4>{{exp.empresa}}</h4></b-card-text>
          <b-card-text>{{ exp.descripcion }}</b-card-text>
          <hr>
          <h6>Fecha de inicio: {{exp.fechaInicio}} | Fecha fin: {{exp.fechaFin}}</h6>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Experiencia',
  data () {
    return {}
  },
  methods:{
    indice(n){
      return ""+n
    }
  },
  props:['experiencia']
}
</script>

<style scoped>
</style>
