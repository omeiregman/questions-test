const apiBaseUrl = process.env.API_BASE_URL;

export const makeRequest = (options, withToken, method) => {
  const _options = options || {};
  const headers = {
    "Content-type": "application/json",
  };
  if (withToken) {
    const accessToken = "";
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const request = new Request(`${apiBaseUrl}${_options.url}`, {
    method,
    mode: "cors",
    headers,
    body: JSON.stringify(_options.data),
  });

  const defer = new Promise((resolve, reject) => {
    fetch(request)
      .then((response) => {
        if (response.ok) {
          return resolve(response.json());
        }
        response.text().then((text) => {
          return reject(JSON.parse(text));
        });
      })
      .catch((error) => {
        reject(error);
      });
  });

  return defer;
};

export const api = {
  post: (options, withToken = true) => {
    return makeRequest(options, withToken, "POST");
  },
  put: (options, withToken = true) => {
    return makeRequest(options, withToken, "PUT");
  },
  get: (options, withToken = true) => {
    return makeRequest(options, withToken, "GET");
  },
  delete: (options, withToken = true) => {
    return makeRequest(options, withToken, "DELETE");
  },
};
