import { useEffect, useState } from 'react';
import { isEmpty } from '../utilites/Utils';

function apiGetHook(url: any) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  let headers = { 'Content-Type': 'application/json' }

  async function getRequest() {
    const res = await fetch(url, {
      method: 'GET',
      headers: headers,
    })
    if (res.status >= 400) {
      setData(404);
    }
    else {
      const json = await res.json();
      setData(json);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (!isEmpty(url)) {
      getRequest();
    } else {
      setData(404);
      setLoading(false);
    }
  }, [url]);
  return [data, loading];
}
export { apiGetHook };
