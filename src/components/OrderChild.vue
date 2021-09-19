<template>
  <div>
    <b-modal
      v-model="isComponentModalCancelActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="propsCancel">
        <ModalFormCancel
          :orderId="orderId"
          @remove="removeFromList($event)"
          @close="propsCancel.close"
        ></ModalFormCancel>
      </template>
    </b-modal>

    <b-modal
      v-model="isComponentModalWatchActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="propsWatch">
        <ModalFormWatch @close="propsWatch.close"></ModalFormWatch>
      </template>
    </b-modal>
    <b-modal
      v-model="isComponentModalEvaluateActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="propsEvaluate">
        <ModalFormEvaluate @close="propsEvaluate.close"></ModalFormEvaluate>
      </template>
    </b-modal>
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
                  <th>Cтатус</th>
                  <th></th>
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
                        <p>У вас пока не было заказов&hellip;</p>
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
                  <td>{{ order.status }}</td>
                  <td>
                    <b-button
                      v-if="
                        order.status == 'Доставлено' && order.stars == undefined
                      "
                      @click="isComponentModalEvaluateActive = true"
                      type="is-success"
                      class="mb-3"
                      >Оценить</b-button
                    >
                    <b-button
                      v-if="
                        order.status == 'Поиск курьера' ||
                        order.status == 'В пути к отправителю' ||
                        order.status == 'Ожидание отправителя'
                      "
                      @click="openWindowCancel(order.id)"
                      type="is-danger"
                      class="mb-3"
                      >Отменить</b-button
                    >
                    <b-button
                      v-if="
                        order.status == 'Ожидание получателя' ||
                        order.status == 'В пути к получателю' ||
                        order.status == 'В пути к отправителю' ||
                        order.status == 'Ожидание отправителя'
                      "
                      class="mb-3"
                      @click="isComponentModalWatchActive = true"
                      type="is-primary"
                      >Отследить</b-button
                    >
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
import ModalFormCancel from "@/components/ModalToCancel.vue";
import ModalFormEvaluate from "@/components/ModalToEvaluate.vue";
import ModalFormWatch from "@/components/ModalToWatch.vue";
export default {
  name: "OrderChild",
  components: {
    ModalFormCancel,
    ModalFormWatch,
    ModalFormEvaluate
  },
  data() {
    return {
      orderId: -1,
      isComponentModalCancelActive: false,
      isComponentModalWatchActive: false,
      isComponentModalEvaluateActive: false,
      orders: [
        {
          id: 5,
          datetime: "25.10.2020 12:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "480",
          status: "Поиск курьера"
        },
        {
          id: 4,
          datetime: "25.10.2020 10:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          status: "В пути к отправителю"
        },
        {
          id: 3,
          datetime: "25.10.2020 09:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          status: "Доставлено"
          // stars: '4'
        },
        {
          id: 2,
          datetime: "25.10.2020 08:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          status: "В пути к получателю"
        },
        {
          id: 1,
          datetime: "25.10.2020 08:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "470",
          status: "Отменено"
        }
      ]
    };
  },
  methods: {
    openWindowCancel(id) {
      this.orderId = id;
      this.isComponentModalCancelActive = true;
    },
    removeFromList(obj) {
      this.orders = this.orders.filter(order => {
        let bool = order.id != obj.id
        return bool;
      });
    }
  }
};
</script>

<style lang="scss">

</style>
