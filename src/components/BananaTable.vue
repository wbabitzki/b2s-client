<template>
  <div class="banana-records">
    <table class="center">
      <thead>
        <tr>
          <th colspan="3"></th>
          <th colspan="2">Account</th>
          <th colspan="3"></th>
          <th colspan="3">Vat</th>
        </tr>
        <tr>
          <th>Nr</th>
          <th>Date</th>
          <th>Description</th>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th>Vat</th>
          <th>Without Vat</th>
          <th>Code</th>
          <th>%</th>
          <th>Account</th>
        </tr>
      </thead>
      <tr v-for="bananaRecord in bananaRecords" :key="bananaRecord.uuid">
        <td>                   
          {{bananaRecord.document}}
          <v-popover v-if="bananaRecord.violations.length" style="display:inline" trigger="hover">
            <font-awesome-icon icon="exclamation-circle" :style="{ color: 'tomato' }" class="tooltip-target"/>
            <ViolationsTooltip slot="popover" :violations="bananaRecord.violations"/>
          </v-popover>
        </td>
        <td>{{bananaRecord.date}}</td>
        <td>{{bananaRecord.description}}</td>
        <td>{{bananaRecord.debitAccount}}</td>
        <td>{{bananaRecord.creditAccount}}</td>
        <td>{{bananaRecord.amount}}</td>
        <td>{{bananaRecord.amountVat}}</td>
        <td>{{bananaRecord.amountWithoutVat}}</td>
        <td>{{bananaRecord.vatCode}}</td>
        <td>{{bananaRecord.vatPct}}</td>
        <td>{{bananaRecord.vatAccount}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Table from './TableComponent.vue';
import ViolationsTooltip from "./ViolationsTooltip.vue";
export default {
  extends: Table,
  name: "BananaTable",
  components: { 
    ViolationsTooltip
  },
  props: ["bananaRecords"],
  updated() {
     this.$emit("bananaRecordsShown");
  }
};
</script>
