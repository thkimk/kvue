<template>
  <div>
    <form>
      <label>ID</label>
      <!-- <input type="text" v-model = "title" style = "padding: 20px; border: 1px pink solid"> -->
      <input type="text" :value = "title" @input="titleUpdate" style = "padding: 20px; border: 1px pink solid">
      <button>Submit</button>
    </form>
  </div>
</template>
 
<script>
/**
 * $emit : 해당 컴포넌트에 이벤트 신규등록 (1번 parameter가 onclick과 같은 이벤트명, 2번 parameter가 해당 이벤트로 넘길 값)
 */
export default {
  props : {
    title : {
      type : String,
      required : true
    }
  },
  methods : {
    titleUpdate(e) {
      console.log(e.target.value);
      this.$emit('titleFromChild', e.target.value);
    }
  }
}
</script>