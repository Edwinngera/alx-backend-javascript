export default function getListStudentIds(myList) {
  let finalList = [];
  if (!(myList instanceof Array)) {
    return finalList;
  }
  finalList = myList.map((items) => items.id);
  return finalList;
}
