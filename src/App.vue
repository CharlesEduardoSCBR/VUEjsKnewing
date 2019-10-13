<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li  v-for="foto of fotos" v-bind:key="foto.id">
        <img :src="foto.url" :alt = "foto.titulo" />
      </li>
    </ul>    
  </div>
</template>

<script>
export default {

  data(){
    return {
      titulo: 'VUEjsPIC',
      fotos:[ 
        {
          url: 'https://previews.123rf.com/images/peshkova/peshkova1707/peshkova170700975/83909100-abstract-glowing-polygonal-tech-lamp-on-dark-blue-background-innovative-idea-concept-3d-rendering.jpg',
          titulo: 'lamp'
        },
        {
          url: 'http://1.bp.blogspot.com/-Oj0HzE1zpsk/VKBvu6GLsdI/AAAAAAABARs/7z44skyA6og/s1600/High-tech-Creative-Lamp.jpg',
          titulo: 'brain'
        }
      ]
    }
  }
}
</script>

<style>
</style>
