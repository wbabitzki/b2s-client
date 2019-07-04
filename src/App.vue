<template>
  <div id="app">
    <div id="container">
       <FileUploader @uploaded="onUploaded"/>
       <BananaTable :bananaRecords="flattenBananaRecords" v-show="showBananaTable" @bananaRecordsShown="scrollToEnd"/>
       <BananaConverter :bananaRecords="bananaRecords" v-show="showBananaTable" @converted="onConverted"/>
       <SageTable :sageRecords="sageRecords" v-show="showSegaTable" @sageRecordsShown="scrollToEnd"/>
       <FileDownloader :sageRecords="sageRecords" v-show="showSegaTable"/>
    </div>
  </div>
</template>

<script>
import FileUploader from "./components/FileUploader.vue";
import BananaTable from "./components/BananaTable.vue";
import BananaConverter from "./components/BananaConverter.vue";
import SageTable from "./components/SageTable.vue"
import FileDownloader from "./components/FileDownloader.vue"

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
      showSegaTable: false
    };
  },
  methods: {
    onUploaded(data) {
      this.bananaRecords = data;
      data.forEach(transaction => {
        this.flattenBananaRecords.push(transaction);
        transaction.integratedTransactions.forEach(integratedTransaction => {
          this.flattenBananaRecords.push(integratedTransaction);
        });
      });

      this.showBananaTable = this.bananaRecords.length > 0;
    },
    onConverted(data) {
       this.sageRecords = data;
       this.showSegaTable = this.sageRecords.length > 0  
    },
    scrollToEnd() {    	
      var container = this.$el.querySelector("#container");
      container.scrollIntoView(false);
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
