<template>
  <div>
    <Header></Header>
    <section class="container isMinHeight">
      <form>
        <p class="title mt-5">Рассчитать стоимость заказа</p>
        <p class="title is-5">1. Адрес получения документов курьером</p>
        <b-field v-if="isLogIn">
          <b-radio v-model="radioFirst" native-value="contacts">
            Выбрать из Справочника
          </b-radio>
        </b-field>
        <b-field v-if="isLogIn">
          <b-radio v-model="radioFirst" native-value="handle">
            Ввести данные вручную
          </b-radio>
        </b-field>
        <Contacts
          @remove="pickAddress($event, 1)"
          v-if="radioFirst == 'contacts'"
        ></Contacts>
        <b-field v-if="radioFirst != 'contacts'" label="Адрес отправителя">
          <b-input
            class="tile is-6"
            type="text"
            v-model="addressFirst"
            placeholder="Введите адрес"
            required
          >
          </b-input>
        </b-field>
        <div class="tile is-ancestor is-6" v-if="radioFirst != 'contacts'">
          <div class="tile is-parent">
            <b-field label="Имя отправителя">
              <b-input
                class="tile is-child"
                type="text"
                :value="nameFirst"
                placeholder="Введите имя"
                required
              >
              </b-input>
            </b-field>
          </div>
          <div class="tile is-parent">
            <b-field label="Телефон отправителя">
              <b-input
                class="tile is-child"
                type="text"
                :value="phoneFirst"
                placeholder="Введите телефон"
                required
              >
              </b-input>
            </b-field>
          </div>
        </div>

        <p class="title is-5">2. Адрес доставки документов курьером</p>
        <b-field v-if="isLogIn">
          <b-radio v-model="radioSecond" native-value="contacts">
            Выбрать из Справочника
          </b-radio>
        </b-field>
        <b-field v-if="isLogIn">
          <b-radio v-model="radioSecond" native-value="handle">
            Ввести данные вручную
          </b-radio>
        </b-field>
        <Contacts
          @remove="pickAddress($event, 2)"
          v-if="radioSecond == 'contacts'"
        ></Contacts>
        <b-field v-if="radioSecond != 'contacts'" label="Адрес получателя">
          <b-input
            class="tile is-6"
            type="text"
            v-model="addressSecond"
            placeholder="Введите адрес"
            required
          >
          </b-input>
        </b-field>
        <div class="tile is-ancestor is-6" v-if="radioSecond != 'contacts'">
          <div class="tile is-parent">
            <b-field label="Имя получателя">
              <b-input
                class="tile is-child"
                type="text"
                :value="nameSecond"
                placeholder="Введите имя"
                required
              >
              </b-input>
            </b-field>
          </div>
          <div class="tile is-parent">
            <b-field label="Телефон получателя">
              <b-input
                class="tile is-child"
                type="text"
                :value="phoneSecond"
                placeholder="Введите телефон"
                required
              >
              </b-input>
            </b-field>
          </div>
        </div>

        <p class="title is-5">3. Страховка документов (необязательно)</p>

        <label class="label">Стоимость страхования</label>
        <input
          class="input tile is-6 mb-3"
          type="number"
          placeholder="Введите стоимость"
          v-model="insurance"
          required
        />

        <p class="title is-6">+ {{ Math.round(insurance / 10) }}₽ к доставке</p>

        <p class="title is-5" v-if="isLogIn">4. Способ оплаты</p>
        <b-field v-if="isLogIn">
          <b-radio v-model="radioMoney" native-value="paper1">
            Наличными курьеру при отправлении документов
          </b-radio>
        </b-field>
        <b-field v-if="isLogIn">
          <b-radio v-model="radioMoney" native-value="paper2">
            Наличными курьеру при доставке документов
          </b-radio>
        </b-field>
        <b-field v-if="isLogIn">
          <b-radio v-model="radioMoney" native-value="cards">
            Картой онлайн
          </b-radio>
        </b-field>
        <Card v-if="radioMoney == 'cards'"></Card>
        <p class="title is-3 mt-5">
          Итого: {{ Math.round(Math.round(insurance / 10) + 100 + itogo) }}₽
        </p>

        <b-button
          type="is-primary"
          size="is-medium"
          v-if="!isLogIn"
          class="mb-5"
          @click="isComponentModalActive = true"
          >Оформить заказ</b-button
        >
        <b-button
          type="is-primary"
          size="is-medium"
          class="mb-5"
          v-if="isLogIn"
          @click="isComponentModalActivePayment = true"
          >Оформить заказ</b-button
        >

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
            <ModalFormLogIn @close="props.close"></ModalFormLogIn>
          </template>
        </b-modal>

        <b-modal
          v-model="isComponentModalActivePayment"
          has-modal-card
          trap-focus
          :destroy-on-hide="false"
          aria-role="dialog"
          aria-label="Example Modal"
          aria-modal
        >
          <template #default="propsPayment">
            <ModalFormPay @close="propsPayment.close"></ModalFormPay>
          </template>
        </b-modal>
      </form>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ModalFormLogIn from "@/components/ModalToLogIn.vue";
import ModalFormPay from "@/components/ModalToPay.vue";
import Contacts from "@/components/ContactChild.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Calc",
  components: {
    Header,
    Footer,
    ModalFormLogIn,
    ModalFormPay,
    Contacts,
    Card
  },
  data() {
    return {
      isLogIn: false,
      courier: false,
      admin: false,
      insurance: 0,
      itogo: 0,
      addressFirst: "",
      nameFirst: "",
      phoneFirst: "",
      addressSecond: "",
      nameSecond: "",
      phoneSecond: "",
      isComponentModalActive: false,
      isComponentModalActivePayment: false,
      radioFirst: "handle",
      radioSecond: "handle",
      radioMoney: "paper1"
    };
  },
  watch: {
    addressSecond: function () {
      if (this.addressSecond != "" && this.addressFirst != "")
        this.itogo = this.getRandomArbitrary(20, 300);
      else {
        this.itogo = 0;
        if (this.addressSecond == "") this.addressSecond = "";
        if (this.addressFirst == "") this.addressFirst = "";
      }
    },
    addressFirst: function () {
      if (this.addressSecond != "" && this.addressFirst != "")
        this.itogo = this.getRandomArbitrary(20, 300);
      else {
        this.itogo = 0;
        if (this.addressSecond == "") this.addressSecond = "";
        if (this.addressFirst == "") this.addressFirst = "";
      }
    }
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
    pickAddress(obj, n) {
      if (obj.contact == null) {
        this.itogo = 0;
        if (n == 1) this.addressFirst = "";
        if (n == 2) this.addressSecond = "";
      } else {
        console.log("choose");
        if (n == 1) this.addressFirst = obj.contact.address;
        if (n == 2) this.addressSecond = obj.contact.address;
        console.log(this.addressSecond);
      }
    }
  },
  mounted() {
    if (localStorage.getItem("user")) this.isLogIn = true;
    else this.isLogIn = false;

    if (localStorage.getItem("courier")) this.courier = true;
    else this.courier = false;

    if (localStorage.getItem("admin")) this.admin = true;
    else this.admin = false;
  }
};
</script>

<style lang="scss" scoped></style>
