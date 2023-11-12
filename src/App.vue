<template>
  <div id="app">
    <nav>
      <div id="logo">
        <router-link to="/">
          <h3>Sylvie Ellis</h3>
        </router-link>
      </div>
      <div class="media_navigation">
        <h3>
          Media
        </h3>
        <span class="media_menu">
          <router-link to="/printmaking">printmaking</router-link>
          <router-link to="/painting">painting</router-link>
          <router-link to="/intermedia">intermedia</router-link>
          <router-link to="/artistbooks">artistbooks</router-link>
        </span>
      </div>
      <div class="about_navigation">
        <h3>About</h3>
        <span class="about_menu">
          <router-link to="/bio">bio</router-link>
          <router-link to="/contact">contact</router-link>
          <router-link to="/statement">statement</router-link>
          <router-link to="/resume">resume</router-link>
        </span>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">

#app {
  font-family: 'Garamond', sans-serif;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigation {
  display: grid;
}

.media_navigation:hover .media_menu {
  display: grid;
  grid-template-columns: 1fr;
}

.about_navigation:hover .about_menu {
  display: grid;
  grid-template-columns: 1fr;
}

.about_menu {
  display: none;
}

.media_menu {
  display: none;
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
