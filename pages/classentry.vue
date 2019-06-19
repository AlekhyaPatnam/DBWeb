<template>
<div>
        <v-card class="Class">
   <v-card-title class="headline">class Details</v-card-title>
            <div class="container">
             <v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="class timing"
                type = time
                required
                ></v-text-field>
                <br>
                 <v-overflow-btn
          :items="dropdown_day"
          label="class Day"
          target="#dropdown-example"
        ></v-overflow-btn>

        <v-overflow-btn
          :items="dropdown_font"
          label="class level"
          target="#dropdown-example"
        ></v-overflow-btn>
</div>
 <br>
            <v-btn class="loginbutton" color="success">Save</v-btn>
  </v-card>
            </div>
</template>

<script>
  export default {
    data: () => ({
      dropdown_font: ['Beginner', 'Intermediate', 'Expert'],
      dropdown_day: ['Monday','Tuesday','Wednesday'],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') }
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' }
      ]
    })
  }
</script>
