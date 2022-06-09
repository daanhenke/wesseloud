<template>
  <div class="header">
    <span class="header-brand">
      Wessel Oud
    </span>
    <div class="header-nav">
      <label @click="onShowNav" class="nav-hamburger" for="nav-toggle">
        hamburger
      </label>
      <input ref="navToggle" type="checkbox" id="nav-toggle" />
      <nav ref="container" class="nav-container">
        <label ref="closeLabel" @click="onCloseNav" class="nav-hamburger-close" for="nav-toggle">
          sluit hamburgert
        </label>
        <ul v-for="section, index in sections" :key="index" :data-i="index" class="nav-first">
          <li class="link" v-for="item in section" :key="item.path">
            <nuxt-link :to="item.path">
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.header { @apply bg-white z-50 sticky top-0 py-4 px-8 md:px-16 flex justify-between text-xl; }
.nav-hamburger, .nav-hamburger-close { @apply md:hidden; }
.nav-hamburger-close { @apply absolute right-4 top-4; }
.nav-container { @apply hidden md:flex md:flex-row items-end; }
.nav-container > ul { @apply flex flex-col md:flex-row }

.nuxt-link-exact-active { @apply text-primary; }
.link { @apply pl-8; }
.header-brand { @apply font-semibold }

#nav-toggle { @apply hidden; }

#nav-toggle:checked ~ .nav-hamburger { @apply hidden; }
#nav-toggle:checked ~ .nav-container .nav-hamburger-close { @apply flex; }

#nav-toggle:checked ~ .nav-container { @apply flex flex-col fixed top-0 right-0 w-full h-full; }
#nav-toggle:checked ~ .nav-container ul { @apply h-1/4; }
#nav-toggle:checked ~ .nav-container ul[data-i="0"] { @apply bg-green-500; }
#nav-toggle:checked ~ .nav-container ul[data-i="1"] { @apply bg-blue-500; }
#nav-toggle:checked ~ .nav-container ul[data-i="2"] { @apply bg-red-500; }
#nav-toggle:checked ~ .nav-container ul[data-i="3"] { @apply bg-purple-500; }
</style>

<script>
import anime from 'animejs'

export default {
  computed: {
    sections() {
      const result = []

      this.navItems.forEach(item =>
      {
        if (! item.hasOwnProperty('index')) item.index = 0

        if (result[item.index] === undefined) result[item.index] = []
        result[item.index].push(item)
      })

      while (result.length < 4) result.push([])

      return result
    }
  },
  data() {
    return {
      navAnimation: null,
      navItems: []
    }
  },
  methods: {
    onShowNav() {
      this.navAnimation = anime({
        targets: '.nav-container > ul',
        height: [ '0%', '25%' ],
        width: [ '0%', '100%' ],
        color: [ 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)' ],
        easing: 'easeInOutCubic',
        duration: 500,
        delay: (el, i) => i * 200,
        autoplay: false
      })

      anime({
        targets: '.nav-hamburger-close',
        opacity: ['0', '1'],
        duration: 1000,
        delay: 800
      })

      this.navAnimation.play()
    },
    onCloseNav(e) {
      e.preventDefault()

      anime({
        targets: '.nav-hamburger-close',
        opacity: ['1', '0'],
        duration: 1000,
        delay: 100
      })

      this.navAnimation.complete = () =>
      {
        this.$refs.navToggle.checked = false
        this.navAnimation.complete = undefined

        document.querySelectorAll('.nav-container > ul').forEach(el =>
        {
          el.style.removeProperty('width')
          el.style.removeProperty('height')
          el.style.removeProperty('color')
        })
      }

      this.navAnimation.reverse()
      this.navAnimation.play()
    }
  },
  async fetch() {
    const navData = await this.$content('layout/navigation').fetch()

    this.navItems = navData.header
  }
}
</script>
