export const DataSourceCodeList = [
  'ウマ娘',
  'スキル',
  '勝負服',
  '相性',
  'イベント',
  'サポートカード',
  'サポート効果',
  'サポートカード開放',
  'サポートカード所持スキル',
] as const;
export type DataSourceCode = typeof DataSourceCodeList[number];
export interface Data {
  [key: string]: any;
}
export type DataSource = {
  name: DataSourceCode;
  fileId: string;
};
