<template>
  <div class="fixed-center text-center">
    <p class="text-faded">Sorry, nothing here...<strong>(404)</strong></p>
    <button
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
    >Go back</button>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
