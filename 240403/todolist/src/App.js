import React from "react";
import { useReducer, useRef, useCallback, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import { type } from "@testing-library/user-event/dist/type";

//context
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

//목업데이터
//- 보관한다는 뜻은 변수 명 선언한다 혹은 변수 값 할당한다는 뜻 변수생성
//       - 객체유형의 타입으로 자료를 1차 저장해야 한다
//       - 검색기능을 사용하려면 filter함수를 사용 이터러블 객체
//       - 순회가능한 데이터형태를 이터러블 객체라고 함
//       - 배열을 사용해야한다!!!!
//
//state function
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              isDone: !it.isDone,
            }
          : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "배드민턴 치기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "포트폴리오 준비하기",
    createDate: new Date().getTime(),
  },
];

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);
  const memoizedDispathes = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={{ todo }}>
        <TodoDispatchContext value={memoizedDispathes}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
