<template>
  <div>
    <fee :details="this.details" :isDisabled="false">
    </fee>
  </div>
</template>

<script>
import fee from '../components/fee'
export default {
  components: {
    fee
  },
  data: () => ({
    details: {
        feeType: "",
        feeAmount: "",
        date: ""
      },
  })
};
</script>