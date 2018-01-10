<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>awesome-vue</li>
    </ul>
    <Button 
      @click="getDataHandler"
      type="primary"
    >123</Button>
  </div>
</template>

<script>
// import axios from 'axios'
import mock from 'mockjs'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getDataHandler () {
      // axios.get('/mock/data.json')
      //   .then(res => {
      //     console.log(res)
      //   })
      this.$store.dispatch('updateName', '123')
      console.log(this.$store.getters.getName)
    }
  },
  mounted () {
    let _data = mock.mock({
      'list|1-10': [{
        'id|+1': 1
      }]
    })
    console.log(_data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
