<template>
  <section class="offer_section layout_padding-bottom" id="restaurant">
    <div class="offer_container">
      <div class="container">
        <div class="heading_container heading_center">
          <h2>Restaurantes</h2>
        </div>
        <div class="row">
          <template v-for="(restaurant, index) in restaurants" :key="index">
            <div class="col-md-6">
              <div class="box">
                <div class="img-box">
                  <img :src="restaurant.image" />
                </div>
                <div class="detail-box">
                  <h5>{{ restaurant.legal_name }}</h5>
                  <h6>Restaurante</h6>
                  <a href="#">
                    Faça seu pedido
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import http from "@/services/http.js";

export default {
  data() {
    return {
      restaurants: [],
    };
  },

  async mounted() {
    try {
      const { data } = await http.get("restaurantes");

      const items = data;

      this.restaurants = items.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.detail-box a i {
  margin-left: 10px;
  font-size: 20px;
}
</style>
