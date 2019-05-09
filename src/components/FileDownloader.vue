<template>
  <div>
    <button @click="onDownload(sageRecords)">Download</button>
  </div>
</template>

<script>
import Button from "./ButtonComponent.vue";

export default {
  extends: Button,
  name: "FileDownloader",
  props: ["sageRecords"],
  methods: {
    onDownload(data) {
      var csvContent=[Object.keys(data[0]).join(",")];
      for( var i in data) {
         csvContent.push(Object.values(data[i]).join(","));
      }
      const link = document.createElement("a");
      link.setAttribute("href", encodeURI("data:text/csv;charset=utf-8," + csvContent.join("\r\n")));
      link.setAttribute("download", "export.csv");
      link.click();
    }
  }
};
</script>