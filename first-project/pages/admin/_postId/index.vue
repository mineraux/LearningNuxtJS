<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    components: {
        AdminPostForm
    },
    layout:'admin',
    data() {
        return {
            loadedPost: {
                author: 'Robin',
                title: 'Nice post',
                content: 'Super amazing',
                thumbnailLink:'https://cdn-images-1.medium.com/max/1600/1*dKYx6tc_nT6hELIz9_pExg.png'
            }
        }
    }  
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>


