<template>
  <div>
    <!-- <v-card class="feeListcard">
      <div class="container">
        <span class="Titles">
          Paid Fee for
          <b>{{details.feeType}}</b>
        </span>
        <br>
        <span class="Titles">
          Fee amount is
          <b>{{details.feeAmount}}</b>
        </span>
        <br>
        <span class="Titles">
          Paid on
          <b>{{details.feeDate}}</b>
        </span>
        <br>
        <span class="Titles">
          Student Name:
          <b>{{details.studentName}}</b>
        </span>
        <br>
      </div>
    </v-card>-->
    <div class="container">
        <h4 class="listheading">
            Paid Fee List
        </h4>
      <v-data-table :headers="headers" :items="details" class="elevation-1">
        <template v-slot:items="props">
          <td>{{ props.item.studentName }}</td>
          <td>{{ props.item.feeType }}</td>
          <td>{{ props.item.feeAmount }}</td>
          <td>{{ props.item.feeDate }}</td>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // props: {
  //     'details': {
  //         type: Object,
  //         required: true
  //     }
  // },
  data() {
    return {
      details: [],
      headers: [
        {
          text: "Student name",
          value: "studentName"
        },
        {
          text: "Paid For",
          value: "feeType"
        },
        {
          text: "Amount Paid",
          value: "feeAmount"
        },
        {
          text: "Purchased Date",
          value: "feeDate"
        }
      ]
    };
  },
  mounted() {
    axios
      .get("http://localhost:3001/api/gfee")
      .then(response => {
        console.log(response.data);
        var data = [];
        response.data.forEach(record => {
          var item = record.f.properties;
          item.studentName =
            record.p.properties.firstname + " " + record.p.properties.lastname;
          data.push(item);
          console.log(item);
        });
        this.details = data;
      })
      .catch(error => {
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
.feeListcard {
  width: 600px;
  margin: 25px 33%;
  height: 150px;
}

.Titles {
  font-size: 16px;
}
</style>
