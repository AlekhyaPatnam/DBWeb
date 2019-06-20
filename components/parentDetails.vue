<template>
  <div class="">
    <title class="headline">Parent Details</title>
    <v-text-field
      :disabled="this.isDisabled"
      v-model="details.firstname"
      label="Firstname"
      required
    ></v-text-field>
    <br>
    <v-text-field :disabled="this.isDisabled" v-model="details.lastname" label="lastname" required></v-text-field>
    <br>
    <v-text-field :disabled="this.isDisabled" v-model="details.phone" label="Phone Number" required></v-text-field>
    <br>
    <v-text-field :disabled="this.isDisabled" v-model="details.email" label="Email" required></v-text-field>
    <br>
    <v-overflow-btn
      v-model="details.relationShip"
      :disabled="this.isDisabled"
      :items="dropdown_relation"
      label="Relation with Student"
      target="#dropdown-example"
    ></v-overflow-btn>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true
    },
    isDisabled: {
      type: Boolean,
      required: true
    }
  },
  data() {
      return {
        dropdown_relation: ["Mother", "Father", "Guardian"]
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
  margin: 0px 0px;
}

.parentCard {
  margin: auto;
  background-color: #f5f5f5;
  width: 600px;
  margin-top: 90px;
  min-height: 550px;
  margin-bottom: 100px;
}
</style>
