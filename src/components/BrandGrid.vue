<template>
  <div class="grid">
    <div v-for="brand in brands" :key="brand.id" class="card">
      <h3>{{ brand.name }}</h3>
      <p>Price: ${{ brand.price }}</p>
      <p>Store: {{ brand.store }}</p>
      <button @click="addToShoppingList(brand)">Add to List</button>
    </div>
  </div>
</template>

<script>
import { useBrandStore } from '../store/brandStore';
import { useShoppingListStore } from '../store/shoppingListStore';

export default {
  setup() {
    const brandStore = useBrandStore();
    const shoppingListStore = useShoppingListStore();
    const brands = brandStore.brands;

    const addToShoppingList = (brand) => {
      shoppingListStore.addItem(brand);
    };

    return { brands, addToShoppingList };
  },
};
</script>
