<template>
  <div>
     <inventory-view :details="this.details" :isDisabled="false"></inventory-view>
  </div>
</template>

<script>
import inventoryView from '../components/inventoryView'
export default {
   components: {
      inventoryView
   },
   data() {
      return {
         details: {
            p_name: '',
            p_desc: '',
            costPrice: '',
            sellingPrice: '',
            quantity: ''
         }
      }
   }

}
</script>

<style>

</style>
