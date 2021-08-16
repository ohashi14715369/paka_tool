<template>
  <v-btn @click="signin">GOOGLE</v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class PageLogin extends Vue {
  signin(event: Event) {
    event.preventDefault();
    this.$auth.loginWith('google');
  }
}
</script>
