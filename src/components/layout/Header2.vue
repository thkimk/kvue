<template>
  <div>
  <div class="title">{{ title }}</div>
  <button @click = "updateTitle">update title</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    //   title : 'Vue.js study~'
    }
  },
  props: ['title'],
  methods: {
    updateTitle() {
      this.title = "Title updated!"
    }
  }
}
</script>
<style scoped>
  .title {
    font-size: 32px;
    color : rgb(37, 37, 158);
  }
</style>

