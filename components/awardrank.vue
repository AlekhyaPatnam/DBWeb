<template>
  <div>
    <v-card class="awardrank">
      <v-card-title class="headline">Award Rank</v-card-title>
      <div class="container">
        <v-text-field :disabled="this.isDisabled" v-model="details.phone" label="Student Id" required></v-text-field>
        <v-overflow-btn :disabled="this.isDisabled" :items="dropdown_font" label="Award Type" target="#dropdown-example"></v-overflow-btn>

        <v-text-field :disabled="this.isDisabled" v-model="details.date" label="Date" placeholder="abc" type="date" required></v-text-field>
      </div>
      <br>
      <v-btn :disabled="this.isDisabled" class="loginbutton" color="success">Save</v-btn>
    </v-card>
  </div>
</template>

<script>
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
</style>