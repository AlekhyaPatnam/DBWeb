<template>
<div>
    <v-card class="Inventory">
   <v-card-title class="headline">Inventory Details</v-card-title>
            <div class="container">
             <v-text-field
             v-model="lastname"
                
                label="Product Name "
                required
                ></v-text-field>
<br>
             <v-textarea
             v-model="lastname"
                
                label="Product Description"
                type= area
                required
   
             >
             </v-textarea>
<br>
             <v-text-field
             v-model="lastname"
                
                label="Cost Price"
                required
   
             >
             </v-text-field>

             <br>
             <v-text-field
             v-model="lastname"
                
                label="Selling Price"
                required
                >
             </v-text-field>
            </div>
            <br>
            <v-btn class="loginbutton" color="success">Save</v-btn>
  </v-card>
</div>
</template>
</template>