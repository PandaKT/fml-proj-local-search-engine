export class ModelStore {
  storeID: string = "";
  storeName: string = "";
  storeLocation: string = "";
  //   storeContact: string = "";
  storeDescription: string = "";
  ownerID: string = "";
}
export async function getStore(storeID: string) {
  let item = new ModelStore();
  item.storeID = storeID;
  item.storeName = Math.random() + "";
  item.storeLocation = "mumbai, india";
  item.storeDescription = "desc";
  item.ownerID = "";
  return item;
}

export async function getStoreList() {
  let ret = [];
  for (let i = 0; i < 10; i++) {
    let item = new ModelStore();
    item.storeID = Math.random() + "";
    item.storeName = Math.random() + "";
    item.storeLocation = "mumbai, india";
    item.storeDescription = "desc";
    item.ownerID = "";
    ret.push(item);
  }
  return ret;
}
