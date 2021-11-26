<template>
  <div>
    <div style="display: flex">
      <img v-for="image in home.images" :key="image" alt="" height="150" width="200" />
    </div>
    {{ home.title }}<br/>
    {{ home.pricePerNight }}/ night <br/>
    <img src="/images/marker.svg" height="20" width="20" />{{ home.location.address }} {{ home.location.city }} {{ home.location.state }} {{ home.location.country }}<br/>
    <img src="/images/star.svg" height="20" width="20" />{{ home.reviewValue }}<br/>
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.bath }} baths
  </div>
</template>

<script>
import homes from '~/data/homes'

  export default {
    head(){
      return {
        title: this.home.title
      }
    },
    data() {
      return {
        home: {}
      }
    },
    created(){
      // return home that matches the url
      const home = homes.find((home) => home.objectID == this.$route.params.id)  
      this.home = home
    }
  }
</script>
