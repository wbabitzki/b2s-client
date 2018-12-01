<template>
  <div id="app">
    <FileUploader @uploaded="onUploaded"/>
    <div>
      <BananaTable :bananaRecords="bananaRecords" v-show="showBananaTable"/>
    </div>
  </div>
</template>

<script>
import FileUploader from "./components/FileUploader.vue";
import BananaTable from "./components/BananaTable.vue";

export default {
  name: "app",
  components: {
    FileUploader,
    BananaTable
  },
  data() {
    return {
      bananaRecords: [],
      showBananaTable: false
    };
  },
  methods: {
    onUploaded(data) {
      this.bananaRecords = data;
      this.showBananaTable = this.bananaRecords.length > 0;
    }
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
