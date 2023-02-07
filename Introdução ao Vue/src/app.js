const MyNameApp = {
    data(){
        return{
            name: "Matheus",
            age: 18
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");