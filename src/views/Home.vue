<template>
  <div>
    <Header></Header>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-12">
            <div class="container content">
              <h1 class="title">Сервис срочной доставки документов по г. Волгограду</h1>
              <p class="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore qui incidunt illo, fugiat laudantium, odit illum dolorem necessitatibus doloribus commodi totam eaque repellat perspiciatis dicta harum nam non debitis?
              </p>
              <b-button type="is-primary is-light" size="is-medium" v-on:click="onLink()">Рассчитать стоимость</b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <nav class="columns">
            <div class="column has-text-centered features">
              <p class="title is-1 has-text-link"><strong>1</strong></p>
              <p class="title is-4">Рассчитайте стоимость</p>
            </div>
            <div class="column has-text-centered features">
              <p class="title is-1 has-text-link"><strong>2</strong></p>
              <p class="title is-4">Оформите доставку</p>
            </div>
            <div class="column has-text-centered features">
              <p class="title is-1 has-text-link"><strong>3</strong></p>
              <p class="title is-4">Отследите курьера</p>
            </div>
            <div class="column has-text-centered features">
              <p class="title is-1 has-text-link"><strong>4</strong></p>
              <p class="title is-4">Оцените доставку</p>
            </div>
          </nav>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer
  },
  methods: {
    onLink() {
      this.$router.push({ name: "Calc" });
    }
  },
};
</script>
