<template>
  <div id="app">
    <FileUploader @uploaded="onUploaded"/>
    <BananaTable :bananaRecords="bananaRecords" v-show="showBananaTable"/>
    <BananaConverter :bananaRecords="bananaRecords" v-show="showBananaTable" @converted="onConverted"/>
    <SageTable :sageRecords="sageRecords" v-show="showSegaTable"/>
  </div>
</template>

<script>
import FileUploader from "./components/FileUploader.vue";
import BananaTable from "./components/BananaTable.vue";
import BananaConverter from "./components/BananaConverter.vue";
import SageTable from "./components/SageTable.vue"

export default {
  name: "app",
  components: {
    FileUploader,
    BananaTable,
    BananaConverter,
    SageTable
  },
  data() {
    return {
      bananaRecords: [],
      sageRecords: [],
      showBananaTable: false,
      showSegaTable: false
    };
  },
  methods: {
    onUploaded(data) {
      this.bananaRecords = data;
      this.showBananaTable = this.bananaRecords.length > 0;
    },
    onConverted(data) {
       this.sageRecords = data;
       this.showSegaTable = this.sageRecords.length > 0  
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
