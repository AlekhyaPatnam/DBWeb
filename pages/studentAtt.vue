<template>
  <div class="container">
    <h4 class="listheading">Student Attendance</h4>
    <v-data-table :headers="headers" :items="attendanceList" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.date }}</td>
        <td>{{ props.item.att }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            attendanceList: [],
            headers: [
                {
                    text: 'Date',
                    value: 'date'
                },
                {
                    text: 'Attendance',
                    value: 'att'
                }
            ]
        }
    },
    mounted() {
        axios
        .get("http://localhost:3001/api/gsattendance",{params:{sid: this.$route.query.q}})
        .then((response) => {
          console.log(response);
          var data = [];
          response.data.forEach(record => {
              var item = {
                  date: record.a.properties.date,
                  att: record.r.properties.att
              }
              data.push(item);
          });
          this.attendanceList = data;
        })
        .catch((error) => {
          console.log(error);
        });
    }

}
</script>

<style>

.listheading {
    text-align: center;
    padding: 25px;
    font-size: 20px;
}
</style>
