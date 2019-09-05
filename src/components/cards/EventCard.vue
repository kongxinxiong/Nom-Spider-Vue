<template>
  <md-card style="max-width: 250px;">
    <md-card-media md-ratio="16:9">
      <slot name="image"></slot>
    </md-card-media>
    <md-card-content style="text-align: center;padding:0">
      <slot name="description"></slot>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: "event-card"
};
</script>

<style scoped></style>
