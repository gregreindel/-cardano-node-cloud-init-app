const { VUE_APP_API_URL } = process.env;

export const submitForm = async (data: any) => {
  const headers = new Headers({
    "x-api-key": "zrFVA6dHBX1Mp8SOOmizC90aPNWKzoVP2sQOLwYH",
  });

  const method = "GET";

  const params = new URLSearchParams(data);
  return fetch(`${VUE_APP_API_URL}?${params}`, {
    method,
    headers,
  })
    .then(function (response) {
      return response.json();
    })
    .catch((error) => {
      return {
        response: error.message,
        success: false,
      };
    });
};

export const submitCardanoNodeConfiguration = async ({
  state,
  commit,
  getters,
}: any): Promise<any | undefined> => {
  if (state.setIsCreatingCardanoNodeConfiguration) {
    return;
  }
  try {
    commit("setIsCreatingCardanoNodeConfiguration", true);
    const fields = Object.assign({}, getters.configureCardanoNodeFields);

    const { data, message } = await submitForm(fields);
    if (message) {
      commit("setCardanoNodeConfigurationError", message);
      throw new Error(message);
    }
    return JSON.parse(data);
  } catch (error) {
    throw new Error(error.message);
  } finally {
    commit("setIsCreatingCardanoNodeConfiguration", false);
  }
};
