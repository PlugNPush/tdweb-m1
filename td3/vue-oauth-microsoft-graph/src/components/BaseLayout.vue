<template>
    <div>
        <base-header />
        <slot>
            Failed to load
        </slot>
        <base-footer />
    </div>
</template>

<script>
    
    import BaseHeader from './../pages/BaseHeader.vue'
    import BaseFooter from './../pages/BaseFooter.vue'
    
    export default {
      name: 'BaseLayout',
      components: {
        BaseHeader,
        BaseFooter
      }
    }

</script>