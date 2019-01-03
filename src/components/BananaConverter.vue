<template>
  <div>
    <button class="button" @click="onConvert()">Convert</button>
  </div>
</template>

<script>
import * as axios from "axios";

export default {
  name: "BananaConverter",
  props: ["bananaRecords"],
  methods: {
    onConvert() {
      axios
        .post("http://localhost:8080/b2s-rest/rest/banana/convert", this.bananaRecords)
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

<style scoped>
.button {
  max-width: 80%;
  font-size: 1.25rem;
  /* 20px */
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
  /* 10px 20px */
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  cursor: pointer;
  color: #f1e5e6;
  background-color: #d3394c;
}
.button:focus,
.button:hover {
  background-color: red;
}
.button:focus {
  outline: 1px dotted #000;
  outline: -webkit-focus-ring-color auto 5px;
}
</style>

