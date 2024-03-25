<template>
  <div>
    
    <p>
      What do you need?
      <input type="text" required placeholder="item name.." v-model="itemName">
    </p>
    <p>
      How many?
      <input type="number" placeholder="number of items.." v-model="itemNumber">
    </p>
    <button @click="addItem">Add item</button>


  <div>
    <p>Shopping list:</p>
    <ul>
      <li v-for="item in shoppingList" v-bind:key="item">{{ item.name }}, {{ item.number}}</li>
    </ul>
    <li>{{ name }}</li>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        itemName: null,
        itemNumber: null,
        shoppingList: [
         
        ]
      }
  },

  methods: {
      addItem(){
        let item = {
          name: this.itemName,
          number: this.itemNumber
        }
        this.shoppingList.push(item)
        this.itemName = null
        this.itemNumber = null  
      }
    }
};
</script>
