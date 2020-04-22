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
      <tr v-for="sageRecord in sageRecords" :key="sageRecord.id" v-bind:style="getBackgroundStyle(sageRecord)">
        <td>{{sageRecord.Blg}}</td>
        <td>{{sageRecord.Datum}}</td>
        <td>{{sageRecord.Kto}}</td>
        <td>{{sageRecord["S/H"]}}</td>
        <td>{{sageRecord.GKto}}</td>
        <td>{{sageRecord.SId}}</td>
        <td>{{sageRecord.SIdx}}</td>
        <td>{{sageRecord.KIdx}}</td>
        <td>{{sageRecord.BTyp}}</td>
        <td>{{sageRecord.MTyp}}</td>
        <td>{{sageRecord.Code}}</td>
        <td>{{sageRecord.Netto}}</td>
        <td>{{sageRecord.Steuer}}</td>
        <td>{{sageRecord.FwBetrag}}</td>
        <td>{{sageRecord.Tx1}}</td>
        <td>{{sageRecord.Tx2}}</td>
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
  methods: {    
    getBackgroundStyle(sageRecord) {
      return this.isEvenReceipt(sageRecord) ? 'background-color: white;' : 'background-color: #f2f2f2;';
    },
    isEvenReceipt(sageRecord) {
      return ((parseInt(sageRecord.Blg) % 2) == 0);
    }
  },
  updated() {
    this.$emit("sageRecordsShown");
  }
};
</script>