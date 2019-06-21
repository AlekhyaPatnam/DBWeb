<template>
  <div>
    <div class="container">
        <h4 class="listheading">
            Paid Fee List
        </h4>
      <v-data-table :headers="headers" :items="details" class="elevation-1">
        <template v-slot:items="props">
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
  data() {
    return {
      details: [],
      headers: [
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
  created() {
    axios
      .get("http://localhost:3001/api/sfeedetails",{params:{id:this.$route.query.q}})
      .then(response => {
        console.log(response);
        var data = [];
        response.data.forEach(record => {
          var item = record.f.properties;
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
