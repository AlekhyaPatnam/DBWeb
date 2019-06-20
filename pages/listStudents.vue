<template>
  <div>
    <v-data-table :headers="headers" :items="studentsList" class="elevation-1">
      <template v-slot:items="props">
        <td >{{ props.item.firstname }}</td>
        <td >{{ props.item.lastname }}</td>
        <td >{{ props.item.phone }}</td>
        <td >{{ props.item.email }}</td>
        <td >{{ props.item.DOJ }}</td>
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
    }
};
</script>

<style>
</style>
