<template>
  <div class="">
    <h1 class="centralizado">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    
    <input type="search" class="filtro" placeholder="filtre por parte do título" 
      @input="filtro = $event.target.value"/>
    
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" v-bind:key="foto.id">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" 
            v-meu-transform.rotate="1.5"
          />

          <router-link :to="{ name : 'alterar', params: { id: foto._id } }">
            <meu-botao 
              tipo="button"
              rotulo="Alterar"
            />
          </router-link>

          <meu-botao 
            tipo="button" 
            rotulo="Remover" 
            @botaoAtivado="remove(foto)" 
            :confirmacao="true"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>    
  </div>
</template>

<script>
import Botao from '../shared/botao/botao.vue';
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';

import FotoService from '../../domain/foto/FotoService.js'
import transform from '../../directives/Transform';

export default {

  components: {
    'meu-painel' : Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao' : Botao
  },

  directives: {
    'meu-transform' : transform
  },

  data(){
    return {
      titulo: 'VUEjsPIC',
      fotos:[],
      filtro: '',
      mensagem: ''
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
    
    this.service = new FotoService(this.$resource);
    this.service
      .lista()
      .then(fotos => this.fotos = fotos, err => {
        this.mensagem = err.message;
      });
  },

  methods: {
    
    remove(foto) {
      
      this.service
        .delete(foto._id)
        .then(()=> {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = 'Foto removida com sucesso';
        }, err => {
          console.log(err);
          this.mensagem = err.mesage;
        });
    }
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
