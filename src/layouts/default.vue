<template>
  <div>
    <basic-header/>
    <main>
      <nuxt/>
    </main>
    <basic-footer/>
  </div>
</template>

<script>
  import basicHeader from '@/components/layouts/basicHeader'
  import basicFooter from '@/components/layouts/basicFooter'

  export default {
    name: "default",
    components: {basicHeader, basicFooter}
  }
</script>
