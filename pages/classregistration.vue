<template>
  <div>
    <v-card class="classreg">
      <v-card-title class="headline">Class Registration</v-card-title>
      <div class="container">
        <v-overflow-btn
          v-model="lastname"
          :items="dropdown_class"
          label="Select Class"
          target="#dropdown-example"
        ></v-overflow-btn>
        </div>
        <v-btn class="loginbutton" color="success">Register</v-btn>
    </v-card>
    </div>
</template>

<script>
export default {
    data() {
    return {
      dropdown_Class:"vfffffffdb",
     
    }
  }
};
</script>