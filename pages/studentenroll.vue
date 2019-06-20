<template>
<div>
    <v-card class="studetnResCard">
   <v-card-title class="headline">Student Details</v-card-title>
            <div class="container">
             <v-text-field
             v-model="student.firstname"
                
                label="Firstname"
                required
                ></v-text-field>
<br>
  <v-text-field
             v-model="student.lastname"
                
                label="lastname"
                required
                ></v-text-field>
<br>
             <v-text-field
             v-model="student.DOB"
                
                label="Date Of Birth"
                placeholder="abc"
                type= Date
                required
   
             >
             </v-text-field>
<br>
             <v-text-field
             v-model="student.age"
                
                label="Age"
                required
   
             >
             </v-text-field>

             <br>
             <v-text-field
             v-model="student.DOJ"
                
                label="Date Of Joining"
                placeholder="abc"
                type= Date
                required
   
             >
             </v-text-field>
             <br>
             <v-text-field
             v-model="student.phone"
                
                label="Phone Number"
                required
   
             >
             </v-text-field>
             <br>
             <v-text-field
             v-model="student.email"
                
                label="Email"
                required
   
             >
             </v-text-field>
             <br>
             <v-text-field
             v-model="student.street"
                
                label="Address Street"
                required
   
             >
             </v-text-field>
             <br>
             <v-text-field
             v-model="student.city"
                
                label="City"
                required
   
             >
             </v-text-field>
             <br>
             <v-text-field
             v-model="student.zipcode"
                
                label="Zipcode"
                required
   
             >
             </v-text-field>
             <br>
            <v-btn class="loginbutton" color="success" @click="Register()">Register</v-btn>
            </div>
            
  </v-card>
</div>
</template>

<script>
export default {
   data() {
      return {
         student: {
         firstname: '',
         lastname: '',
         DOB:'',
         age:'',
         DOJ:'',
         phone:'',
         email:'',
         street:'',
         city:'',
         zipcode:'',
         }
      }
   },
   methods: {
      Register() {
         console.log(this.student);
      }
   }
}
</script>


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

