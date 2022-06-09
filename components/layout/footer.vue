<template>
  <div class="footer">
    <div class="list">
      <nuxt-link v-for="item in navLeft" :key="item.name" :to="item.path">
        {{ item.name }}
      </nuxt-link>
    </div>
    <div class="logo">

    </div>
    <div class="list">
      <nuxt-link v-for="item in navRight" :key="item.name" :to="item.path">
        {{ item.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.footer { @apply flex flex-col md:flex-row items-center justify-between py-4 md:px-32 md:py-14 }
.footer > * { @apply py-8 }
.list { @apply flex flex-col md:flex-row }
.list > * { @apply py-4 md:py-0 md:px-4 underline; }
.logo {
  @apply min-h-8 min-w-32 bg-contain bg-center;
  background-image: url(~/assets/image/placeholder.png);
  background-repeat: no-repeat;
}
</style>

<script>
export default {
  data() {
    return {
      navLeft: [],
      navRight: []
    }
  },

  async fetch() {
    const navData = await this.$content('layout/navigation').fetch()

    this.navLeft = navData.footer.left
    this.navRight = navData.footer.right
  }
}
</script>
