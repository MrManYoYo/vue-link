<template>
  <h1>{{ name }}</h1>
</template>
<script>
  export default {
    data () {
      return {
        name: this.$store.getters.getName
      }
    }
  }
</script>
<style scoped>

</style>

