<template>
  <v-app>
    <v-navigation-drawer
      v-if="this.$store.getters.isAuthenticated"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title @click="gotoHome()" v-text="title" />
      <v-spacer />
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'class',
          title: 'Add Class',
          to: '/classentry'
        },
        {
          icon: 'shopping_cart',
          title: 'Add Inventory',
          to: '/Inventory'
        },
        {
          icon: 'account_box',
          title: 'Award Rank',
          to: '/awardrank'
        },
        {
          icon: 'attach_money',
          title: 'View Fee List',
          to: '/viewFeeList'
        },
        {
          icon: 'streetview',
          title: 'View All Classes',
          to: '/listclasses'
        },
        {
          icon: 'streetview',
          title: 'View InActive Students',
          to: '/inactive'
        }
      ],
      miniVariant: false,
      title: 'STUDENT MANAGEMENT'
    }
  },
  methods: {
    gotoHome() {
      this.$router.push('/')
    }
  }
}
</script>
