<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    
    <input type="search" class="filtro" placeholder="filtre por parte do título" 
      v-on:input="filtro = $event.target.value"/>
    
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" v-bind:key="foto.id">
        <meu-painel :titulo="foto.titulo">
          <img class="responsive-image" :src="foto.url" :alt = "foto.titulo" />
        </meu-painel>
      </li>
    </ul>    
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue'

export default {

  components: {
    'meu-painel' : Painel
  },

  data(){
    return {
      titulo: 'VUEjsPIC',
      fotos:[],
      filtro: ''
    }
  },

  computed: {
    fotosComFiltro(){
      let fotosReturn = [];
      
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        
        fotosReturn = this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        fotosReturn = this.fotos;
      }

      return fotosReturn;
    }
  },

  created(){
    
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style>
 .corpo {
   font-family: Helvetica, sans-serif;
   width: 96%;
   margin: 0 auto;
 }

 .centralizado {
   text-align: center;
 }

 .lista-fotos {
   list-style: none;
 }

 .lista-fotos, .lista-fotos-item {
   display: inline-block;
 }

  .responsive-image {
    width: 100%;
  }

  .filtro {
    width: 100%;
    display: block
  }
</style>
