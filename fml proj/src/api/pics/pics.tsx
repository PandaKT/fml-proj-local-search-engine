export async function getItemPics(itemID: string) {
  const url = "https://picsum.photos/200/300";
  let ret = [];
  for (let i = 0; i < 10; i++) {
    ret.push(url);
  }
  return ret;
}
