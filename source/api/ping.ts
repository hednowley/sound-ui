export const ping = async (
  server: string,
  username: string,
  password: string
) => {
  const response = await fetch(`${server}/api/authenticate`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: username, password: password })
  });

  if (response.status != 200) {
    return false;
  }

  //console.log(response.body.);

  const text = await response.text();
  console.log(text);
};
