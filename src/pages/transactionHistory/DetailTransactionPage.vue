<script setup lang="ts">
import {data} from './_backend.ts'
import type { Transaction } from './_backend.ts'
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const transaction = ref<Transaction>();
const route = useRoute();

const transactionId = ref<any>(route?.params?.id || null);


onMounted(() => {
  transaction.value = data.transactions.find((transaction: any) => Number(transaction.id) === Number(transactionId.value));
  console.log(transactionId.value);
})

</script>

<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="q-mb-md" style="font-size: 20px">Detail Transaksi</div>
        <div class="row q-mb-sm">
          <div class="col-2">Nomor Rekening</div>
          <div class="col">{{transaction?.accountNumber}}</div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-2">Tipe Transaksi</div>
          <div class="col">{{transaction?.transactionType}}</div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-2">Deskripsi</div>
          <div class="col">{{transaction?.description}}</div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-2">Bank Tujuan</div>
          <div class="col">{{transaction?.destinationBank}}</div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-2">Kode Bank Tujuan</div>
          <div class="col">{{transaction?.destinationBankCode}}</div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-2">Biaya Admin</div>
          <div class="col">{{transaction?.adminFee}}</div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-2">Jumlah Total</div>
          <div class="col">{{transaction?.totalAmount}}</div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-2">Tanggal</div>
          <div class="col">{{transaction?.date}}</div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-2">Status</div>
          <div class="col">{{transaction?.status}}</div>
        </div>
        <div class="flex justify-end">
          <q-btn :to="{name: 'transaction-history'}" class="bg-green text-white">Kembali</q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style></style>