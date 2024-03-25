<template>
    <div>
        <input type="radio" value="Car" v-model="inputvalue">Car
        <input type="radio" value="Dog" v-model="inputvalue">Dog
        <button @click.prevent="submit_data">Submit</button>
        <p>{{ inputValueSubmit }}</p>
        <br>
        <input v-model="inputTex" type="text">
        <button @click.prevent="onClick_data">Submit</button>
        <p>{{ valuesresutl }}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                inputvalue: "",
                inputValueSubmit: "NO Submit",
                inputTex: "",
                valuesresutl: "3!"
            }
        },
        methods: {
            submit_data(){
                if(this.inputvalue){
                    this.inputValueSubmit = this.inputvalue
                }
            },

            onClick_data(){
                if(this.inputTex){
                    this.valuesresutl = this.inputTex
                }
            }
        }
    }

</script>
<style>

</style>