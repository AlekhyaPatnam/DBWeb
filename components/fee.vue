<template>
  <div>
    <v-card class="feecard">
      <v-card-title class="headline">Fee Details</v-card-title>
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
        dropdown_font: ["Membership", "Tests", "Purchased Uniform","Purchased Swords","Purchased Daggger","Purchased Nunchuku" ],
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
.headline {
  display: block !important;
  text-align: center;
}

.loginbutton {
  margin: 10px 200px;
}

.feecard {
 margin: auto;
  background-color: #f5f5f5;
     width: 600px;
    margin-top: 90px;
    min-height: 15px;
    margin-bottom: 0px
}
</style>
