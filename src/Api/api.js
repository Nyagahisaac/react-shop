

export const BASE_URL = `https://646e0e209c677e23218af6f4.mockapi.io/api/`;

export const postConfigure = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };
};

export const patchConfigure = (data) => {
  return {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  };
};

export const deleteConfig = () => {
  return {
    method: "DELETE",
  };
};
