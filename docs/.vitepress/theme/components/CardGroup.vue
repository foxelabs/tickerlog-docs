<script setup>
/* <CardGroup cols={n}>: a responsive grid that collapses to one column on
   narrow screens regardless of the requested column count. */
defineProps({ cols: { type: [Number, String], default: 2 } })
</script>

<template>
  <div class="tl-card-group-container">
    <div class="tl-card-group" :style="{ '--tl-cols': Number(cols) || 2 }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* The switch is on the width of the *content column*, not the viewport, and
   there is exactly one breakpoint: below 42rem of container the grid is a
   single column, at or above it every requested column appears — so a
   `cols={4}` group really does put four cards across a normal desktop content
   column. Hence a container query rather than a media query, which would
   collapse a 4-up group at viewport widths where the column is still wide. */
.tl-card-group-container {
  container-type: inline-size;
}

.tl-card-group {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 20px 0;
}

@container (min-width: 42rem) {
  .tl-card-group {
    grid-template-columns: repeat(var(--tl-cols), minmax(0, 1fr));
  }
}
</style>
