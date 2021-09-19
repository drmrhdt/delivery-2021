<template>
  <div>
    <b-modal
      v-model="isComponentModalMakeCourierActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <ModalFormMakeCourier
          :clientId="clientId"
          @remove="removeFromList($event)"
          @close="props.close"
        ></ModalFormMakeCourier>
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
                  <th>Фамилия и имя</th>
                  <th>Номер телефона</th>
                  <th>E - mail</th>
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
                        <p>У нас пока нет клиентов&hellip;</p>
                      </div>
                    </section>
                  </td>
                </tr>
              </tbody>
              <tbody v-if="clients.length != 0">
                <tr v-for="client in filterClients" :key="client.id">
                  <td>{{ client.surname }} {{ client.name }}</td>
                  <td>{{ client.phone }}</td>
                  <td>{{ client.email }}</td>
                  <td>
                    <b-button
                      type="is-success"
                      @click="openWindowCancel(client)"
                      >Сделать курьером</b-button
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
import ModalFormMakeCourier from "@/components/ModalFormMakeCourier.vue";
export default {
  name: "ListOfClients",
  components: {
    ModalFormMakeCourier
  },
  data() {
    return {
      clientId: {},
      findString: "",
      isComponentModalMakeCourierActive: false,
      clients: [
        {
          id: 5,
          name: "Иван",
          surname: "Иванов",
          phone: "+7 999 999 99 99",
          email: "email@emai.ru"
        },
        {
          id: 4,
          name: "Иван",
          surname: "Иванов",
          phone: "+7 999 999 99 99",
          email: "email@emai.ru"
        },
        {
          id: 3,
          name: "Иван",
          surname: "Иванов",
          phone: "+7 999 999 99 99",
          email: "email@emai.ru"
        },
        {
          id: 2,
          name: "Иван",
          surname: "Иванов",
          phone: "+7 899 999 99 99",
          email: "email@emai.ru"
        }
      ]
    };
  },
  methods: {
    openWindowCancel(client) {
      this.clientId = client;
      console.log(this.clientId);
      this.isComponentModalMakeCourierActive = true;
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
