<template>
  <div>logout</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class PageLogin extends Vue {
  mounted() {
    this.$auth.logout();
  }
}
</script>
