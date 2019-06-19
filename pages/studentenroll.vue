<template>
<div>
    <v-card class="studetnResCard">
   <v-card-title class="headline">Student Details</v-card-title>
            <div class="container">
             <v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="Student name"
                required
                ></v-text-field>
<br>
             <v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="Date Of Birth"
                placeholder="abc"
                type= Date
                required
   
             >
             </v-text-field>
<br>
             <v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="Age"
                required
   
             >
             </v-text-field>

             <br>
             <v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="Date Of Joining"
                placeholder="abc"
                type= Date
                required
   
             >
             </v-text-field>
             <br>
             <v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="Phone Number"
                required
   
             >
             </v-text-field>
             <br>
             <v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="Email"
                required
   
             >
             </v-text-field>
             <br>
             <v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="Address-Street"
                required
   
             >
             </v-text-field>
             <br>
             <v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="City"
                required
   
             >
             </v-text-field>
             <br>
             <v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="Zipcode"
                required
   
             >
             </v-text-field>
             <br>
            <v-btn class="loginbutton" color="success">Register</v-btn>
            </div>
            
  </v-card>
</div>
</template>

<style>

.headline
{
   display: block !important;
   text-align: center;
}
.loginbutton{
    margin: 0px 0px;
}

.studetnResCard{
   top: 0;
   position: absolute;
   margin: auto;
   background-color: #f5f5f5;
   bottom: 0;
   left: 0;
   right: 0;
   width: 600px;
   margin-top: 90px;
   min-height: 1000px;
   margin-bottom: 100px;
   
}
  </style>

