<template>
  <div>
    <section-hero />
  </div>
</template>

<script>
export default {
  data() {
    return {
      meme: null
    }
  },

  async fetch() {
    //this.meme = await this.$content('hello').fetch()
  }
}
</script>
