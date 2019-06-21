<template>
  <div class="container">
      <h4 class="listheading">Classes List</h4>
    <v-data-table :headers="headers" :items="studentsList" class="elevation-1">
      <template v-slot:items="props">
        <td >{{ props.item.classDay }}</td>
        <td >{{ props.item.classLevel }}</td>
        <td >{{ props.item.classTime }}</td>
        <td><v-btn class="loginbutton" color="success" @click="take(props.item.uid)">Take</v-btn></td>
      </template>
    </v-data-table>
  </div>
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            studentsList: [],
            headers: [
                {
                    text: 'Day',
                    value: 'classDay'
                },
                {
                    text: 'Level',
                    value: 'classLevel'
                },
                {
                    text: 'Time',
                    value: 'classTime'
                },
                {
                    text: 'Attendance'
                }
            ]
        }
    },
    methods: {
        take(id) {
          this.$router.push({path: '/takeattendance', query: {q: id}});
        }
    },
    created() {
        axios
        .get("http://localhost:3001/api/gclass")
        .then((response) => {
          console.log(response.data);
          var data = [];
          response.data.forEach(record => {
              data.push(record.c.properties);
          });
          this.studentsList = data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
};
</script>

<style>

.listheading {
    text-align: center;
    padding: 25px;
    font-size: 20px;
}
</style>
