<template>
  <div>
    <v-card class="Inventory">
      <v-card-title class="headline">Inventory Details</v-card-title>
      <div class="container">
        <v-text-field
          :disabled="this.isDisabled"
          v-model="details.p_name"
          label="Product Name "
          required
        ></v-text-field>
        <br>
        <v-textarea
          :disabled="this.isDisabled"
          v-model="details.p_desc"
          label="Product Description"
          type="area"
          required
        ></v-textarea>
        <br>
        <v-text-field
          :disabled="this.isDisabled"
          v-model="details.costPrice"
          label="Cost Price"
          required
        ></v-text-field>

        <br>
        <v-text-field
          :disabled="this.isDisabled"
          v-model="details.sellingPrice"
          label="Selling Price"
          required
        ></v-text-field>

        <br>
        <v-text-field
          :disabled="this.isDisabled"
          v-model="details.quantity"
          label="Quantity"
          required
        ></v-text-field>
      </div>
      <br>
      <v-btn
        v-if="!this.isDisabled"
        class="saveButton"
        color="success"
        @click="saveInventory()"
      >Save</v-btn>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    'details': {
      type: Object,
      required: true
    },
    'isDisabled': {
      typClassCarde: Boolean,
      required: true
    }
  },
  methods: {
    saveInventory() {
      axios
        .post("http://localhost:3001/api/cinventory", this.details)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.headline {
  display: block !important;
  text-align: center;
}

.saveButton {
  margin: 0px 0px;
}

.Inventory {
  top: 0;
  padding: 20px;
  position: absolute;
  margin: auto;
  background-color: #f5f5f5;
  bottom: 0;
  left: 0;
  right: 0;
  width: 600px;
  height: 725px;
  margin-top: 90px;
  margin-bottom: 100px;
}
</style>
