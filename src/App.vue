<template>
  <div id="app">

    <Navbar />

    <Hero />

    <FoldIcons />

    <HowItWorks />
  </div>
</template>

<script>
import FoldIcons from './components/FoldIcons.vue';
import Hero from './components/Hero.vue';
import HowItWorks from './components/HowItWorks.vue';
import Navbar from './components/Navbar.vue';
export default {
  name: 'app',
  components: {
    FoldIcons,
    Hero,
    HowItWorks,
    Navbar
  }
}
</script>

<style src="./styles/style.scss" lang="scss"/>
