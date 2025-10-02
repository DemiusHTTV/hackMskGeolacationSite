<template>
  <MyHeader></MyHeader>
  <main>
    <section class="Image-data-container">
      <div class="left-container-for-image">
        <div class="img-box">
        <img src="" alt="Wine Activation" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      </div>
      <div class="right-container-for-data">
        <div class="data-content">
          
        </div>
      </div>
    </section>
    <section>
     
    </section>
  </main>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';

export default {
  name: 'MainPage',
  components: {
    MyHeader
  }
}
</script>

