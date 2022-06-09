<template>
    <div class="layout">
        <layout-header />
        <div class="content">
            <Nuxt />
        </div>
        <layout-footer />
    </div>
</template>

<style scoped>
  .layout { @apply flex flex-col; }
  .content { @apply flex flex-col; }
</style>
