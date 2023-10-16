export class ModelItem {
  storeID = "";
  name = "";
  price = "";
  description = "";
  timestamp: string = "";
  uploaderID: string = "";
}

export async function getItem(itemID: string, storeID: string) {
  let item = new ModelItem();
  item.storeID = storeID;
  item.name = Math.random() + "";
  item.price = "100";
  item.description = "desc";
  item.timestamp = Math.random() + "";
  item.uploaderID = "";
  return item;
}

export async function getItemList(storeID: string) {
  let ret = [];
  for (let i = 0; i < 10; i++) {
    let item = new ModelItem();
    item.storeID = storeID;
    item.name = Math.random() + "";
    item.price = "100";
    item.description = "desc";
    item.timestamp = Math.random() + "";
    item.uploaderID = "";
    ret.push(item);
  }
  return ret;
}
