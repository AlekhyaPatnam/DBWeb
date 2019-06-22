<template>
<div class="image">
  <div class="HomeTopDiv">
    <div class="cardDivs">
      <v-card @click="goto('/listStudents')" class="homeCard studentCard">
        <v-card-title class="cardTitle">Students</v-card-title>
      </v-card>
      <v-card @click="goto('/viewInventory')" class="homeCard inventoryCard">
        <v-card-title class="cardTitle">Inventory</v-card-title>
      </v-card>
    </div>
     <div class="cardDivs">
      <v-card @click="goto('/studentenroll')" class="homeCard resCard">
        <v-card-title class="cardTitle">Register Students</v-card-title>
      </v-card>
      <v-card @click="goto('/feepayment')" class="homeCard feeCard">
        <v-card-title class="cardTitle">Fee Payments</v-card-title>
      </v-card>
    </div>
  </div>
</div>
</template>

<script>

export default {
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style>

.HomeTopDiv {
  margin: auto;
  position: absolute;
  top: 40px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 1100px;
}

.cardDivs {
  display: flex;
}

.cardTitle {
  font-size: 35px;
  display: block !important;
  text-align: center;
}

.homeCard {
  margin: 5px 22px 72px 101px;
    height: 204px;
    width: 365px;
    cursor: pointer;
    padding: 48px;
  /* color: #ffffff !important; */
}

.studentCard {
  background-image: linear-gradient(115deg, #B3E5FC 0%, #4FC3F7 60%, #40C4FF 75%);
}

.inventoryCard {
  background-image: linear-gradient(141deg, #FFF59D 0%, #FFFF00 51%, #FFEA00 60%);
}

.resCard {
  background-image: linear-gradient(218deg, #E6EE9C 0%, #EEFF41 51%, #FFFF00 60%);

}

.feeCard {
  background-image: linear-gradient(141deg, #1fc8db 51%, #2cb5e8 60%);
}
  .image {
  /* The image used */
  background-image: url("../assets/images/taekwondo.jpg");
  
  /* Full height */
  height: 140%;
  width: 105%; 
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

