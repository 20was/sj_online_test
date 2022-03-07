<template>
  <div class="rate">
    <div>
      <h4>Distance</h4>
      <h2>{{ distance }} miles</h2>
    </div>
    <div>
      <h4>Hourly Rate</h4>
      <h2><span>&#36;</span>{{ rate }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "RateContainer",
  props:['distance','rate']
}
</script>

<style scoped>

.rate {
  background: rgb(91, 218, 179);
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.rate h2 {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
}

.rate span {
  font-size: 55%;
  transform: translate(0px, -14px);
  display: inline-block;
}
h2, h4 {
  font-weight: bold;
  margin: 0;
}
.rate div:last-child{
  text-align: end;
}
</style>