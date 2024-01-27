import axios from "axios";
import { ActionTypes } from "../action-types";
import { ActionUnion } from "../actions";
import { Dispatch } from "redux";

export const searchRepositry = (term: string) => {
  return async (dispatch: Dispatch<ActionUnion>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITRY,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((results: any): string[] => {
        return results.package.name;
      });
      dispatch({
        type: ActionTypes.SEARCH_REPOSITRY_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionTypes.SEARCH_REPOSITRY_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
