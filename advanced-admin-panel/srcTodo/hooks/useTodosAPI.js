import { useEffect, useCallback } from "react";
import { getTD, postTD, putTD, deleteTD } from "../api/api";
import { setTodos, setRequestStatus } from "../store/actions";
import { useDispatch } from "react-redux";

export default function useTodosAPI() {
  const dispatch = useDispatch();

  const getAndSetTodos = useCallback(() => {
    dispatch(setRequestStatus("loading"));
    getTD()
      .then(({ data }) => {
        dispatch(setTodos(data));
        dispatch(setRequestStatus("done"));
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(setRequestStatus("error"));
      });
  }, [dispatch]);

  useEffect(() => {
    getAndSetTodos();
  }, [getAndSetTodos, dispatch]);

  const postTodo = useCallback(
    (obj) => {
      dispatch(setRequestStatus("loading"));
      postTD(obj)
        .then(() => {
          getAndSetTodos();
        })
        .catch((error) => {
          console.log(error.response);
          dispatch(setRequestStatus("error"));
        });
    },
    [getAndSetTodos, dispatch]
  );

  const changeTodo = useCallback(
    (obj, id) => {
      dispatch(setRequestStatus("loading"));
      putTD(obj, id)
        .then(() => {
          getAndSetTodos();
        })
        .catch((error) => {
          console.log(error.response);
          dispatch(setRequestStatus("error"));
        });
    },
    [getAndSetTodos, dispatch]
  );

  const deleteTodo = useCallback(
    (id) => {
      dispatch(setRequestStatus("loading"));
      deleteTD(id)
        .then(() => {
          getAndSetTodos();
        })
        .catch((error) => {
          console.log(error.response);
          dispatch(setRequestStatus("error"));
        });
    },
    [getAndSetTodos, dispatch]
  );

  return {
    postTodo,
    changeTodo,
    deleteTodo,
  };
}

// const [requestStatus, setRequestStatus] = useState("");
//   const [error, setError] = useState("");

//   const getProject = useCallback((insertedId = false) => {
//     setRequestStatus("loading");
//     initGet()
//       .then(({ data }) => {
//         return data.id;
//       })
//       .then((id) => {
//         projectGet(insertedId ? insertedId : id)
//           .then(({ data }) => {
//             setProject(data.project);
//             setRequestStatus("done");
//           })
//           .catch((error) => {
//             setError(error.message);
//             setTimeout(() => {
//               setError("");
//             }, 2000);
//             setRequestStatus("error");
//           });
//       })
//       .catch((error) => {
//         setError(error.message);
//         setTimeout(() => {
//           setError("");
//         }, 2000);
//         setRequestStatus("error");
//       });
//   }, []);

//   return {
//     getProject,
//     requestStatus,
//     project,
//     error,
//   };
// }
