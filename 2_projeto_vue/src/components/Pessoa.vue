<template>
    <div> 
        <h2>Está é a descrição da pessoa: {{ nome }}</h2>
        <Info :email="email" :esta_trabalhando=true />
        <Form />
    </div>

</template>
<script>
import Form from './Form.vue';
import Info from './Info.vue';

export default{
    name: 'Pessoa',
    components:{
        Info,
        Form
    },
    data(){
        return{
            nome: 'Matheus',
            email: 'matheus@email.com'
        }
    }
}
</script>