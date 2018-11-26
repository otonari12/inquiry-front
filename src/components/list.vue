<template>
  <div class="hello">
    <h1>list</h1>
    <ul>
      <li v-for="item in items" :key="item.id" >
        <dl>
          <dt>title</dt>
          <dd>{{item.title}}</dd>
          <dt>detail</dt>
          <dd>{{item.detail}}</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'list',
  data () {
    return {
      items: []
    }
  },
  created () {
    axios.get(`${process.env.API_ENDPOINT}api/inquiry`).then((res) => {
      this.items = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
