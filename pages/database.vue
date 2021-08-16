<template>
  <div>
    <v-btn @click="updateDatabase"></v-btn>
    <div v-for="updateStatus in updateStatusList" :key="updateStatus.name">
      {{ updateStatus.name }}: {{ updateStatus.status }}
      {{ updateStatus.inserted }}/{{ updateStatus.count }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Data, DataSource, DataSourceCode } from '~/defines/data_source';
import { getDatastore } from '~/utils/datastore';
const DATASOURCE_JSON_FILE_ID = '1l0a6pqzW-NqN9VmFDWsvxA-iPOcGJo7h';
const StatusList = ['downloading', 'updating', 'success'] as const;
type Status = typeof StatusList[number];
interface UpdateStatus {
  name: DataSourceCode;
  status: Status;
  count: number;
  inserted: number;
}
@Component
export default class PageDatabase extends Vue {
  updateStatusList: UpdateStatus[] = [];
  async updateDatabase(event: Event) {
    event.preventDefault();
    const datasourceList = await this.$axios.$get<DataSource[]>(
      `https://www.googleapis.com/drive/v3/files/${DATASOURCE_JSON_FILE_ID}?alt=media`
    );
    this.updateStatusList.splice(0);
    for (const datasource of datasourceList) {
      const datastore = getDatastore(datasource.name);
      await datastore.remove({}, { multi: true });
      const updateStatus: UpdateStatus = {
        name: datasource.name,
        status: 'downloading',
        count: 0,
        inserted: 0,
      };
      this.updateStatusList.push(updateStatus);
    }
    for (const datasource of datasourceList) {
      const updateStatus: UpdateStatus = this.updateStatusList.find(
        (item) => item.name === datasource.name
      )!;
      const datastore = getDatastore(datasource.name);
      this.$axios
        .$get<Data[]>(
          `https://www.googleapis.com/drive/v3/files/${datasource.fileId}?alt=media`
        )
        .then((dataList) => {
          updateStatus.count = dataList.length;
          updateStatus.status = 'updating';
          datastore.insert(dataList).then((_) => {
            updateStatus.inserted += _.length;
            updateStatus.status = 'success';
          });
        });
    }
  }
}
</script>
