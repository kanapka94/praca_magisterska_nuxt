<template>
  <div class="details">
    <detail-item
      v-for="detail in details"
      :key="detail.title"
      :detail="detail"
    />
  </div>
</template>

<script>
  import DetailItem from './DetailItem'

  export default {
    name: 'DetailsList',
    components: { DetailItem },
    props: {
      details: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
  /deep/ .detail {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>
