<template>
    <div>
        <input type="text" v-model="firtname">
        <input type="text" v-model="lastname">
        <input type="text" v-model="email">
        <input type="text" v-model="phone">
        <input type="text" v-model="dob">
        <button @click.prevent="onSubmitData">Submit</button>
        <hr>
        <h4>FirstName {{ re_firstname }}</h4>
        <h4>LastName {{ re_lastname }}</h4>
        <h4>Email {{ re_email }}</h4>
        <h4>Phone {{ re_phone }}</h4>
        <h4>DOB {{ re_dob }}</h4>
        <hr>
        <h1>Calculator</h1>
        <input v-model="numa" type="text">
        <input v-model="numb" type="text">
        <input v-model="result" type="text">
        <button @click="onCalc">+</button>
        <button @click="Minus">-</button>
        <button @click="Multi">*</button>
        <button @click="Devide">/</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                firtname: "",
                re_firstname: "",

                lastname: "",
                re_lastname: "",

                email: '',
                re_email: "",

                phone: "",
                re_phone: "",


                dob: "",
                re_dob: "",

                numa: 0,
                numb: 0,
                result: 0

            }
        },

        methods: {

            onSubmitData(){
                if(this.firtname){
                    this.re_firstname = this.firtname
                    this.firtname = ""
                }
                if(this.lastname){
                    this.re_lastname = this.lastname
                    this.lastname = ""
                }
                 if(this.email){
                    this.re_email = this.email
                    this.email = ""
                }
                 if(this.phone){
                    this.re_phone = this.phone
                    this.phone = ""
                }
                 if(this.dob){
                    this.re_dob = this.dob
                    this.dob = ""
                }
                else{
                    alert("Data Sucess")
                }
            },

            onCalc(){
                this.result = parseInt(this.numa) + parseInt(this.numb)
            },
            Minus(){
                this.result = parseInt(this.numa) - parseInt(this.numb)
            },
            Devide(){
                this.result = parseInt(this.numa) / parseInt(this.numb)
            },
            Multi(){
                this.result = parseInt(this.numa) * parseInt(this.numb)
            }

        }
    }
</script>
<style scoped>

</style>