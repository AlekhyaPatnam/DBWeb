<template>
 <div>
        <v-card class="Fee">
   <v-card-title class="headline">Fee</v-card-title>
            <div class="container">
        <v-overflow-btn
          :items="dropdown_font"
          label="Fee Type"
          target="#dropdown-example"
        ></v-overflow-btn>
            <v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="Fee Amount"
                required
                ></v-text-field>

<v-text-field
             v-model="lastname"
                :rules="nameRules"
                label="Date"
                placeholder="abc"
                type = Date
                required
                ></v-text-field>

</div>
 <br>
            <v-btn class="loginbutton" color="success">Save</v-btn>
  </v-card>
            </div>
</template>

<script>
  export default {
    data: () => ({
      dropdown_font: ['a', 'b', 'c'],
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