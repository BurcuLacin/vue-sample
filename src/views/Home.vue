<template>
  <div class="home">
    <h1>home </h1>
    <CustomText class="a1" tag='p'>Merhaba dünya</CustomText>
    <CustomText class="a2" tag='p' size="small">Merhaba dünya</CustomText>
    <CustomText class="a3" tag='p' size="xsmall">Merhaba dünya</CustomText>
    <CustomText class="a4" tag='p' size="xxsmall">Merhaba dünya</CustomText>
  </div>
</template>

<script>
import CustomText from '../components/CustomText'
export default {
 name: 'Home',
 components: {
   CustomText
 }
}
</script>

<style scoped>
.a1{
  color: rgb(var(--ba8));
}
</style>