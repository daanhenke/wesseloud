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
      Fakka G
    </div>
  </div>
</template>

<style scoped>
.hero-section { @apply flex flex-col md:flex-row items-center bg-light-500 min-h-128 p-12; }
.hero-section > * { @apply w-1/2; }
.animation-container { @apply flex flex-grow justify-center; }
.animation { @apply relative w-72 h-72 <sm:w-48 <sm:h-48; }
.animation > * { @apply absolute w-24 h-24 <sm:w-16 <sm:h-16; }

.animation[data-hidden="true"] svg { @apply hidden; }
svg.smaller { @apply w-16 h-16 <sm:w-11 <sm:h-11; }
svg.medium { @apply pt-6 px-3; }
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
          easing: 'easeInOutQuint'
        })
      })
    }
  }
}
</script>
