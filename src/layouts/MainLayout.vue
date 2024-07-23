<script setup lang="ts">
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<template>
  <q-layout view="lHh lpR lFf" class="bg-grey-2">
    <q-header elevated class="bg-white text-black" :style="{left: leftDrawerOpen ? '250px' : '0'}">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <div class="flex justify-end">
            <div>Halo, Admin</div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit" style="background: #2C2E3E; color: white;">
        <div class="flex justify-center q-py-xl text-h5">Transaction App</div>
        <q-list>
          <q-item clickable v-ripple :to="{name: 'transaction-history'}" active-class="text-yellow bg-red-6 q-py-xl">
            <q-item-section avatar>
              <q-icon name="point_of_sale"></q-icon>
            </q-item-section>
            <q-item-section style="font-size: 17px">
              Transaksi
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container :style="{paddingLeft: leftDrawerOpen ? '250px' : '0'}">
      <router-view />
    </q-page-container>

  </q-layout>
</template>



<style>
.w-full {
  width: 100%;
}

.q-layout .q-item__section--avatar {
  min-width: 10px !important;
}

.q-layout .q-item {
  padding-top: 16px;
  padding-bottom: 16px;
}


aside {
  width: 250px !important;
}

</style>
