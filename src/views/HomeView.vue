<script setup>
import { useCounterStore } from "../stores/counter";

const dataStore = useCounterStore();
</script>

<template>
  <main>
    <h1>{{ dataStore.msg.toUpperCase() }}</h1>
    <input v-model="dataStore.count" type="number" />
    <div class="count">{{ dataStore.count }}</div>
    <div class="button">
      <button @click="dataStore.addCount(1)">+</button>
      <button @click="dataStore.addCount(-1)">-</button>
    </div>
    <hr />
    <div>{{ dataStore.oddOrEven }}</div>
  </main>
</template>
