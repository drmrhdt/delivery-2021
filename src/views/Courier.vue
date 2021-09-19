<template>
  <div>
    <Header></Header>
    <section class="container isMinHeight">
      <p class="title mt-5">Заказы</p>
      <b-tabs v-model="activeTab">
        <b-tab-item label="Доступные заказы">
          <OrderChoose @accept="activeTab=1"></OrderChoose>
        </b-tab-item>

        <b-tab-item label="Актуальные заказы">
          <OrderActual></OrderActual>
        </b-tab-item>

        <b-tab-item label="История заказов">
          <OrderHistory></OrderHistory>
        </b-tab-item>
      </b-tabs>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import OrderChoose from "@/components/OrderChoose.vue";
import OrderActual from "@/components/OrderActual.vue";
import OrderHistory from "@/components/OrderHistory.vue";

export default {
  name: "Courier",
  components: {
    Header,
    Footer,
    OrderChoose,
    OrderActual,
    OrderHistory
  },
  data() {
    return {
      activeTab: 0
    };
  }
};
</script>

<style lang="scss" scoped></style>
