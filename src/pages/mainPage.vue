<template>
    <div>
        <Header />
        <Animation />
    </div>
</template>

<script>
import Animation from '../components/animationBlock.vue'
import Header from '../components/header.vue'

export default {
    components:{Animation, Header}
}
</script>