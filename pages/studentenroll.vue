<template>
  <div>
    <div class="studentDetails">
      <student :details="this.details" :isDisabled="false"></student>
    </div>
  </div>
</template>

<script>
import student from "../components/student";

export default {
  components: {
    student
  },
  data() {
    return {
      details: {
        firstname: "",
        lastname: "",
        DOB: "",
        age: "",
        DOJ: "",
        phone: "",
        email: "",
        street: "",
        city: "",
        zipcode: "",
        rank: "",
        class: ""
      }
    };
  },
  methods: {}
};
</script>


<style>

.studentDetails {
   position: relative !important;
}

.parentDetails {
   position: relative !important;
}
</style>

