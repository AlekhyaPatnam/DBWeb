<template>
  <div class="container">
    <h4 class="listheading">Attendance</h4>
    <v-text-field v-model="attendanceDate" label="Date" placeholder="abc" type="Date" required></v-text-field>
    <v-data-table :headers="headers" :items="studentsList" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.firstname }}&nbsp{{props.item.lastname}}</td>
        <td>
          <v-btn  color="success" @click="update(props.item.uid,'present')">Present</v-btn>
        </td>
        <td>
          <v-btn color="success" @click="update(props.item.uid,'absent')">Absent</v-btn>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            attendanceDate: '',
            studentsList: [],
            headers: [
                {
                    text: 'Student Name',
                    sortable:false
                },
                {
                    text: 'Present',
                    sortable:false
                },
                {
                    text: 'Absent',
                    sortable:false
                }
            ]
        }
    },
    methods: {
        update(uid, att) {
            console.log(uid, att, this.attendanceDate);
            
            var data = {
                sid:uid,
                att:att,
                date:this.attendanceDate,
                cid:this.$route.query.q
            }

            axios
                .post("http://localhost:3001/api/cattandance", data)
                .then(function(response) {
                console.log(response);
                })
                .catch(function(error) {
                console.log(error);
                });
        }
    },
    mounted() {
        axios
        .get("http://localhost:3001/api/getcstudents",{params:{id: this.$route.query.q}})
        .then((response) => {
          console.log(response.data);
          var data = [];
          response.data.forEach(record => {
              data.push(record.p.properties);
          });
          this.studentsList = data;
        })
        .catch((error) => {
          console.log(error);
        });

       var month = new Date().getMonth() + 1;
      if (month < 10) {
          month = '0'+month;
      }

      var day = new Date().getDate();

      if (day < 10) {
          day = '0'+day;
      }

      this.attendanceDate = new Date().getFullYear()+'-'+month+'-'+day;
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
