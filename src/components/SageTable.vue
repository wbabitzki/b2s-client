<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Blg</th>
          <th>Datum</th>
          <th>Kto</th>
          <th>S/H</th>
          <th>GKto</th>
          <th>SId</th>
          <th>SIdx</th>
          <th>KIdx</th>
          <th>BTyp</th>
          <th>MTyp</th>
          <th>Code</th>
          <th>Netto</th>
          <th>Steuer</th>
          <th>FW-Betrag</th>
          <th>Tx1</th>
          <th>Tx2</th>
        </tr>
      </thead>
      <tr v-for="sageRecord in sageRecords" :key="sageRecord.id">
        <td>{{sageRecord.blg}}</td>
        <td>{{sageRecord.datum}}</td>
        <td>{{sageRecord.kto}}</td>
        <td>{{sageRecord.transactionType}}</td>
        <td>{{sageRecord.gKto}}</td>
        <td>{{sageRecord.sId}}</td>
        <td>{{sageRecord.sIdx}}</td>
        <td>{{sageRecord.kIdx}}</td>
        <td>{{sageRecord.bTyp}}</td>
        <td>{{sageRecord.mTyp}}</td>
        <td>{{sageRecord.code}}</td>
        <td>{{sageRecord.netto}}</td>
        <td>{{sageRecord.steuer}}</td>
        <td>{{sageRecord.fwBetrag}}</td>
        <td>{{sageRecord.tx1}}</td>
        <td>{{sageRecord.tx2}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Table from "./TableComponent.vue";
export default {
  extends: Table,
  name: "SageTable",
  props: ["sageRecords"],
  updated() {
     this.$emit("sageRecordsShown");
  }
};
</script>