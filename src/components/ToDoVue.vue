<template>
    <div>
        <input v-model="items" type="text">
        <button @click="clickData">Click Show</button>
        <div v-for="it in item_list" v-bind:key="it">
           Item is: {{ it.names }}
        </div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return{
                items: null,
                item_list: []
            }
        },
        methods:{
            clickData(){
                let ItemName = {
                    names: this.items
                }
                this.item_list.push(ItemName)
                this.items = null
            }
        }
    }
</script>
<style>

</style>