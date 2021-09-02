<template>
  <div>
    <h1>Welcome to Home</h1>
    <InputField :title = "title" @titleFromChild="titleChange"/>  
    {{title}}
    <Header2  :title="title"></Header2>
  </div>
</template>

<script>
import Header2 from '@/components/layout/Header2'
import InputField from '@/components/InputField';

export default {
  components: {
    InputField, Header2
  },
  data() {
    return {
        title: "Title from home"
    }
  },
    methods: {
    titleChange(title) {
      this.title = title
    }
  }
}
</script>
