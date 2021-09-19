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
                  <th>Оценка</th>
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
                        <p>Вы еще не брали заказы&hellip;</p>
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
                  <td>
                    <b-rate v-if="order.stars!=undefined"
                  :value="order.stars"
                  :disabled="true"
                ></b-rate>
                 <span v-if="order.stars==undefined">Заказ пока не оценен</span>
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
  name: "OrderHistory",
  data() {
    return {
      orders: [
        {
          id: 5,
          datetime: "25.10.2020 12:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "480",
          time: "48 минут",
          stars: 3
        },
        {
          id: 4,
          datetime: "25.10.2020 10:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          time: "48 минут",
          stars: 4
        },
        {
          id: 3,
          datetime: "25.10.2020 09:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          time: "48 минут",
          stars: 4
        },
        {
          id: 2,
          datetime: "25.10.2020 08:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          time: "48 минут"
        },
        {
          id: 1,
          datetime: "25.10.2020 08:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          time: "48 минут",
          stars: 5
        }
      ]
    };
  }
};
</script>

<style lang="scss">

</style>
