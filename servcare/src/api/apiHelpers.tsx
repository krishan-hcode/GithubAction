import { apiRoutes } from "./apiRoutes";
import config from "./config";

export function getApiHeaders() {
  return {
    'Content-Type': 'application/json',
  };
}

export async function getApiRequest(url: any) {
  try {
    const headers = getApiHeaders();
    const res = await fetch(url, {
      method: 'GET',
      headers,
    });
    const response = await res.json();
    if (res.status >= 400) {
      return Promise.reject(response);
    } else {
      return Promise.resolve(response);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function postApiRequest(url: any, payload: any) {
  try {
    const headers = getApiHeaders();
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: payload ? JSON.stringify(payload) : null
    });

    const response = await res.json();
    if (res.status >= 400) {
      return Promise.reject(response);
    } else {
      return Promise.resolve(response);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function putApiRequest(url: any, payload: any) {

  try {
    const headers = getApiHeaders();
    const res = await fetch(url, {
      method: 'PUT',
      headers,
      body: payload ? JSON.stringify(payload) : null
    });

    const response = await res.json();
    if (res.status >= 400) {
      return Promise.reject(response);
    } else {
      return Promise.resolve(response);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function deleteApiRequest(url: any) {
  console.log("api", url)
  try {
    const headers = getApiHeaders();
    const res = await fetch(url, {
      method: 'DELETE',
      headers,
    });
    const response = await res.json();
    if (res.status >= 400) {
      return Promise.reject(response);
    } else {
      return Promise.resolve(response);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function uploadDocumentApi(file: any) {
  var files = {
    name: file[0].name,
    uri: file[0].uri,
    type: file[0].type,
  }
  const formData = new FormData();
  formData.append('file', files);
  try {
    const res = await fetch(config.BASE_URL_MASTER + apiRoutes.MASTER + apiRoutes.S3_FILES + apiRoutes.UPLOAD + apiRoutes.DOCUMENTS, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData
    });
    const response = await res.json();
    if (res.status >= 400) {
      return Promise.reject(response);
    } else {
      return Promise.resolve(response);
    }
  } catch (error) {
    return Promise.reject(error);
  }
}
