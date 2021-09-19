<template>
  <div>
    <Header></Header>
    <section class="container isMinHeight mb-6">
      <p class="title mt-5">Профиль</p>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-8">
          <article class="tile is-child notification is-white">
            <p class="title is-4">Персональная информация</p>
            <div class="content">
              <div class="one-flex mb-5">
                <label class="title is-5 has-text-primary mb-0">ФИО:</label>
                <p>Иванов Иван Иванович</p>
              </div>
              <div class="one-flex mb-5">
                <label class="title is-5 has-text-primary mb-0">Пол:</label>
                <p>Мужской</p>
              </div>
              <div class="one-flex mb-5">
                <label class="title is-5 has-text-primary mb-0"
                  >Дата рождения:</label
                >
                <p>12.12.1997</p>
              </div>
              <div class="one-flex mb-5">
                <label class="title is-5 has-text-primary mb-0"
                  >E - mail:</label
                >
                <p>email@dostadok.ru</p>
              </div>
              <div class="one-flex mb-5">
                <label class="title is-5 has-text-primary mb-0">Телефон:</label>
                <p>+7 999 999 99 99</p>
              </div>
              <div class="one-flex mb-5">
                <label class="title is-5 has-text-primary mb-0"
                  >Зарплатная карта:</label
                >
                <p>4276 4152 **** ****</p>
              </div>
            </div>
          </article>
        </div>

        <div class="tile is-parent" v-if="courier">
          <article class="tile is-child notification is-white">
            <div class="content">
              <p class="title is-4">Карьера</p>

              <div class="content">
                <p class="subtitle">Cредний рейтинг:</p>
                <b-rate
                  :value="rating"
                  size="is-large"
                  :show-score="true"
                  :spaced="true"
                  :disabled="true"
                >
                </b-rate>
                <p class="subtitle mt-5 mb-5">Заработная плата за неделю:</p>

                <p class="title is-1 has-text-primary">14 700₽</p>
              </div>
            </div>
          </article>
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
  name: "AccountCourier",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      rating: 4.8,
      courier: false,
      admin: false
    };
  },
  mounted() {

    if (localStorage.getItem("courier")) this.courier = true;
    else this.courier = false;

    if (localStorage.getItem("admin")) this.admin = true;
    else this.admin = false;
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.one-flex {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr;
}
// .one-flex p {
//   margin-left: 50px;
// }
</style>
