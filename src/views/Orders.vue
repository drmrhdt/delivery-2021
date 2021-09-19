<template>
  <div>
    <Header></Header>
    <section class="container isMinHeight">
      <p class="title mt-5">Заказы</p>
      <b-tabs v-model="activeTab">
        <b-tab-item label="Заказы">
          <Order></Order>
        </b-tab-item>

        <b-tab-item label="Справочник">
          <Contacts></Contacts>
        </b-tab-item>
      </b-tabs>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Contacts from "@/components/Contacts.vue";
import Order from "@/components/OrderChild.vue";

export default {
  name: "Orders",
  components: {
    Header,
    Footer,
    Contacts,
    Order
  },
  data() {
    return {
      activeTab: 0
    };
  }
};
</script>

<style lang="scss" scoped></style>
