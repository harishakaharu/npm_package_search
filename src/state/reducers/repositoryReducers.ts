// state interface
import { ActionTypes } from "../action-types";
import { ActionUnion } from "../actions";

interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}
const intialState = { loading: false, error: null, data: [] };

export const repositoryReducers = (
  state: RepositoryState = intialState,
  action: ActionUnion
): RepositoryState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITRY:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPOSITRY_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_REPOSITRY_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
