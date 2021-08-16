<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select v-model="dataSourceCode" :items="dataSourceCodeList" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :items="items" :headers="headers"></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator';
import { DataTableHeader } from 'vuetify';
import {
  Data,
  DataSourceCode,
  DataSourceCodeList,
} from '~/defines/data_source';
import { getDatastore } from '~/utils/datastore';

@Component
export default class PageDataView extends Vue {
  dataSourceCodeList: readonly DataSourceCode[] = DataSourceCodeList;
  dataSourceCode: DataSourceCode | null = null;
  headers: DataTableHeader[] = [];
  items: Data[] = [];

  @Watch('dataSourceCode')
  async onChangeDataSourceCode(newValue: DataSourceCode) {
    const datastore = getDatastore(newValue);
    const items = await datastore.find({});
    this.headers.splice(0);
    this.items.splice(0);
    if (items.length > 0) {
      Object.keys(items[0]).forEach((key) =>
        this.headers.push({ value: key, text: key })
      );
    }
    items.forEach((item) => this.items.push(item));
  }
}
</script>
