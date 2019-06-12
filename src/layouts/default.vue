<template>
  <div>
    <BasicHeader />
    <main>
      <nuxt/>
    </main>
    <BasicFooter />
  </div>
</template>

<script>
import BasicHeader from '@/components/layouts/BasicHeader'
import BasicFooter from '@/components/layouts/BasicFooter'

export default {
  name: 'default',
  components: {BasicHeader, BasicFooter}
}
</script>

<style>
:root {
  --main-color: #424242;
}
</style>

