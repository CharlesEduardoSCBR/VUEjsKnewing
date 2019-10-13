<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="foto.url" :alt = "foto.titulo" />
  </div>
</template>

<script>
export default {

  data(){
    return {
      titulo: 'VUEjsPIC',
      foto: {
        url: 'https://previews.123rf.com/images/peshkova/peshkova1707/peshkova170700975/83909100-abstract-glowing-polygonal-tech-lamp-on-dark-blue-background-innovative-idea-concept-3d-rendering.jpg',
        titulo: 'lamp'
      }
    }
  }
}
</script>

<style>
</style>
