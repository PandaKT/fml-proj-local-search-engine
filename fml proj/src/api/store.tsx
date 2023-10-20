import { faker } from "@faker-js/faker";

export class ModelStore {
  storeID: string = "";
  storeName: string = "";
  storeLocation: string = "";
  storeContact: string = "";
  storeDescription: string = "";
  ownerID: string = "";
}

// stub data only
const storeIds = [
  "store-1",
  "store-2",
  "store-3",
  "store-4",
  "store-5",
  "store-6",
  "store-7",
  "store-8",
  "store-9",
  "store-10",
];

export async function getStore(storeID: string) {
  let item = new ModelStore();
  item.storeID = storeID;
  item.storeName = faker.company.name();
  item.storeLocation = faker.location.streetAddress();
  item.storeDescription = faker.company.catchPhraseDescriptor();
  item.ownerID = "";
  item.storeContact = faker.phone.number();
  return item;
}

export async function getStoreList() {
  let ret = [];
  for (let i = 0; i < 10; i++) {
    let item = new ModelStore();
    item.storeID = storeIds[i];
    item.storeName = faker.company.name();
    item.storeLocation = faker.location.streetAddress();
    item.storeDescription = faker.company.catchPhraseDescriptor();
    item.ownerID = "";
    item.storeContact = faker.phone.number();
    ret.push(item);
  }
  return ret;
}
