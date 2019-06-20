<template>
<div class="container">
  <v-data-table
   :headers="headers"
    :items="products"
    class="Inventory">
    <template v-slot:items="items">
      <td class="text-xs-left">{{ items.item.productname }}</td>
      <td class="text-xs-left">{{ items.item.productdescription }}</td>
      <td class="text-xs-left">{{ items.item.costprice }}</td>
      <td class="text-xs-left">{{ items.item.sellingprice }}</td>
    </template>
  </v-data-table>
</div>
</template>

<script>
export default {
//    components: {
//     Inventoryview
//   },
  data() {
    return {
     headers: [
          {
            text: 'Product Name',
            align: 'left',
            value: 'name'
          },
          { text: 'Product Description', value: 'calories' },
          { text: 'Cost Price', value: 'fat' },
          { text: 'Selling Price', value: 'carbs' },
          
        ],
      products: [
          {
            productname: 'dvvc',
            productdescription: 'cdvvxc',
            costprice: 123,
            sellingprice: 244,

          },
          {
            productname: 'abd',
            productdescription: 'ddsvvdc',
            costprice: 324,
            sellingprice: 567,
          },
      ],

}
    }
}
</script>