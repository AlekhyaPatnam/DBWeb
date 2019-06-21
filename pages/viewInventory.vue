<template>
  <div class="container">
    <h4 class="listheading">Inventory List</h4>
    <v-data-table
   :headers="headers"
    :items="products"
    class="elevation-1">
    <template v-slot:items="props">
      <td class="text-xs-left">{{ props.item.p_name }}</td>
      <td class="text-xs-left">{{ props.item.p_desc }}</td>
      <td class="text-xs-left">{{ props.item.costPrice }}</td>
      <td class="text-xs-left">{{ props.item.sellingPrice }}</td>
      <td class="text-xs-left">{{ props.item.quantity }}</td>
    </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      headers: [
        {
          text: "Product Name",
          value: "p_name"
        },
        { text: "Product Description", value: "p_desc" },
        { text: "Cost Price", value: "costPrice" },
        { text: "Selling Price", value: "sellingPrice" },
        { text: "Quantity", value: "quantity" }
      ],
      products: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:3001/api/ginventory")
      .then(response => {
        console.log(response.data);
        var data = [];
        response.data.forEach(record => {
          data.push(record.i.properties);
          console.log(record.i.properties);
        });
        this.products = data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};

/**
 * costPrice: "30"
p_desc: "Basic uniforms with white belts"
p_name: "Uniforms"
quantity: "100"
sellingPrice: "50"
uid: "7bc07c50-93a5-11e9-9c20-459cf855f8db"
 */
</script>

<style>
.listheading {
    text-align: center;
    padding: 25px;
    font-size: 20px;
}
</style>
