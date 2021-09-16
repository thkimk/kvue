<template>
  <div id="greeting">
    {{ person }}의 홈페이지입니다.
  </div>
</template>
 
<script>
export default {
  name: "Header3",
  data() {
    return {person: "charlie"}
  }
}
 
</script>
 
<style scoped>
 
</style>