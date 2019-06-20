<template>
    <div class="image">
        <v-card class="loginCard">
            <v-card-title class="headline">Login Page</v-card-title>
            <div class="container">
        <v-text-field
                v-model="username"
                label="User Id"
                required
            ></v-text-field>
            <br>
            
            <v-text-field
                v-model="password"
                label="Password"
                type= Password
                required
            ></v-text-field>
            </div>
            <v-btn class="loginbutton" color="success" @click="signin()">login</v-btn>
            </v-card>
    </div>
</template>

<script>

import { auth } from '@/plugins/firebase.js'

export default {
    data() {
        return {
            username:'',
            password: ''
        }
    },
    methods: {
        signin() {
            console.log(this.username, this.password);
            var errorCode;
            var errorMessage = null;
            auth.signInWithEmailAndPassword(this.username, this.password).catch(function(error) {
                errorCode = error.code;
                errorMessage = error.message;
            });
            if (errorMessage == null) {
                this.$router.push('/');
            }
        }
    }

}
</script>

<style>

.headline
{
    margin: 0px 153px;
}
.loginbutton{
    margin: 0px 196px;
}

.loginCard {
    top: 0;
    position: absolute !important;
    margin: auto;
    background-color: #f5f5f5 !important;
    bottom: 0;
    left: 0;
    right: 0;
    width: 500px;
    height: 360px;
    
}

.image {
  /* The image used */
  background-image: url("../assets/images/adm.png");
  
  /* Add the blur effect */
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  
  /* Full height */
  height: 100%; 
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}

</style>

   

