<template>
  <div>
    <v-card class="feecard">
      <v-card-title class="headline">Payments Details</v-card-title>
      <div class="container">
        <v-text-field v-model="details.personPhone" label="Student Id" required></v-text-field>
        <v-overflow-btn v-model="details.feeType" :items="dropdown_font" label="payment Type" target="#dropdown-example"></v-overflow-btn>
        <v-text-field v-model="details.feeAmount" label="Amount" required></v-text-field>

        <v-text-field label="Date" v-model="details.feeDate" placeholder="abc" type="Date" required></v-text-field>
      </div>
      <br>
      <v-btn class="loginbutton" color="success" @click="save()">Done</v-btn>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    dropdown_font: ["Membership", "Tests", "Purchased Uniform","Purchased Swords","Purchased Dagger","Purchased Nunchuku" ],
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
  },
  methods: {
    save() {
      this.details.p_name = this.details.feeType.replace("Purchased ", "");
      console.log(this.details);
      axios
        .post("http://localhost:3001/api/cfee", this.details)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    var month = new Date().getMonth() + 1;
      if (month < 10) {
          month = '0'+month;
      }

      var day = new Date().getDate();

      if (day < 10) {
          day = '0'+day;
      }

      this.details.feeDate = new Date().getFullYear()+'-'+month+'-'+day;
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
