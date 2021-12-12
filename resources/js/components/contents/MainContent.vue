<template lang="pug">
ItemCard(title="의약품 행정처분", :items="recentlySettleItems")
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import ItemTable from '@/js/components/items/ItemTable.vue'
import ItemCard from '@/js/components/items/ItemCard.vue'
import { fetchItems } from '@/js/api/mdcin'
import { MdcinItem } from '@/js/api/types'

export default defineComponent({
  components: {
    ItemTable,
    ItemCard
  },
  setup () {
    const recentlySettleItems = ref<Partial<MdcinItem>[]>([])

    async function requestItems () {
      const response = await fetchItems()
      recentlySettleItems.value = response.data
    }

    onMounted(requestItems)

    return {
      recentlySettleItems,
      requestItems
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
