<template>
  <div class="page" ref="sectionContainer">
    <section-hero />
    <div class="work">
      <section-slanted :rotation="getRotation(i)" :data-index="i" v-for="i in [0, 1, 2, 3]" :key="i">
        hello {{ i }}
      </section-slanted>
    </div>
  </div>
</template>

<style scoped>
  .page { @apply flex flex-col; }

  .work { @apply flex flex-col items-center overflow-y-hidden pt-12; }

  .section-slanted[data-index="0"], .section-slanted[data-index="0"]::after { @apply bg-red-500; }
  .section-slanted[data-index="1"], .section-slanted[data-index="1"]::after { @apply bg-green-500; }
  .section-slanted[data-index="2"], .section-slanted[data-index="2"]::after { @apply bg-blue-500; }
  .section-slanted[data-index="3"], .section-slanted[data-index="3"]::after { @apply bg-purple-500; }
  .section-slanted[data-index="0"] { --z: 3; }
  .section-slanted[data-index="1"] { --z: 2; }
  .section-slanted[data-index="2"] { --z: 1; }
  .section-slanted[data-index="3"] { --z: 0; }
</style>

<script>
const max_rotation = 5

export default {
  data() {
    return {
      meme: null
    }
  },
  methods: {
    getRotation(i) { return (i % 2 === 0) ? max_rotation : -max_rotation }
  }
}
</script>
