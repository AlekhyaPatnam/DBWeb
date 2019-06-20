<template>
  <div>
    <v-card class="studetnResCard">
      <v-card-title class="headline">Student Details</v-card-title>
      <div class="container">
        <v-text-field disabled="isDisabled" v-model="lastname" label="Student name" required></v-text-field>
        <br>
        <v-text-field
          v-model="lastname"
          label="Date Of Birth"
          placeholder="abc"
          type="Date"
          required
        ></v-text-field>
        <br>
        <v-text-field v-model="lastname" label="Age" required></v-text-field>

        <br>
        <v-text-field
          v-model="lastname"
          label="Date Of Joining"
          placeholder="abc"
          type="Date"
          required
        ></v-text-field>
        <br>
        <v-text-field v-model="lastname" label="Phone Number" required></v-text-field>
        <br>
        <v-text-field v-model="lastname" label="Email" required></v-text-field>
        <br>
        <v-text-field v-model="lastname" label="Address-Street" required></v-text-field>
        <br>
        <v-text-field v-model="lastname" label="City" required></v-text-field>
        <br>
        <v-text-field v-model="lastname" label="Zipcode" required></v-text-field>
        <br>
        <v-btn class="loginbutton" color="success">Register</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
