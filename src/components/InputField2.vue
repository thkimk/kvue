<template>
  <div>
    <form>
      <label>ID</label>
      <!-- <input type="text" v-model = "title" style = "padding: 20px; border: 1px pink solid"> -->
      <input type="text" :value = "value" @input = "$emit('input', $event.target.value)" style = "padding: 20px; border: 1px pink solid">
      <button>Submit</button>
    </form>
  </div>
</template>
 
<script>
/**
 * v-model
 *  v-model을 html 태그에 적용하면 양방향 바인딩이 되어 props를 자식 컴포넌트에서 수정하게 되지만, 
 * 컴포넌트 자체에 v-model을 걸게되면 부모-자식 컴포넌트 간 바인딩이 이루어져서 자식에서 직접 props를 바꾸는 것이 아니라 
 * 부모 컴포넌트에서 props에 해당하는 data 값을 바꾸는 방식이 된다
 */
export default {
  props : {
    title : {
      type : String,
      required : true
    }
  }
}
</script>