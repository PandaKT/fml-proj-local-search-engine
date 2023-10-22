import { faker } from "@faker-js/faker";

export class ModelUser {
  userID = "";
  userName = "";
  userEmail = "";
  userContact = "";
}

export async function getUser(userID: string) {
  let item = new ModelUser();
  item.userContact = faker.phone.number();
  item.userEmail = faker.internet.email();
  item.userName = faker.person.fullName();
  item.userID = userID;
  return item;
}
