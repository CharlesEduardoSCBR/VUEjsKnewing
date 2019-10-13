<template>
  <div class="">
    <h1 class="centralizado">{{ titulo }}</h1>
    
    <input type="search" class="filtro" placeholder="filtre por parte do título" 
      @input="filtro = $event.target.value"/>
    
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" v-bind:key="foto.id">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
        </meu-painel>
      </li>
    </ul>    
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue'
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'

export default {

  components: {
    'meu-painel' : Painel,
    'imagem-responsiva': ImagemResponsiva
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
 .centralizado {
   text-align: center;
 }

 .lista-fotos {
   list-style: none;
 }

 .lista-fotos, .lista-fotos-item {
   display: inline-block;
 }

  .filtro {
    width: 100%;
    display: block
  }
</style>
