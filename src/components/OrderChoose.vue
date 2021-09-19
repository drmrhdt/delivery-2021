<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="b-table">
          <div class="table-wrapper has-mobile-cards">
            <table class="table">
              <thead>
                <tr>
                  <th>Дата и время</th>
                  <th>Отправитель</th>
                  <th>Получатель</th>
                  <th>Стоимость (₽)</th> 
                  <th v-if="!admin"></th>
                </tr>
              </thead>
              <tbody v-if="orders.length == 0">
                <tr class="is-empty">
                  <td colspan="7">
                    <section class="section">
                      <div class="content has-text-grey has-text-centered">
                        <p>
                          <span class="icon is-large"
                            ><i class="mdi mdi-emoticon-sad mdi-48px"></i
                          ></span>
                        </p>
                        <p>В данный момент заказов нет&hellip;</p>
                      </div>
                    </section>
                  </td>
                </tr>
              </tbody>
              <tbody v-if="orders.length != 0">
                <tr v-for="order in orders" :key="order.id">
                  <td>{{ order.datetime }}</td>
                  <td>{{ order.first }}</td>
                  <td>{{ order.second }}</td>
                  <td>{{ order.cost }}</td>
                  <td v-if="!admin">
                    <b-button type="is-success" @click="acceptOrder" class="mb-3">Принять</b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "OrderChoose",
  data() {
    return {
      isLogIn: false,
      courier: false,
      admin: false,
      orders: [
        {
          id: 5,
          datetime: "25.10.2020 12:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "480",
          time: "17:00 - 18:00"
        },
        {
          id: 4,
          datetime: "25.10.2020 10:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          time: "17:00 - 18:00"
        },
        {
          id: 3,
          datetime: "25.10.2020 09:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          time: "17:00 - 18:00"
        },
        {
          id: 2,
          datetime: "25.10.2020 08:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          time: "17:00 - 18:00"
        },
        {
          id: 1,
          datetime: "25.10.2020 08:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          time: "17:00 - 18:00"
        }
      ]
    };
  },
  methods: {
      acceptOrder(){
          this.$emit('accept');
      }
  },
  mounted() {
    if (localStorage.getItem("user")) this.isLogIn = true;
    else this.isLogIn = false;

    if (localStorage.getItem("courier")) this.courier = true;
    else this.courier = false;

    if (localStorage.getItem("admin")) this.admin = true;
    else this.admin = false;
  },
};
</script>

<style lang="scss">

</style>
