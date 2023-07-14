<template>
  <section class="offer_section layout_padding-bottom">
    <div class="offer_container">
      <div class="container">
        <div class="row">
          <template v-for="restaurant in restaurants" :key="restaurant.id">
            <div class="col-md-6">
              <div class="box">
                <div class="img-box">
                  <img :src="restaurant.image"/>
                </div>
                <div class="detail-box">
                  <h5>{{ restaurant.legal_name }}</h5>
                  <h6>Restaurante</h6>
                  <a href="#">
                    Peça o seu
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
      const { data } = await http.get('restaurantes');

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
