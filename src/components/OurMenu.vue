<template>
  <section class="food_section layout_padding-bottom" id="menu">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Menu</h2>
      </div>

      <ul class="filters_menu">
        <li class="active" data-filter="*">Todos</li>

        <template v-for="(product, index) in products" :key="index">
          <li :data-filter="'.' + product.category.id">
            {{ product.category.name }}
          </li>
        </template>
      </ul>

      <div class="filters-content">
        <div class="row grid">
          <template v-for="(product, index) in products" :key="index">
            <div :class="'col-sm-6 col-lg-4 all ' + product.category.id">
              <div class="box">
                <div>
                  <div class="img-box">
                    <img :src="product.image" />
                  </div>
                  <div class="detail-box">
                    <h5>{{ product.category.name }}</h5>
                    <p>
                      {{ product.description }}
                    </p>
                    <div class="options">
                      <h6>
                        {{
                          product.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })
                        }}
                      </h6>
                      <a href="#">
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="btn-box">
        <a href=""> Todo o Menu </a>
      </div>
    </div>
  </section>
</template>

<script>
import http from "@/services/http.js";
export default {
  data() {
    return {
      products: [],
    };
  },

  async mounted() {
    try {
      const { data } = await http.get("produtos");

      const items = data;

      this.products = items.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.detail-box a i {
  font-size: 25px;
  color: #ffffff;
}
</style>
