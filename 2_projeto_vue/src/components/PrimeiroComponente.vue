<template>
    <div>
        <h1>Ola Vue!!</h1>
        <p>Meu nome é {{ nome }}, e trabalho como {{ profissao }}</p>
        <MultiplosEventos />
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
    export default{
        name: 'Primeiro Componente',
        components:{
            MultiplosEventos
        },
        data(){
            return{
                nome: "Matheus",
                profissao: "Programador"
            }
        }
    }
</script>