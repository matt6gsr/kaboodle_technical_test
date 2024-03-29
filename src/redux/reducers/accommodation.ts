import {
  GET_ACCOMMODATION_START,
  GET_ACCOMMODATION_SUCCESS,
  GET_ACCOMMODATION_FAIL,
  SET_SORT_ASCENDING,
  SET_SORT_DESCENDING,
  SET_SORT_RATING_ASCENDING,
  SET_SORT_RATING_DESCENDING,
} from "../actions/accommodation";
import { PayloadType } from "../../types/accommodation";

const initialState = {
  accommodation: [],
  error: null,
  loading: false,
  isSortedBy: "nameAsc",
};

export function accommodationReducer(
  state = initialState,
  {
    type,
    payload,
  }: {
    type: string;
    payload: PayloadType;
  }
) {
  switch (type) {
    case GET_ACCOMMODATION_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ACCOMMODATION_SUCCESS:
      return {
        ...state,
        accommodation: payload.accommodation,
        error: null,
      };
    case GET_ACCOMMODATION_FAIL:
      return {
        ...state,
        error: payload.error,
      };
    case SET_SORT_ASCENDING:
      return {
        ...state,
        accommodation: payload.accommodation,
        isSortedBy: "nameAsc",
      };
    case SET_SORT_DESCENDING:
      return {
        ...state,
        accommodation: payload.accommodation,
        isSortedBy: "nameDesc",
      };
    case SET_SORT_RATING_ASCENDING:
      return {
        ...state,
        accommodation: payload.accommodation,
        isSortedBy: "ratingAsc",
      };
    case SET_SORT_RATING_DESCENDING:
      return {
        ...state,
        accommodation: payload.accommodation,
        isSortedBy: "ratingDesc",
      };
    default: {
      return {
        ...state,
      };
    }
  }
}
