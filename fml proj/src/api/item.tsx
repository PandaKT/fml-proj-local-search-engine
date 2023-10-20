import { faker } from "@faker-js/faker";

export class ModelItem {
  storeID = "";
  itemID = "";
  name = "";
  price = "";
  description = "";
  timestamp: string = "";
  uploaderID: string = "";
}
// stub data only
const itemIds = [
  "item-1",
  "item-2",
  "item-3",
  "item-4",
  "item-5",
  "item-6",
  "item-7",
  "item-8",
  "item-9",
  "item-10",
];

export async function getItem(itemID: string, storeID: string) {
  let item = new ModelItem();
  item.storeID = storeID;
  item.itemID = itemID;
  item.name = faker.commerce.productName();
  item.price = faker.commerce.price();
  item.description = faker.commerce.productDescription();
  item.timestamp = Math.random() + "";
  item.uploaderID = "";
  return item;
}

export async function getItemList(storeID: string) {
  let ret = [];
  for (let i = 0; i < 10; i++) {
    let item = new ModelItem();
    item.itemID = itemIds[i];
    item.storeID = storeID;
    item.name = faker.commerce.productName();
    item.price = faker.commerce.price();
    item.description = faker.commerce.productDescription();
    item.timestamp = Math.random() + "";
    item.uploaderID = "";

    ret.push(item);
  }
  return ret;
}
