import { faker } from "@faker-js/faker";

export async function getItemPics(itemID: string) {
  const url = "https://picsum.photos/200/300";
  let ret = [];
  for (let i = 0; i < 10; i++) {
    ret.push(url);
  }
  return ret;
}

export async function getUserAvatar(userID: string) {
  const url = "https://picsum.photos/200/300";
  return faker.internet.avatar();
}
