export const selectUser = (user) => {
  console.log("You clicked on user: ", user.first);
  return {
    type: "USER_SELECTED", // any name you want
    payload: user
  }
}
