<template>
  <div>
    <div class="studentDetails">
      <awardrank :details="this.details" :isDisabled="false"></awardrank>
    </div>
  </div>
</template>

<script>
import awardrank from "../components/awardrank";

export default {
  components: {
    awardrank
  },
  data() {
    return {
      details: {
       type:"",
       phone: "",
       date:"",
      }
    };
  },
  methods: {}
};
</script>


<style>

.awardrank {
   position: relative !important;
}
</style>