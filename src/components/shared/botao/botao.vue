<template>
  <button 
    class="botao"
    :class="estiloDoBotao" type="tipo" @click="disparaAcao()">{{ rotulo }}</button>
</template>

<script>
export default {

    computed: {

        estiloDoBotao(){
            let estiloBotao = '';
            if(this.estilo == 'padrao' || this.estilo == '' || typeof this.estilo === 'undefined') estiloBotao = 'botao-padrao'
            if(this.estilo == 'perigo') estiloBotao = 'botao-perigo'

            return estiloBotao
        }
    },

    methods: {

        disparaAcao(){
            if(this.confirmacao){
                if(confirm('Confirmar operação?')){
                    this.$emit('botaoAtivado');
                }
                return;
            }
            
            this.$emit('botaoAtivado');
        }
    },

    props: {

        confirmacao : Boolean,
        
        estilo : String,

        tipo : {
            required: true,
            type: String
        },

        rotulo : {
            required: true,
            type: String         
        }
    }
}
</script>

<style>
    .botao{
        display: inline-block;
        padding: 10px;
        border-radius:  3px;
        margin: 10 px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>