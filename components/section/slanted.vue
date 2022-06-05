<template>
  <div ref="section" class="section-slanted">
    <div ref="content" class="section-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section-slanted {
  @apply min-h-64 flex justify-center;
  width: 1000%;
  height: 50vh;
  z-index: calc(20 - var(--z));
}

.section-slanted::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 1000vh;
  z-index: calc(20 + var(--z));
}
.section-content {
  @apply w-1/10;
    z-index: calc(30 + var(--z));
}
</style>

<script>
import anime from 'animejs'
import inView from '../../lib/in-view'

export default {
  props: {
    rotation: {
      default: 0
    }
  },
  data() {
    return {
      animation: null
    }
  },
  mounted() {
    this.animation = this.animation = anime({
      targets: [ this.$refs.section ],
      duration: '500',
      delay: '250',
      rotate: [ this.rotation, 0 ],
      easing: 'easeInQuad',
      autoplay: false,
      complete: () => {
        anime({
          targets: [ this.$refs.section ],
          color: [ 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)' ]
        })
      }
    })

    this.$refs.section.style.color = 'transparent'

    inView(() =>
    {
      this.animation.play()
    }, this.$refs.content, 100)
  }
}
</script>
