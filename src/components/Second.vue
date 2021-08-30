<template>
  <div class="comp comp-scolor">
    <p class="comp-name">Second Component</p>
    <p>props : {{ name }}</p>

    <third :name="name"/>
  </div>
</template>

<script>
import Third from '@/components/Third'

export default {
  name: 'second',
  components: { Third },
  props: {
    name: String
  }
}
</script>