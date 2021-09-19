<template>
  <div>
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title mr-5">Отследить заказ</p>
          <button
            type="button"
            class="delete"
            @click="
              $emit('close');
              seePhone = false;
            "
          />
        </header>
        <section class="modal-card-body">
          <p class="subtitle is-5 mr-5">Статус заказа: {{ status }}</p>
          <div style="width: 500px">
            <l-map
              ref="map"
              :crs="layers.crs"
              :zoom="zoom"
              :center="center"
              style="height: 300px; width: 100%"
            >
              <l-tile-layer
                :url="layers.url"
                :subdomains="layers.subdomains"
                :attribution="layers.attribution"
              />
              
              <l-marker :lat-lng="withTooltip">
                <l-tooltip :options="{ permanent: true, interactive: true }">
                  <div>
                    Адрес отправителя: {{first}}
                  </div>
                </l-tooltip>
              </l-marker>
              <l-marker :lat-lng="withTooltip2">
                <l-tooltip :options="{ permanent: true, interactive: true }">
                  <div>
                    Курьер
                  </div>
                </l-tooltip>
              </l-marker>
            </l-map>
          </div>
        </section>
        <footer class="modal-card-foot">
          <b-button @click="seePhone = true" type="is-primary"
            >Позвонить</b-button
          >
          <p v-if="seePhone">+7 999 999 99 99, Иван Иванов</p>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import { CRS, latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip  } from "vue2-leaflet";

export default {
  name: "ModalToWatch",
  components: {
    LMap,
    LTileLayer,
    LMarker, 
    LTooltip
  },
  data() {
    return {
      status: "В пути к отправителю",
      first: "ул. Победы, 56",
      seePhone: false,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 14,
      withTooltip: latLng(48.7194, 44.5418),
      withTooltip2: latLng(48.7144, 44.5418),
      center: latLng(48.7194, 44.5418),
      layerIndex: 0,
      layers: {
        url: "https://vec01.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}",
        subdomains: "1,2,3,4",
        attribution: '&copy; <a href="http://yandex.ru/copyright">Yandex</a>',
        crs: CRS.EPSG3395
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
