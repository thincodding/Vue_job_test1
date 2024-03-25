<template>
    <div v-for="item in fetch" v-bind:key="item">
        <p>{{ item.title }}</p>
    </div>
</template>
<script>
import axios from 'axios';


export default{
    data(){
        return{
            fetch: []
        }
    },
    mounted(){
        this.fetchData()
    },
    methods:{
        async fetchData(){
            await axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
                this.fetch = response.data
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
}

</script>
