import { useState } from "react";

export function useAPImethod(APIget, setState) {
  const [status, setStatus] = useState({});

  function runAPImethod(APImethod = APIget, APIparameters = {}) {
    const typeGET = APImethod.name.toLowerCase().includes(`get`);

    setStatus({ method: APImethod.name, status: `LOADING` });
    if (typeGET) {
      APIget()
        .then((data) => {
          setStatus({ method: APIget.name, status: `DONE` });
          setState(data);
          return data;
        })
        .catch((error) => {
          setStatus({ method: APIget.name, status: `ERROR` });
          return Promise.reject(error);
        });
    } else {
      APImethod(APIparameters)
        .then(() => APIget())
        .then((data) => {
          setStatus({ method: APImethod.name, status: `DONE` });
          setState(data);
          return data;
        })
        .catch((error) => {
          setStatus({ method: APImethod.name, status: `ERROR` });
          return Promise.reject(error);
        });
    }
  }

  return {
    status,
    runAPImethod,
  };
}
