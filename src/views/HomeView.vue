<script setup>
import Header from "@/components/Header.vue";
import Slider from "@/components/Slider.vue";
import Offer from "@/components/Offer.vue";
import OurMenu from "@/components/OurMenu.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
</script>

<template>
  <div class="hero_area">
    <div class="bg-box">
      <img src="src/assets/images/hero-bg.jpg" alt="" />
    </div>
    <Header />
    <Slider />
  </div>
  <Offer />
  <OurMenu />
  <Footer />
</template>

<style scoped></style>
