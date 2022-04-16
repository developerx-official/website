<template>
  <router-view />
</template>

<style>
body {
  background-color: #000;
  background: radial-gradient(ellipse at right 34% bottom 5%, #33202a, #000 80%, #000);
  background-position: left;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  color: #f5f4f6;
  font: 1.3rem Inconsolata, monospace;
  text-shadow: 0 0 5px #f5f4f6;
}

body::after {
  content: "";
  position: absolute;
  opacity: 0.3;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) 2px, transparent, transparent 4px);
  pointer-events: none;
}

body::before {
  content: "";
  position: absolute;
  z-index: 1000;
  opacity: 0.4;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(ellipse at right 34% bottom 5%, transparent 60%, #000);
  pointer-events: none;
}
</style>
