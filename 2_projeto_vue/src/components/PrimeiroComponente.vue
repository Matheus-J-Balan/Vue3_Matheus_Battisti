<template>
    <div>
        <reutilizacao />
        <h1>Ola Vue!!</h1>
        <p>Meu nome é {{ nome }}, e trabalho como {{ profissao }}</p>
        <MultiplosEventos />
        <reutilizacao />
        <reutilizacao />
        <reutilizacao />
        <reutilizacao />
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue'
    export default{
        name: 'Primeiro Componente',
        components:{
            MultiplosEventos,
                Reutilizacao
        },
        data(){
            return{
                nome: "Matheus",
                profissao: "Programador"
            }
        }
    }
</script>