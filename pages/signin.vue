<template>
    <div class="image">
        <v-card class="loginCard">
            <v-card-title class="headline">Login Page</v-card-title>
            <div class="container">
        <v-text-field
                v-model="lastname"
                :rules="nameRules"
                label="User Id"
                required
            ></v-text-field>
            <br>
            
            <v-text-field
                v-model="lastname"
                :rules="nameRules"
                label="Password"
                type= Password
                required
            ></v-text-field>
            </div>
            <v-btn class="loginbutton" color="success">login</v-btn>
            </v-card>
    </div>
</template>

<script>
export default {

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
    position: absolute;
    margin: auto;
    background-color: #f5f5f5;
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

   

