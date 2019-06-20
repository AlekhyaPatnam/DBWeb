<template>
  <div>
    <class-view :details="this.classSchedule" :isDisabled="false">
    </class-view>
  </div>
</template>

<script>
import classView from '../components/classView'

export default {
  components: {
    classView
  },
  data() {
    return {
      classSchedule: {
        classTime: "",
        classDay: "",
        classLevel: ""
      },
      
    };
  }
};
</script>
