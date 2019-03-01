<template>
  <div id="app">

    <Navbar />

    <Hero />

    <FoldIcons />

    <HowItWorks />

    <Testimonials />

    <Partners />

    <DebtRelief />

    <Footer />
  </div>
</template>

<script>
import DebtRelief from './components/DebtRelief.vue';
import FoldIcons from './components/FoldIcons.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import HowItWorks from './components/HowItWorks.vue';
import Navbar from './components/Navbar.vue';
import Partners from './components/Partners.vue';
import Testimonials from './components/Testimonials.vue';
export default {
  name: 'app',
  components: {
    DebtRelief,
    FoldIcons,
    Footer,
    Hero,
    HowItWorks,
    Navbar,
    Partners,
    Testimonials
  }
}
</script>

<style src="./styles/style.scss" lang="scss"/>
