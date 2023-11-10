<template>
  <div id="app">
    <nav>
      <div id="logo">
        <router-link to="/">
          <h3>Sylvie Ellis</h3>
        </router-link>
      </div>
      <div class="navigation">
        <input type="radio" name="media_menu" class="menu_radio_button">
        <h3>Media</h3>

        <router-link to="/printmaking">printmaking</router-link>
        <router-link to="/painting">painting</router-link>
        <router-link to="/intermedia">intermedia</router-link>
        <router-link to="/artistbooks">artistbooks</router-link>
      </div>
      <div class="navigation">
        <input type="radio" name="media_menu" class="menu_radio_button">
        <h3>About</h3>
        <router-link to="/bio">bio</router-link>
        <router-link to="/contact">contact</router-link>
        <router-link to="/statement">statement</router-link>
        <router-link to="/resume">resume</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu_radio_button {
  display: none;
}

.navigation {
  display: grid;
}

nav {
  display: grid;
  padding: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: end;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
