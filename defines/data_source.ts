export const DataSourceCodeList = ['ウマ娘', 'イベント'] as const;
export type DataSourceCode = typeof DataSourceCodeList[number];

export type DataSource = {
  [code in DataSourceCode]: string;
};
