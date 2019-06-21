<template>
    <div>
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
    </div>
</template>

<script>

export default {
    components: {
        awardrank
    },
    data() {
        return {
            details: {
                m: ''
            }
        }
    }

}
</script>

<style>

</style>