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
      <tr v-for="bananaRecord in bananaRecords" :key="bananaRecord.id">
        <td>{{bananaRecord.document}}</td>
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
export default {
  name: "BananaTable",
  props: ["bananaRecords"]
};
</script>

<style scoped>
table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #ddd;
  padding: 8px;
}
tr:nth-child(even){background-color: #f2f2f2;}
th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>