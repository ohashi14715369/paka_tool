import Datastore from 'nedb-promises';

const daoMap: { [name: string]: Datastore } = {};

export function getDatastore(name: string) {
  if (!(name in daoMap)) {
    daoMap[name] = Datastore.create({
      filename: name,
    });
  }
  return daoMap[name];
}
