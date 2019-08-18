<template>
  <div class="burger" @click="handleClick">
    <input type="checkbox" class="checkbox">
    <span/>
    <span/>
    <span/>
  </div>
</template>

<script>
  export default {
    name: 'Burger',
    data () {
      return {
        open: false
      }
    },
    methods: {
      handleClick () {
        this.open = !this.open
        this.$emit('click', this.open)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .burger {
    position: relative;
    width: 40px;
    height: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .checkbox {
    position: absolute;
    z-index: 2;
    width: 40px;
    height: 32px;
    display: block;
    opacity: 0;
    cursor: pointer;
    -webkit-touch-callout: none;

    &:checked ~ span {
      background-color: #232323;
      opacity: 1;
      transform: rotate(45deg);

      &:nth-last-child(2) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      &:nth-last-child(1) {
        transform: rotate(-45deg) translate(0, 1px);
      }
    }
  }

  span {
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    display: block;

    background: #abcabc;
    border-radius: 3px;
    transform-origin: 4px 0;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
      background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
      opacity 0.55s ease;

    &:first-child {
      transform-origin: 0 0;
    }

    &:nth-last-child(1) {
      transform-origin: 0 100%;
    }
  }
</style>
