<template>
  <div id="theme-selector">
    <h4>Theme Selector</h4>
    <select v-model="chosenTheme">
      <option v-for="theme in themes" :value="theme.attr">
        {{ theme.name }}
      </option>
    </select>
    <p>{{chosenTheme}}</p>
  </div>
</template>

<style scoped lang="scss">
</style>

<script>

//TODO: set theme choice in localstorage

export default {
  name: 'ThemeSelector',

  components: {
  },

  data: () => ({
    chosenTheme:"",
    themes:[
      {
        name:"Bluet",
        attr:"bluet"
      },
      {
        name:"Night",
        attr:"night"
      }
    ]
  }),

  methods: {
    updateTheme() {
      document.body.setAttribute("theme",this.chosenTheme)
    }

  },

  watch: {
    chosenTheme() {
      this.updateTheme()
    }
  },

  mounted() {
    //TODO: check localstorage
    this.chosenTheme = "bluet"
    this.updateTheme(this.chosenTheme)
  },

  created() {
  }
}
</script>