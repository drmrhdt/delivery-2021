<template>
  <div>
    <b-modal
      v-model="isComponentModalDischargeActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <ModalFormDischarge
           :clientId="clientId"
          @remove="removeFromList($event)"
          @close="props.close"
        ></ModalFormDischarge>
      </template>
    </b-modal>
    <section class="section">
      <div class="container">
        <b-field>
          <b-input
            placeholder="Поиск по номеру телефона"
            type="search"
            v-model="findString"
            icon="magnify"
            icon-clickable
          >
          </b-input>
        </b-field>

        <div class="b-table">
          <div class="table-wrapper has-mobile-cards">
            <table class="table">
              <thead>
                <tr>
                  <th>ФИО</th>
                  <th>Номер телефона</th>
                  <th>E - mail</th>
                  <th>Дата рождения</th>
                  <th>Пол</th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="clients.length == 0">
                <tr class="is-empty">
                  <td colspan="7">
                    <section class="section">
                      <div class="content has-text-grey has-text-centered">
                        <p>
                          <span class="icon is-large"
                            ><i class="mdi mdi-emoticon-sad mdi-48px"></i
                          ></span>
                        </p>
                        <p>У нас пока нет курьеров&hellip;</p>
                      </div>
                    </section>
                  </td>
                </tr>
              </tbody>
              <tbody v-if="clients.length != 0">
                <tr v-for="client in filterClients" :key="client.id">
                  <td>{{ client.name }}</td>
                  <td>{{ client.phone }}</td>
                  <td>{{ client.email }}</td>
                  <td>{{ client.datebirth }}</td>
                  <td>{{ client.sex }}</td>
                  <td>
                    <b-button
                      type="is-danger"
                      @click="openWindowCancel(client)"
                      >Уволить курьера</b-button
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
import ModalFormDischarge from "@/components/ModalFormDischarge.vue";
export default {
  name: "ListOfCouriers",
  components: {
    ModalFormDischarge
  },
  data() {
    return {
      findString: "",
      clientId: {},
      isComponentModalDischargeActive: false,
      clients: [
        {
          id: 5,
          name: "Иванов Иван Иванович",
          sex: "Мужской",
          datebirth: "01.01.1997",
          phone: "+7 999 999 99 99",
          email: "email@emai.ru"
        },
        {
          id: 4,
          name: "Иванов Иван Иванович",
          sex: "Мужской",
          datebirth: "01.01.1997",
          phone: "+7 999 999 99 99",
          email: "email@emai.ru"
        },
        {
          id: 3,
          name: "Иванов Иван Иванович",
          sex: "Мужской",
          datebirth: "01.01.1997",
          phone: "+7 999 999 99 99",
          email: "email@emai.ru"
        },
        {
          id: 2,
          name: "Иванов Иван Иванович",
          sex: "Мужской",
          datebirth: "01.01.1997",
          phone: "+7 999 999 99 99",
          email: "email@emai.ru"
        }
      ]
    };
  },
  methods: {
    openWindowCancel(client) {
      this.clientId = client;
      console.log(this.clientId);
      this.isComponentModalDischargeActive = true;
    },

    removeFromList(obj) {
      this.clients = this.clients.filter(client => {
        let bool = client.id != obj.id
        return bool;
      });
    }
  },
  computed: {
    filterClients() {
      if (this.findString !== "") {
        return this.clients.filter(el => {
          return (
            el.phone.trim().indexOf(this.findString.trim()) !== -1 &&
            el.phone !== ""
          );
        });
      } else {
        return this.clients;
      }
    }
  }
};
</script>

<style lang="scss"></style>
