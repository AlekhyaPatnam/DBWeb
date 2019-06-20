<template>
  <div>
    <v-card class="Fee">
      <v-card-title class="headline">Fee</v-card-title>
      <div class="container">
        <v-overflow-btn :items="dropdown_font" label="Fee Type" target="#dropdown-example"></v-overflow-btn>
        <v-text-field v-model="lastname" label="Fee Amount" required></v-text-field>

        <v-text-field v-model="lastname" label="Date" placeholder="abc" type="Date" required></v-text-field>
      </div>
      <br>
      <v-btn class="loginbutton" color="success">Save</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
        dropdown_font: ["Membership", "Tests", "Purchasing Product"],
    }),
  props: {
      'details': {
          type: Object,
          required: true
      },
      'isDisabled': {
          type: Boolean,
          required: true
      }
  }
};
</script>

<style>
</style>
