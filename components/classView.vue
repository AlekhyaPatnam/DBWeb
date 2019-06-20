<template>
  <div>
    <v-card class="ClassCard">
      <v-card-title class="headline">class Details</v-card-title>
      <div class="container">
        <v-text-field :disabled="this.isDisabled" v-model="details.classTime" label="class Time" type="time" required></v-text-field>
        <br>
        <v-overflow-btn
          v-model="details.classDay"
          :disabled="this.isDisabled"
          :items="dropdown_day"
          label="class Day"
          target="#dropdown-example"
        ></v-overflow-btn>

        <v-overflow-btn
          v-model="details.classLevel"
          :disabled="this.isDisabled"
          :items="dropdown_font"
          label="class level"
          target="#dropdown-example"
        ></v-overflow-btn>
      </div>
      <br>
      <v-btn v-if="!this.isDisabled" class="saveButton" color="success" @click="submit()">Save</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
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
  data() {
    return {
      dropdown_font: ["Beginner", "Intermediate", "Advanced"],
      dropdown_day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    };
  },
  methods: {
      submit() {
          console.log(this.details);
      }
  }
};
</script>

<style>

.saveButton {
  margin: 0px 0px;
}

.ClassCard {
  top: 0;
  padding: 20px;
  position: absolute;
  margin: auto;
  background-color: #f5f5f5;
  bottom: 0;
  left: 0;
  right: 0;
  width: 600px;
  height: 465px;
  margin-top: 90px;
  margin-bottom: 100px;
}


</style>
