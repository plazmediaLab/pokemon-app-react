const reqAPI = async (keyword_arg) => {
  const keyword = keyword_arg;
  const url = `https://pokeapi.co/api/v2/pokemon/${keyword}/`;

  const request = fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "aplication/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      if (err) {
        return {
          status: 404,
          msn: "There was an error with the connection to API...",
        };
      }
    });

  return request;
};

export default reqAPI;
