<template>
  <div class="container">
      <h4 class="listheading">Student List</h4>
    <v-data-table :headers="headers" :items="studentsList" class="elevation-1">
      <template v-slot:items="props">
        <td >{{ props.item.firstname }}</td>
        <td >{{ props.item.lastname }}</td>
        <td >{{ props.item.phone }}</td>
        <td >{{ props.item.email }}</td>
        <td >{{ props.item.DOJ }}</td>
        <td><v-btn class="loginbutton" color="success" @click="gotoClass(props.item.uid)">View</v-btn></td>
        <td><v-btn class="loginbutton" color="success" @click="gotoFee(props.item.uid)">View</v-btn></td>
        <td><v-btn class="loginbutton" color="success" @click="makeInactive(props.item.uid)">In Active</v-btn></td>
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
                    text: 'FirstName',
                    value: 'firstname'
                },
                {
                    text: 'LastName',
                    value: 'lastname'
                },
                {
                    text: 'Phone number',
                    value: 'phone'
                },
                {
                    text: 'Email',
                    value: 'email'
                },
                {
                    text: 'D.O.J',
                    value: 'DOJ'
                },
                {
                    text: 'Classes'
                },
                {
                    text: 'Fee'
                },
                {
                    text: 'Make InActive'
                }
            ]
        }
    },
    created() {
        axios
        .get("http://localhost:3001/api/gstudents")
        .then((response) => {
          console.log(response.data);
          var data = [];
          response.data.forEach(record => {
              data.push(record.n.properties);
          });
          this.studentsList = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
        gotoFee(uid) {
            console.log(uid);
            this.$router.push({ path: '/studentfee', query: {q: uid} })
        },
        gotoClass(uid) {
            this.$router.push({ path: '/studentAtt', query: {q: uid} })
        },
        makeInactive(uid) {
            axios
            .post("http://localhost:3001/api/makeinactive", {sid:uid})
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        }
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
