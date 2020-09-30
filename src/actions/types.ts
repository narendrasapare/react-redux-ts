import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  fetchTodos, //leaving as it is makes ts assign value 0 to it
  deleteTodos,
}

export type Action = FetchTodosAction | DeleteTodoAction;
