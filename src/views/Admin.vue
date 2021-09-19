<template>
  <div>
    <Header></Header>
    <section class="container isMinHeight">
      <p class="title mt-5">Административная панель</p>
      <b-tabs v-model="activeTab">
        <b-tab-item label="Клиенты">
          <ListOfClients></ListOfClients>
        </b-tab-item>

        <b-tab-item label="Курьеры">
          <ListOfCouriers></ListOfCouriers>
        </b-tab-item>

        <b-tab-item label="Актуальные заказы">
          <OrderActual></OrderActual>
        </b-tab-item>
      </b-tabs>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import OrderActual from "@/components/OrderChoose.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ListOfClients from "@/components/ListOfClients.vue";
import ListOfCouriers from "@/components/ListOfCouriers.vue";

export default {
  name: "Courier",
  components: {
    Header,
    Footer,
    ListOfCouriers,
    ListOfClients,
    OrderActual
  },
  data() {
    return {
      activeTab: 0
    };
  },
  
};
</script>

<style lang="scss" scoped></style>
