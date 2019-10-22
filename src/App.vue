<template>
  <div id="app">     
    <div id="container">
      <div class="loading" v-show="isLoading">
        <div class="loading-wheel"></div>
      </div>
      <FileUploader @uploaded="onUploaded" @validated="onValidated" @startUpload="onStartLoading"/>
      <BananaTable :bananaRecords="flattenBananaRecords" v-show="showBananaTable" @bananaRecordsShown="scrollToEnd" />
      <BananaConverter :bananaRecords="bananaRecords" v-show="showBananaTable" @converted="onConverted" />
      <SageTable :sageRecords="sageRecords" v-show="showSegaTable" @sageRecordsShown="scrollToEnd" />
      <FileDownloader :sageRecords="sageRecords" v-show="showSegaTable" />
    </div>
  </div>
</template>

<script>
import FileUploader from "./components/FileUploader.vue";
import BananaTable from "./components/BananaTable.vue";
import BananaConverter from "./components/BananaConverter.vue";
import SageTable from "./components/SageTable.vue";
import FileDownloader from "./components/FileDownloader.vue";

export default {
  name: "app",
  components: {
    FileUploader,
    BananaTable,
    BananaConverter,
    SageTable,
    FileDownloader
  },
  data() {
    return {
      bananaRecords: [],
      flattenBananaRecords: [],
      sageRecords: [],
      showBananaTable: false,
      showSegaTable: false,
      isLoading: false
    };
  },
  methods: {
    onUploaded(data) {
      this.bananaRecords = data;
      this.bananaRecords.forEach(transaction => {
        this.$set(transaction, "violations", []);
        this.flattenBananaRecords.push(transaction);
        transaction.integratedTransactions.forEach(integratedTransaction => {
          this.$set(integratedTransaction, "violations", []);
          this.flattenBananaRecords.push(integratedTransaction);
        });
      });
      this.showBananaTable = this.flattenBananaRecords.length > 0;
    },
    onValidated(data) {
      Object.keys(data).forEach(key => {
        this.flattenBananaRecords
          .find(record => record.uuid === key)
          .violations.push(...data[key]);
      });
      this.isLoading = false;  
    },
    onConverted(data) {
      this.sageRecords = data;
      this.showSegaTable = this.sageRecords.length > 0;
    },
    onStartLoading() {
      this.isLoading = true;  
    },
    scrollToEnd() {
      this.$el.querySelector("#container").scrollIntoView(false);
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
.loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
}
.loading .loading-wheel {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
