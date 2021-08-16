<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu left bottom>
        <template #activator="{ on, attrs }">
          <v-avatar v-if="$auth.loggedIn" v-bind="attrs" v-on="on">
            <v-img :src="$auth.state.user.picture" />
          </v-avatar>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title @click="$auth.logout()" v-text="'LogOut'" />
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'database',
          to: '/database',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'dataview',
          to: '/dataview',
        },
      ],
      title: 'PakaTool',
    };
  },
};
</script>
