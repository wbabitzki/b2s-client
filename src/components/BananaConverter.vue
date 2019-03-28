<template>
  <div>
    <button @click="onConvert()">Convert</button>
  </div>
</template>

<script>
import * as axios from "axios";
import Button from "./ButtonComponent.vue";

export default {
  extends: Button,
  name: "BananaConverter",
  props: ["bananaRecords"],
  methods: {
    onConvert() {
      axios
        .post(process.env.VUE_APP_SERVICE + "convert", this.bananaRecords)
        .then(response => {
          this.$emit("converted", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>