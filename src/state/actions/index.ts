import { ActionTypes } from "../action-types";

//action types interface
interface ActionStateSearch {
  type: ActionTypes.SEARCH_REPOSITRY;
}
interface ActionStateSuccess {
  type: ActionTypes.SEARCH_REPOSITRY_SUCCESS;
  payload: string[];
}
interface ActionStateError {
  type: ActionTypes.SEARCH_REPOSITRY_ERROR;
  payload: string;
}

// Combining all action types
export type ActionUnion =
  | ActionStateSearch
  | ActionStateSuccess
  | ActionStateError;
