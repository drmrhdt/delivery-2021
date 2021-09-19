<template>
  <div>
    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <ModalForm @close="props.close"></ModalForm>
      </template>
    </b-modal>
    <b-modal
      v-model="isComponentModalActive2"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <ModalForms @close="props.close"></ModalForms>
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
                  <th>Статус</th>
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
                        <p>
                          В данный момент вы не взяли ни один заказ нет&hellip;
                        </p>
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
                    <b-field>
                      <b-select
                        v-on:input="select()"
                        v-model="selectedOption"
                        placeholder="Установите статус"
                      >
                        <option
                          v-for="option in data"
                          :value="option.id"
                          :key="option.id"
                        >
                          {{ option.status }}
                        </option>
                      </b-select>
                    </b-field>
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
import ModalForm from "@/components/ModalFormSignature.vue";
import ModalForms from "@/components/ModalFormSignatureEnd.vue";
export default {
  name: "OrderActual",
  components: {
    ModalForm,
    ModalForms
  },
  data() {
    return {
      isComponentModalActive: false,
      isComponentModalActive2: false,
      selectedOption: 2,
      orders: [
        {
          id: 5,
          datetime: "25.10.2020 12:16",
          first: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          second: "Большая Дмитровка, 8, Иванов Иван, +7 999 999 99 99",
          cost: "480",
          time: "17:00 - 18:00"
        }
      ],
      data: [
        { id: 1, status: "Поиск курьера" },
        { id: 2, status: "В пути к отправителю" },
        { id: 3, status: "Ожидание отправителя" },
        { id: 4, status: "В пути к получателю" },
        { id: 5, status: "Ожидание получателя" },
        { id: 6, status: "Доставлено" }
      ]
    };
  },
  methods: {
    select() {
      // console.log(`select`, this.selectedOption);
      if (this.selectedOption == 4) {
        this.isComponentModalActive = true;
      }
      if (this.selectedOption == 6) {
        this.isComponentModalActive2 = true;
      }
    }
  }
};
</script>

<style lang="scss"></style>
