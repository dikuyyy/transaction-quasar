<script setup lang="ts">
import {data, transactionTypeOptions, statusTypeOptions} from './_backend.ts'
import type { Transaction } from './_backend.ts'
import {ref} from "vue";
import {columnsTransactionHistory} from "./_def.ts";
import DateInput from "../../components/DateInput.vue";
import router from '../../router'

const rows = ref<Transaction[]>(data.transactions)
const columns = columnsTransactionHistory;
const keyword = ref<string>('');
const expanded = ref<boolean>(false);
const filter = ref<any>({
  tanggal_awal: null,
  tanggal_akhir: null,
  jenis: '',
  nomor_rekening: '',
  status: ''
});

const reset = () => {
  filter.value.tanggal_awal = null;
  filter.value.tanggal_akhir = null;
  filter.value.jenis = '';
  filter.value.nomor_rekening = '';
  filter.value.status = ''
  rows.value = data.transactions;
}

const onFilter = () => {
  rows.value = data.transactions;
  const { tanggal_awal, tanggal_akhir, jenis, nomor_rekening, status } = filter.value;
  const startDate = tanggal_awal ? new Date(tanggal_awal) : null;
  const endDate = tanggal_akhir ? new Date(tanggal_akhir) : null;
  rows.value = rows.value.filter((transaction: any) => {
    const transactionDate = new Date(transaction.date);
    const isWithinDateRange = (!startDate || transactionDate >= startDate) &&
        (!endDate || transactionDate <= endDate);
    const matchesJenis = jenis ? transaction.transactionType.toLowerCase().includes(jenis.value.toLowerCase()) : true;
    const matchesNomorRekening = nomor_rekening ? transaction.accountNumber.includes(nomor_rekening) : true;
    const matchesStatus = status ? transaction.status.toLowerCase().includes(status.value.toLowerCase()) : true;

    return isWithinDateRange && matchesJenis && matchesNomorRekening && matchesStatus;
  })
}

const onDetail = (id: number) => {
  router.push({
    name: 'detail-transaction',
    params: {
      id
    }
  })
}

</script>

<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <div style="font-size: 24px">Data Transaksi</div>
      </q-card-section>
      <q-card-section>
        <q-expansion-item
            v-model="expanded"
            icon="filter_alt"
            label="Filter"
            class="filter-card"
            expand-icon-class="text-white"
            header-class="text-white bg-grey"
        >
          <q-card>
            <q-card-section class="q-px-lg q-py-md">
              <div class="row q-col-gutter-md q-mb-md">
                <div class="col-6 q-col-gutter-y-md">
                  <DateInput :readonly="false" v-model="filter.tanggal_awal" label="Tanggal Awal" hide-bottom-space></DateInput>
                </div>
                <div class="col-6 q-col-gutter-y-md">
                  <DateInput :readonly="false" v-model="filter.tanggal_akhir" label="Tanggal Akhir" hide-bottom-space></DateInput>
                </div>
              </div>
              <div class="row q-col-gutter-md q-mb-md">
                <div class="col-6 q-col-gutter-y-md">
                  <q-select v-model="filter.jenis" :options="transactionTypeOptions" outlined dense  label="Jenis Transaksi"></q-select>
                </div>
                <div class="col-6 q-col-gutter-y-md">
                  <q-input v-model="filter.nomor_rekening" outlined dense label="Nomor Rekening"></q-input>
                </div>
              </div>
              <div class="row q-col-gutter-md">
                <div class="col-6 q-col-gutter-y-md">
                  <q-select v-model="filter.status" :options="statusTypeOptions" outlined dense  label="Status"></q-select>
                </div>
              </div>
            </q-card-section>
            <q-card-actions align="right" class="filter-card-actions q-px-lg q-pb-md">
              <q-btn outline icon="refresh" label="Reset" @click="reset" color="primary" />
              <q-btn
                  unelevated
                  icon="filter_alt"
                  label="Filter"
                  @click="onFilter"
                  color="primary"
              />
            </q-card-actions>
          </q-card>
        </q-expansion-item>
        <q-table
            table-header-class="bg-table-header"
            :rows="rows"
            :columns="columns"
            :filter="keyword"
        >
          <template v-slot:body-cell-no="props: any">
            <q-td :props="props">
              {{props.rowIndex + 1}}
            </q-td>
          </template>
          <template v-slot:top-right>
            <q-input
                outlined
                dense
                debounce="300"
                v-model="keyword"
                @keyup.enter="reset"
                placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search"/>
              </template>
            </q-input>
          </template>
          <template v-slot:body-cell-action="props: any">
            <q-td :props="props">
              <q-btn @click="onDetail(props.row.id)" icon="visibility" dense color="green">
                <q-tooltip>
                  Detail
                </q-tooltip>
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </div>

</template>

<style>
.bg-table-header {
  background: #e7e7e7
}
</style>