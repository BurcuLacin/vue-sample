<template>
  <div class="home">
    <div class="timeline">
      <h1>home</h1>
      <CustomText class="a1" tag="p">Merhaba dünya</CustomText>
      <CustomText class="a2" tag="p" size="small">Merhaba dünya</CustomText>
      <CustomText class="a3" tag="p" size="xsmall">Merhaba dünya</CustomText>
      <CustomText class="a4" tag="p" size="xxsmall">Merhaba dünya</CustomText>
      <IconHome width="40" height="40" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis
        debitis dicta sunt reiciendis repellat ullam nulla! Numquam earum, ea
        exercitationem amet quaerat expedita dolores dicta impedit, quo nulla
        architecto.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis
        debitis dicta sunt reiciendis repellat ullam nulla! Numquam earum, ea
        exercitationem amet quaerat expedita dolores dicta impedit, quo nulla
        architecto.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis
        debitis dicta sunt reiciendis repellat ullam nulla! Numquam earum, ea
        exercitationem amet quaerat expedita dolores dicta impedit, quo nulla
        architecto.
      </p>
    </div>

    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis
        debitis dicta sunt reiciendis repellat ullam nulla! Numquam earum, ea
        exercitationem amet quaerat expedita dolores dicta impedit, quo nulla
        architecto.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis
        debitis dicta sunt reiciendis repellat ullam nulla! Numquam earum, ea
        exercitationem amet quaerat expedita dolores dicta impedit, quo nulla
        architecto.
      </p>
    </div>
  </div>
</template>

<script>
import CustomText from '../../components/CustomText'
import IconHome from '../../icons/home.svg'
export default {
  name: 'Home',
  components: {
    CustomText,
    IconHome
  }
}
</script>

<style scoped>
.home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;

  @media (--t) {
    display: block;
  }
}
</style>
