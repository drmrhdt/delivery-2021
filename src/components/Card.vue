<template>
  <div id="form-container">
    <p class="subtitle">К оплате: {{ price }}₽</p>
    <div id="card-container" :style="{ color: cardInfo.textColor }">
      <div id="card-front" :style="{ background: cardInfo.backgroundGradient }">
        <div id="image-container">
          <img
            v-if="cardInfo.bankLogo"
            id="card-image"
            :src="cardInfo.bankLogo"
            alt="logo of bank"
          />
        </div>
        <label
          class="label"
          :style="{ color: cardInfo.textColor }"
          for="card-number"
        >
          Номер карты
        </label>
        <input
          :pattern="cardInfo.numberMusk"
          type="text"
          v-model="cardNumber"
          id="card-number"
          :placeholder="cardInfo.numberMask"
          :maxlength="cardInfo.numberLengths"
        />
        <div class="d-flex justify-content-between row">
          <div id="cardholder-container" class="col-sm-8 col-5">
            <label
              class="label"
              for="card-holder"
              :style="{ color: cardInfo.textColor }"
              >Владелец карты
            </label>
            <input
              type="text"
              style="text-transform: uppercase"
              id="card-holder"
              placeholder="IVAN IVANOV"
            />
          </div>
          <div id="exp-container">
            <div class="one-flex">
              <label
                class="label"
                for="card-exp"
                :style="{ color: cardInfo.textColor }"
              >
                Срок действия
              </label>
              <input
                id="card-month"
                class="col mr-1"
                type="text"
                placeholder="MM"
                maxlength="2"
              />
            </div>
            <div class="two-flex">
              <label
                class="label"
                for="card-cvc-inner"
                :style="{ color: cardInfo.textColor }"
                >CVC</label
              >
              <input
                id="card-cvc-inner"
                style="width: 60px"
                type="password"
                :maxlength="cardInfo.codeLength"
              />
            </div>
          </div>
          <div id="cvc-container-inner" class="col-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardInfo from "card-info";
export default {
  name: "Card",
  data() {
    return {
      cardNumber: "",
      email: "",
      price: 1500
    };
  },
  computed: {
    cardInfo: function () {
      CardInfo.setDefaultOptions({
        banksLogosPath: "/banks-logos/",
        brandsLogosPath: "/brands-logos/"
      });
      let cardInfo = new CardInfo(this.cardNumber);
      return cardInfo;
    }
  }
};
</script>

<style scoped>
#exp-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media screen and (max-width: 767px) {
  #form-container {
    margin: auto !important;
  }
}
@media screen and (max-width: 530px) {
  #form-container {
    width: 90vw !important;
  }
  #card-container {
    width: 90vw !important;
    height: 300px !important;
  }
  #card-front {
    width: 90vw !important;
  }
  #exp-container {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }
}

#card-front {
  position: absolute;
  width: 390px;
  border-radius: 6px;
  padding: 20px 30px 0;
  box-sizing: border-box;
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: 300;
}
#card-image {
  float: right;
  height: 100%;
  width: 50%;
}
#card-number,
#card-holder {
  width: 100%;
}

#cvc-container {
  position: absolute;
  width: 110px;
  right: -115px;
  bottom: -10px;
  padding-left: 20px;
  box-sizing: border-box;
}
#cvc-container p {
  font-size: 6px;
  text-transform: uppercase;
  opacity: 0.6;
  letter-spacing: 0.5px;
}

#form-container {
  width: 400px;
}
#card-container {
  margin-bottom: 30px;
  height: 340px;
  position: relative;
}

#image-container {
  width: 100%;
  position: relative;
  height: 55px;
  margin-bottom: 5px;
  line-height: 55px;
}
#image-container img {
  position: absolute;
  right: 0;
  top: 0;
}
#card-container input {
  border: none;
  outline: none;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin: 0 0 25px;
  font-size: 12px;
  box-sizing: border-box;
  border-radius: 4px;
  letter-spacing: 0.7px;
}
#card-container input::-webkit-input-placeholder {
  color: #fff;
  opacity: 0.7;
  letter-spacing: 1px;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 10px;
}
#card-container input:-moz-placeholder {
  color: #fff;
  opacity: 0.7;
  letter-spacing: 1px;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 10px;
}
#card-container input::-moz-placeholder {
  color: #fff;
  opacity: 0.7;
  letter-spacing: 1px;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 10px;
}
#card-container input:-ms-input-placeholder {
  color: #fff;
  opacity: 0.7;
  letter-spacing: 1px;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 10px;
}

#card-container label {
  display: block;
  margin: 0 auto 7px;
}
</style>
