<script setup lang="ts"></script>
<template>
  <div class="customer-notfound">
    <h2 class="nf-primary customer-animation-404">404 not found</h2>
  </div>

</template>
<style scoped>
.customer-notfound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.customer-notfound .nf-primary {
  font-weight: bold;
  letter-spacing: .3rem;
  color: var(--vp-my-indigo-1);
  padding: 20px 0;
}
</style>