<template>
  <div>
    <v-btn @click="signin">GOOGLE</v-btn>
    <div>{{ JSON.stringify($auth.state) }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class PageLogin extends Vue {
  signin(event: Event) {
    event.preventDefault();
    this.$auth.loginWith('google', {
      params: {
        prompt: 'select_account',
      },
    });
  }
}
</script>
