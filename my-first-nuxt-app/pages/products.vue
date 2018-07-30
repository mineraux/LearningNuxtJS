<template>
    <div>
        <h1>Products page</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                <nuxt-link :to="'products/' + product.id">See product {{ product.id }}</nuxt-link>
            </li>
        </ul>
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
export default {
    data(){
        return {
            products: [
                { 
                    id: '1',
                    name: 'Product 1'
                },
                {
                    id: '2',
                    name: 'Product 2'
                },
            ]
        }
    },
    layout: 'products'
}
</script>

