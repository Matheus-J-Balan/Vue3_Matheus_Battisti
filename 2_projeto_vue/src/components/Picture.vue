<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <mudar-imagem @mudar-imagem="trocarImagem"/>
    </div>
</template>
<script>
import MudarImagem from './MudarImagem.vue'
import Reutilizacao from './Reutilizacao.vue'

export default{
    components: { 
    Reutilizacao,
        MudarImagem 
    },
        name: 'Picture',
        data(){
            return{
                avatar: "/img/PepeLaugh.png",
                descricao: "Matheus Balan"
            }
        },
        methods:{
            trocarImagem(){
                this.avatar = "/img/sadge.png"
            }
        }
    }
</script>  