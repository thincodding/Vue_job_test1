<template>
    <div>
        <h1>Hello world</h1>
        <button @click="itmeclick">Click Show Value</button>

        <input v-model="numa" type="text">
        <input v-model="numb" type="text">
        <input v-model="numr" type="text">
        <button @click="click_calc">Calc</button>

        <p>{{ numa }}</p>
    </div>
</template>
<script>
export default {
    data(){

        return{
            numa: 0,
            numb: 0,
            numr: 0
        }
    },
    methods:{
        itmeclick(){
            alert("Hello world")
        },
        click_calc(){
            this.numr = parseInt(this.numa) + parseInt(this.numb)
        }
    }
}
</script>