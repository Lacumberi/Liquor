<template>
  <div class="container">
    <header>
      <img src="./assets/logo.png" alt="Logo" class="logo" />
      <h1>Alcohol Brands</h1>
    </header>
    <nav>
      <button :class="{ active: activeTab === 'brands' }" @click="activeTab = 'brands'">Brands</button>
      <button :class="{ active: activeTab === 'shopping' }" @click="activeTab = 'shopping'">Shopping List</button>
    </nav>
    <main>
      <BrandGrid v-if="activeTab === 'brands'" />
      <ShoppingList v-if="activeTab === 'shopping'" />
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import BrandGrid from './components/BrandGrid.vue';
import ShoppingList from './components/ShoppingList.vue';

export default {
  components: { BrandGrid, ShoppingList },
  setup() {
    const activeTab = ref('brands');
    return { activeTab };
  },
};
</script>
