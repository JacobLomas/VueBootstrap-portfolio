<template>
  <div class="educacion d-flex flex-column flex-wrap align-items-center justify-content-center pb-3" >
    <transition name="bounce" appear>
      <h1 class="text-center">{{educacion.section}}</h1>
    </transition>
    <b-card no-body class="mb-1 w-75" v-for="(edu, index) in educacion.edus" :key="indice(index)">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle=indice(index+10) variant="info" class="bg-dark"><h4>{{edu.titulo}}</h4></b-button>
      </b-card-header>
      <b-collapse :id=indice(index+10) visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><h4>{{edu.lugar}}</h4></b-card-text>
          <hr>
          <h6>Fecha grauacion: {{edu.fecha}}</h6>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Educacion',
  data () {
    return {}
  },
  methods:{
    indice(n){
      return ""+n
    }
  },
  props:['educacion'],
}
</script>

<style scoped></style>
