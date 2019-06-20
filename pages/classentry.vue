<template>
<div>
        <v-card class="Classdet">
   <v-card-title class="headline">class Details</v-card-title>
            <div class="container">
             <v-text-field
             v-model="classSchedule.classTime"
                
                label="class Time"
                type = time
                required
                ></v-text-field>
                <br>
            <v-overflow-btn
            v-model="classSchedule.classDay"
          :items="dropdown_day"
          label="class Day"
          target="#dropdown-example"
        ></v-overflow-btn>

        <v-overflow-btn
        v-model="classSchedule.classLevel"
          :items="dropdown_font"
          label="class level"
          target="#dropdown-example"
        ></v-overflow-btn>
</div>
 <br>
        <v-btn class="loginbutton" color="success" @click="Save()">Save</v-btn>
</v-card>
</div>
</template>

<script>
  export default {
    data() {
        return {
            classSchedule:{
                classTime: '',
                classDay: '',
                classLevel: '',
            },
            dropdown_font: ['Beginner', 'Intermediate', 'Expert'],
            dropdown_day: ['Monday','Tuesday','Wednesday'],
        }
    }
  }
</script>
