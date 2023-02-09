<template>
    <img :src="avatar" :alt="descricao">
</template>
<script>
    export default{
        name: 'Picture',
        data(){
            return{
                avatar: "/img/PepeLaugh.png",
                descricao: "Matheus Balan"
            }
        }
    }
</script>