<template>
  <nav>
    <ul>
      <li v-for="item in items" :key="item.path">
        <test>
          {{ item.name }}
        </test>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: []
  }
}
</script>
