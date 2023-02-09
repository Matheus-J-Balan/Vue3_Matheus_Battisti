<template>
    <div> 
        <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Utilizo as seguintes tecnologias: </p>
        <ul>
            <li>C#</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>SQLServer</li>
        </ul>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portifólio basta <a v-bind:href="meu_link">clicar aqui</a></p>
        <Picture />
    </div>
</template>
<script>
import Picture from './Picture.vue'
    export default{
  components: { Picture },
        name: 'Info',
        data(){
            return{
                esta_trabalhando: true,
                mostrar_email: true,
                email: "matheus@outlook.com",
                meu_link: "https://youtube.com"
            }
        }
    }
</script>