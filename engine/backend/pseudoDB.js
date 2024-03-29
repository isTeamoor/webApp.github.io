export const users = [
  {
    id: 1,
    user_id: 10001,
    first_name: "first",
    last_name: "last",
    username: "username",
  },
];

export function nextID(table) {
  let maxID = 0;
  for (let item of table) {
    if (item.id >= maxID) {
      maxID = item.id + 1;
    }
    return maxID;
  }
}

export function req_get(table, condition) {
  let response = [];
  for (let item of table) {
    if (item[condition.field] == condition.value) {
      response.push(item);
    }
  }
  return response;
}
