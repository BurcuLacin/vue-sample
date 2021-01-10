<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'container'
}
</script>

<style>
.container {
  max-width: 940px;
  margin-left: auto;
  margin-right: auto;
}
</style>
