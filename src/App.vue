<template>
  <div id="app" class="comp">
    <p class="comp-name">App</p>

    <span class="inject-text">provide :
      <span class="inject-value">'inject props'</span>
    </span>
    
    <Header></Header>

    <h3>안녕하세요</h3>
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
import Header from '@/components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  provide () {
    return {
      injectProps: 'inject value'
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