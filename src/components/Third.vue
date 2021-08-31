<template>
  <div class="comp comp-tcolor">
    <p class="comp-name">Third Component</p>
    <p>props : {{ name }}</p>

    <span class="inject-text">inject props :
      <span class="inject-value">{{ injectProps }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'third',
  props: {
    name: String
  },
  inject: ['injectProps']
}
</script>

<style>
.inject-text {
  font-weight: bold;
}

.inject-value {
  color: red
}
</style>