// export const prerender = false;
import { pb} from "$lib/pocketbase";


// This runs on the server during prerendering and on the client during hydration'
// Generating the pages in advance could be useful except profiles might change
export async function load({ params }) {
  // console.log("load", params);
  // https://github.com/pocketbase/pocketbase/discussions/3677#discussioncomment-7477178

  return {
    username: params.user,
  };
}

// export async function entries() {
// 	return await getUsers();
// }

// async function getUsers() {
// const records = await pb.collection('users').getFullList({});
// let users = [];
// for (let record of records) {
//   users.push({
//     "user": record.username,
//   });
// }
// return users;
// }