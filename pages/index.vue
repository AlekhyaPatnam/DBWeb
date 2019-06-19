<template>
  <div class="HomeTopDiv">
    <div class="cardDivs">
      <v-card class="homeCard studentCard">
        <v-card-title class="cardTitle">Students</v-card-title>
      </v-card>
      <v-card class="homeCard inventoryCard">
        <v-card-title class="cardTitle">Inventory</v-card-title>
      </v-card>
    </div>
     <div class="cardDivs">
      <v-card class="homeCard resCard">
        <v-card-title class="cardTitle">Register Students</v-card-title>
      </v-card>
      <v-card class="homeCard feeCard">
        <v-card-title class="cardTitle">Fee Payments</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
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
  margin: 25px;
  height: 300px;
  width: 500px;
  padding: 25px;
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
</style>

