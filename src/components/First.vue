<template>
  <div class="comp comp-fcolor">
    <p class="comp-name">First Component</p>
    <p>props : {{ name }}</p>

    <second :name="name"/>
  </div>
</template>

<script>
import Second from '@/components/Second'

export default {
  name: 'first',
  components: { Second },
  props: {
    name: String
  }
}
</script>