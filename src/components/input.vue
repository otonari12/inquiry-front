<template>
  <div class="input">
    <h1>input</h1>
    <dl>
      <td>title</td>
      <dd><input type="text" v-model="title" ></dd>
      <td>detail</td>
      <dd><textarea cols="30" rows="10" v-model="detail" ></textarea></dd>
    </dl>
    <div><button @click="send">送信</button></div>
    <div v-if="mes != null">
      {{mes}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'input',
  data () {
    return {
      title: null,
      detail: null,
      mes: null
    }
  },
  methods: {
    send () {
      axios.post(`${process.env.API_ENDPOINT}api/inquiry`, {
        title: this.title,
        detail: this.detail
      }).then((res) => {
        this.mes = '登録しました'
      }).catch((res) => {
        this.mes = '失敗'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
