// THIS RUNS ON THE SERVER!
export async function load({ params }) {
  // console.log("load", params);
  // https://github.com/pocketbase/pocketbase/discussions/3677#discussioncomment-7477178

  return {
    username: params.user,
  };
}
