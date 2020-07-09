<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss">

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  #app {
    background-color: #76809C;
    color: #1E213D;
  }

  @font-face {
    font-family:'Bree';
    src:url("/fonts/BreeSerif-Regular.ttf") format("truetype")
  }

  h1 {
    font-family:'Bree';
  }

   /*@import url("http://devthemes.joshuasiegal.com/css/bluet.css");*/
   /*@import url("http://devthemes.joshuasiegal.com/css/night.css");*/

</style>

<script>
import Header from './components/header/Header.vue'
import Main from './components/main/Main.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    Main
  },

  mounted() {
    //TODO: get json etc
  },

  created() {
    //console.log(process.env.VUE_APP_FONT_PATH)
  }

}

</script>
