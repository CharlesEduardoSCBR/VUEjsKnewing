<template>
  <button class="botao botao-perigo" type="tipo" @click="disparaAcao()">{{ rotulo }}</button>
</template>

<script>
export default {

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

    props: ['tipo', 'rotulo', 'confirmacao']
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