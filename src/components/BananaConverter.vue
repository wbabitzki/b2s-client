<template>
  <div>
    <button @click="onConvert()">Convert</button>
  </div>
</template>

<script>
import Button from "./ButtonComponent.vue";

export default {
  extends: Button,
  name: "BananaConverter",
  inject: ["restRepository"],
  props: ["bananaRecords"],
  methods: {
    onConvert() {
      this.restRepository.convert(this.bananaRecords)
        .then(response => {
          this.$emit("converted", response.data);
        });
    }
  }
};
</script>