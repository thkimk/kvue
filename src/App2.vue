<template>
  <div id="app" class="comp">
    <p class="comp-name">App</p>

    <span class="inject-text">provide :
      <span class="inject-value">'inject props'</span>
    </span>
    
    <Header2></Header2>
    <br><br>

    <h3>안녕하세요</h3>
    <!-- App.vue 컴포넌트에 <router-view> 태그를 작성하였는데, 이 태그가 없어도 routes.path로 화면 전환은 되지만, 
    해당 태그가 없으면 실제 컴포넌트의 내용 이 출력되지 않으므로 꼭 써주어야 한다. -->
    <router-link to="/">[Home]</router-link>
    <router-link to="/about">[About]</router-link>
    <router-view></router-view>
    
    <!-- <first name="first"/> -->
  </div>
</template>

<script>
/**
 * '@/components/First' 에서, @는 src폴더를 의미
 */
// import First from '@/components/First'
import Header2 from '@/components/layout/Header2.vue'

export default {
  name: 'App',
  components: {
    Header2
  },
  provide () {
    return {
      injectProps: 'inject value'
    }
  },

    data() {
    return {
      id : 'charlie'
    }
  },
  beforeCreate() {
      console.log("## beforeCreate");  
  },
  created() {
      console.log("## created");  
  },
  beforeMount() {
      console.log("## beforeMount");  
  },
  mounted() {
      console.log("## mounted");  
  },
  beforeUpdate() {
      console.log("## beforeUpdate");  
  },
  updated() {
      console.log("## updated");  
  },
  beforeDestroy() {
      console.log("## beforeDestroy");  
  },
  destroyed() {
      console.log("## destroyed");  
  },
  methods: {
    updateId() {
      this.id = 'updated!'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.comp {
  text-align: left;
  border: 1px solid #444444;
  padding: 30px;
}

.comp.comp-fcolor {
  background: #f5acac96;
}

.comp.comp-scolor {
  background: #0000ff30;
}

.comp.comp-tcolor {
  background: #ffff0052;
}

.comp-name {
  color: #0020f8
}
</style>