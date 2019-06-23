<template>
  <div>
    <v-card class="awardrank">
      <v-card-title class="headline">Award Rank</v-card-title>
      <div class="container">
        <v-text-field :disabled="this.isDisabled" v-model="details.phone" label="Student Id" required></v-text-field>
        <v-overflow-btn :disabled="this.isDisabled" v-model="details.type" :items="dropdown_font" label="Award Type" target="#dropdown-example"></v-overflow-btn>

        <v-text-field :disabled="this.isDisabled" v-model="details.date" label="Date" placeholder="abc" type="date" required></v-text-field>
      </div>
      <br>
      <v-btn :disabled="this.isDisabled" class="loginbutton" color="success" @click="award()">Save</v-btn>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
     props: {
         'isDisabled' : {
      type: Boolean,
      required: true
         }
    },
  data: () => ({
    dropdown_font: ["White", "Yellow", "Green", "Blue", "Red", "Black"],
    details: {
      date: new Date("2019-09-12")
    }
  }),

  methods: {
    award() {
      axios
        .post("http://localhost:3001/api/arank", this.details)
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

      this.details.date = new Date().getFullYear()+'-'+month+'-'+day;

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

.awardrank {
  margin: auto;
  background-color: #f5f5f5;
  width: 600px;
  margin-top: 90px;
  min-height: 1050px;
  margin-bottom: 100px;
}

</style>