<template>
    <p>Products id: {{ $route.params.id }}</p>
</template>

<script>
export default {
    validate (data) {
        console.log(data);
        return /^\d+$/.test(data.params.id)
    },
    layout: 'products'
}
</script>
