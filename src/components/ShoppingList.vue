<template>
  <div class="shopping-list">
    <h2>Shopping List</h2>
    <ul>
      <li v-for="item in shoppingList" :key="item.id">
        {{ item.name }} - ${{ item.price }}
        <button @click="removeFromShoppingList(item.id)">Remove</button>
      </li>
    </ul>
    <p v-if="!shoppingList.length">Your shopping list is empty.</p>
  </div>
</template>

<script>
import { useShoppingListStore } from '../store/shoppingListStore';

export default {
  setup() {
    const shoppingListStore = useShoppingListStore();
    const shoppingList = shoppingListStore.items;

    const removeFromShoppingList = (id) => {
      shoppingListStore.removeItem(id);
    };

    return { shoppingList, removeFromShoppingList };
  },
};
</script>
