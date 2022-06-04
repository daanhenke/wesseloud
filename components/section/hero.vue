<template>
  <div class="hero-section">
    <div class="animation-container">
      <div data-hidden="true" ref="animationContainer" class="animation">
        <svg-icon name="RectangleBlueHero" />
        <svg-icon name="RectangleGreenHero" />
        <svg-icon name="RectangleOrangeHero" />
        <svg-icon name="RectangleBlueHero" />
        <svg-icon name="TriangleHero" />
        <svg-icon class="medium" name="PlusHero" />
        <svg-icon class="smaller" name="EllipseHero" />
      </div>
    </div>
    <div class="text">
      <h1>Fakka G</h1>
      <p>Lorem ipsum dipsum</p>
    </div>
  </div>
</template>

<style scoped>
.hero-section { @apply flex flex-col md:flex-row items-center bg-light-500 min-h-128 p-12; }
.hero-section > * { @apply w-1/2; }
.animation-container { @apply flex flex-grow justify-center; }
.animation { @apply relative md:w-72 md:h-72 sm:w-60 sm:h-60 w-36 h-36; }
.animation > * { @apply absolute md:w-24 md:h-24 sm:w-20 sm:h-20 w-12 h-12; }

.animation[data-hidden="true"] svg { @apply hidden; }
svg.smaller { @apply md:w-16 md:h-16 sm:w-13 sm:h-13 w-8 h-8; }
svg.medium { @apply sm:pt-6 sm:px-3 pt-3 px-1; }

.text > h1 { @apply text-3xl; }
</style>

<script>
import anime from 'animejs'

export default {
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      const list = [
        { startX: 50, startY: 0, endX: 0, endY: 66, startRotation: 0, endRotation: 0 },   // Bottom left
        { startX: 50, startY: 0, endX: 33, endY: 66, startRotation: 0, endRotation: 0 },  // Bootom center
        { startX: 50, startY: 0, endX: 66, endY: 66, startRotation: 0, endRotation: 0 },  // bottom right
        { startX: 50, startY: 0, endX: 66, endY: 33, startRotation: 0, endRotation: 0 },  // Middle right
        { startX: 50, startY: 50, endX: 33, endY: 33, startRotation: 0, endRotation: 0 }, // Middle center
        { startX: 50, startY: 50, endX: 66, endY: 0, startRotation: 0, endRotation: 0 }, // Top right
        { startX: 50, startY: 50, endX: 0, endY: 44, startRotation: 0, endRotation: 0 }, // Middle left
      ]

      this.$refs.animationContainer.dataset.hidden = undefined
      const elements = Array.from(this.$refs.animationContainer.children)

      const rand = (min, max) => (Math.random() * (max - min)) + min

      const textAnims = [
        anime({
          targets: '.text > h1',
          duration: '1000',
          autoplay: false,
          opacity: ['0', '1'],
          translateY: ['-.5rem', '0'],
          easing: 'easeInQuint'
        }),
        anime({
          targets: '.text > p',
          duration: '1000',
          autoplay: false,
          opacity: ['0', '1'],
          easing: 'easeInQuint',
          delay: 200
        })
      ]

      elements.forEach((el, index) =>
      {
        const entry = list[index]
        entry.startX = rand(-15, 100)
        entry.startY = rand(-15, 100)
        entry.startRotation = rand(0, 359)

        anime({
          targets: [el],
          duration: '1500',
          left: [ `${entry.startX}%`, `${entry.endX}%` ],
          top: [ `${entry.startY}%`, `${entry.endY}%` ],
          rotate: [ `${entry.startRotation}`, `${entry.endRotation}` ],
          delay: index * 200,
          easing: 'easeInOutQuint',
        })
      })

      setTimeout(() =>
      {
        textAnims.forEach(anim => anim.play())
      },
      1500 + elements.length * 100)
    }
  }
}
</script>
