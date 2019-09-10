<template>
  <div id="slides">
    <link rel="stylesheet" href="//cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="//cdn.staticfile.org/prism/1.15.0/themes/prism.min.css">
    <link rel="stylesheet" href="//cdn.staticfile.org/KaTeX/0.10.0-rc.1/katex.min.css">
    <div v-for="(slide, index) in value" @click="$emit('select', index)" :key="index" v-html="slide"></div>
  </div>
</template>
<script>
export default {
  name: 'mpe-slides',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  }
}
</script>
