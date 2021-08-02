<template>
  <div id="app">
    <div class="navigation">
      <ul>
        <li><router-link to="/">Animation</router-link></li>
        <li><router-link to="/documentation">Instruction</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
/*   background: linear-gradient(to right, #04f9b8, #0fc5d7); */
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #0fc5d7, #04f9b8);
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

ul {
  list-style: none;
}
.navigation {
  padding: 10px 100px;
}
.navigation ul {
  list-style: none;
  color: #ffffffcf;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.navigation ul li {
  padding-right: 25px;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #ffffffcf;
}
a:hover {
  color: #fff;
  transition: 0.2s linear;
}
</style>
