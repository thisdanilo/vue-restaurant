<template>
  <section class="food_section layout_padding-bottom" id="menu">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Menu</h2>
        <div class="col-12 mt-2">
          <input
            type="text"
            class="form-control"
            placeholder="Pesquise um produto"
            @keyup="search"
          />
        </div>
      </div>

      <div class="filters-content">
        <div class="row grid">
          <template v-for="(product, index) in products" :key="index">
            <div class="col-sm-6 col-lg-4 all">
              <div class="box">
                <div>
                  <div class="img-box">
                    <img :src="product.image" />
                  </div>
                  <div class="detail-box">
                    <h5>{{ product.name }}</h5>
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

          <div class="mt-3" v-html="productNotFound"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import http from "@/services/http.js";
import _ from "lodash";

export default {
  data() {
    return {
      products: [],
      loading: true,
    };
  },

  computed: {
    productNotFound() {
      return !this.loading && this.products.length <= 0
        ? '<span class="text-danger">Nenhum produto encontrado</span>'
        : "";
    },
  },

  async mounted() {
    try {
      const { data } = await http.get("produtos");

      this.loading = false;

      const items = data;

      this.products = items.data;
    } catch (error) {
      console.log(error.response.data);
    }
  },

  methods: {
    search: _.debounce(async function (event) {
      try {
        const { data } = await http.get("pesquisa-produtos", {
          params: {
            user: event.target.value,
          },
        });
        const items = data;

        this.products = items.data;
      } catch (error) {
        console.log(error.response.data);
      }
    }, 1000),
  },
};
</script>

<style scoped>
.detail-box a i {
  font-size: 25px;
  color: #ffffff;
}
</style>
