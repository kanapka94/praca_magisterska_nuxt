<template>
  <div class="container">
    <input
      v-model="text"
      type="text"
      class="search"
      :placeholder="placeholder"
      @input="handleInput"
    >
    <button-component @click="handleClick">
      Szukaj
    </button-component>
  </div>
</template>

<script>
  import ButtonComponent from '../../general/Button'

  export default {
    name: 'SearchBar',
    components: { ButtonComponent },
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: 'Wpisz tekst...'
      }
    },
    data () {
      return {
        text: this.value
      }
    },
    methods: {
      handleInput () {
        this.$emit('input', this.text)
      },
      handleClick () {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    max-width: 350px;
    width: 100%;
    margin: 20px 0;
    display: flex;
  }

  .search {
    @include font-secondary;
    width: 100%;
    padding: 10px 40px 10px 10px;
    margin-right: -40px;
    border: 2px solid $gray-light;
    border-radius: 15px;
    outline: none;

    &:focus {
      border-color: $green-light;
    }
  }
</style>
