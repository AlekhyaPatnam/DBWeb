<template>
  <div>
    <v-card class="studetnResCard">
      <v-card-title class="headline">Student Details</v-card-title>
      <div class="container">
        <v-text-field :disabled="this.isDisabled" v-model="details.firstname" label="Firstname" required></v-text-field>
        <br>
        <v-text-field :disabled="this.isDisabled" v-model="details.lastname" label="lastname" required></v-text-field>
        <br>
        <v-text-field
          v-model="details.DOB"
          :disabled="this.isDisabled"
          label="Date Of Birth"
          placeholder="abc"
          type="Date"
          required
        ></v-text-field>
        <br>
        <v-text-field :disabled="this.isDisabled" v-model="details.age" label="Age" required></v-text-field>

        <br>
        <v-text-field
          :disabled="this.isDisabled"
          v-model="details.DOJ"
          label="Date Of Joining"
          placeholder="abc"
          type="Date"
          required
        ></v-text-field>
        <br>
        <v-text-field :disabled="this.isDisabled" v-model="details.phone" label="Phone Number" required></v-text-field>
        <br>
        <v-text-field :disabled="this.isDisabled" v-model="details.email" label="Email" required></v-text-field>
        <br>
        <v-text-field :disabled="this.isDisabled" v-model="details.street" label="Address Street" required></v-text-field>
        <br>
        <v-text-field :disabled="this.isDisabled" v-model="details.city" label="City" required></v-text-field>
        <br>
        <v-text-field :disabled="this.isDisabled" v-model="details.zipcode" label="Zipcode" required></v-text-field>
        <br>
        
        <div>
          <parent-details :details="this.parentInfo" :isDisabled="false"></parent-details>
        </div>
        <v-btn v-if="!this.isDisabled" class="loginbutton" color="success" @click="Register()">Register</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import parentDetails from "./parentDetails";

export default {
  components: {
    parentDetails
  },
  props: {
    'details': {
      type: Object,
      required: true
    },
    'isDisabled' : {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      parentInfo: {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        realtionShip: ""
      }
    }
  },
  methods: {
    Register() {
      console.log(this.details);
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

.studetnResCard {
  margin: auto;
  background-color: #f5f5f5;
  width: 600px;
  margin-top: 90px;
  min-height: 1050px;
  margin-bottom: 100px;
}


</style>
