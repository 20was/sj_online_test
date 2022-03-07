<template>
  <div>
    <h3>{{ title }}</h3>
    <h5>{{ subTitle }}</h5>
  </div>
</template>

<script>
export default {
  name: "TitleContainer",
  props: {
    title: String,
    subTitle: String,
  },
}
</script>

<style scoped>
div{
  background: #fff;
  box-sizing: border-box;
  padding: 15px;
}
h3{
  font-weight: bold;
  margin: 0 0 5px;
}
h5{
  font-weight: bold;
  margin: 0;
  font-size: 16px;
}
</style>