<template>
  <nav>
    <img
        src='@/assets/logo.png'
        alt='logo'
    />
    <h4> {{fullName}}</h4>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  props:['profile'],
  computed:{
    fullName(){
      return this.profile.firstName +" "+ this.profile.lastName
    }
  }
}
</script>

<style scoped>
nav{
  display: flex;
  background: #000;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px;
}
img{
  display: flex;
  max-width: 200px;
  max-height:35px;
  height: 100%;
  text-align: center;
  width: auto;
}
h4{
  color: #fff;
  margin: 0;
  font-size: 18px;
  font-weight: normal;
}
</style>