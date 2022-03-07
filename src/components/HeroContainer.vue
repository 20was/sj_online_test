<template>
  <div>
    <img :src='imgUrl' alt='Banner Image' />
  </div>
</template>
<script>
export default {
  name: "HeroContainer",
  props: {
    imgUrl: {
      type: String,
      required: true,
      default:'https://via.placeholder.com/900x300'
    }
  },
}
</script>

<style scoped>
div{
  border-radius: 5px 5px 0 0;
  max-height: 300px;
  overflow: hidden;
}
img{
  width: 100%;
  height: 100%;
}
</style>