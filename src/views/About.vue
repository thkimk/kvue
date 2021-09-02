<template>
<div>
  <h1>About page</h1>
  <Header2  :title="title"></Header2>

  <InputField2 v-model="title" /> 
    {{ title }}

</div>
</template>
 
<script>
import Header2 from "@/components/layout/Header2";
import InputField2 from '@/components/InputField2';

export default {
  name: "About",
  components: {Header2, InputField2 },
  data() {
      return {
          title: "Title from about"
      }
  }
}
</script>
