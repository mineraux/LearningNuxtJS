<template>
    <section class="post-list">
        <PostPreview 
          id="1" 
          thumbnail="https://cdn-images-1.medium.com/max/1600/1*dKYx6tc_nT6hELIz9_pExg.png" 
          title="Hello Nuxt !" 
          previewText="Nice framework tho" 
          :is-admin="isAdmin"
        />
        <PostPreview 
          id="2" 
          thumbnail="https://cdn-images-1.medium.com/max/1600/1*dKYx6tc_nT6hELIz9_pExg.png" 
          title="Nuxt still insane !" 
          previewText="Can't believe that ..." 
          :is-admin="isAdmin"
        />
        <PostPreview 
          id="3" 
          thumbnail="https://cdn-images-1.medium.com/max/1600/1*dKYx6tc_nT6hELIz9_pExg.png" 
          title="Well, thank you for nuxt !" 
          previewText="Nice nuxtjs component" 
          :is-admin="isAdmin"
        />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

