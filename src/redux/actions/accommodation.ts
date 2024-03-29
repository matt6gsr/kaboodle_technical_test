import { Accommodation, PayloadType } from "../../types/accommodation";

export const GET_ACCOMMODATION_START = "GET_ACCOMMODATION_START";
export const GET_ACCOMMODATION_SUCCESS = "GET_ACCOMMODATION_SUCCESS";
export const GET_ACCOMMODATION_FAIL = "GET_ACCOMMODATION_FAIL";
export const SET_SORT_ASCENDING = "SET_SORT_ASCENDING";
export const SET_SORT_DESCENDING = "SET_SORT_DESCENDING";
export const SET_SORT_RATING_ASCENDING = "SET_SORT_RATING_ASCENDING";
export const SET_SORT_RATING_DESCENDING = "SET_SORT_RATING_DESCENDING";

export const getAccommodation = () => {
  return (
    dispatch: (arg0: {
      type: string;
      payload?: { accommodation: Accommodation[] } | { error: string };
    }) => void
  ): Promise<Accommodation[]> => {
    dispatch(getAccommodationStart());
    return fetch("/accommodation.json")
      .then((res) => res.json())
      .then((data) => {
        data.accommodations.sort((a: Accommodation, b: Accommodation) => {
          return a.name.localeCompare(b.name);
        });
        dispatch(getAccommodationSuccess(data.accommodations));
        return data.accommodations;
      })
      .catch((error) => {
        dispatch(getAccommodationFail(error.message));
      });
  };
};

export const getAccommodationStart = () => {
  return {
    type: GET_ACCOMMODATION_START,
  };
};

export const getAccommodationSuccess = (accommodation: Accommodation[]) => {
  return {
    type: GET_ACCOMMODATION_SUCCESS,
    payload: { accommodation },
  };
};

export const getAccommodationFail = (error: string) => {
  return {
    type: GET_ACCOMMODATION_FAIL,
    payload: { error },
  };
};

export const sortAccommodation =
  (type: string) =>
  (
    dispatch: (arg0: { type: string; payload: PayloadType | null }) => void,
    getState: () => { accommodation: Accommodation[] }
  ) => {
    let { accommodation } = getState();
    switch (type) {
      case "nameAsc":
        accommodation = accommodation
          .slice()
          .sort((a: Accommodation, b: Accommodation): number => {
            return a.name.localeCompare(b.name);
          });
        dispatch({
          type: SET_SORT_ASCENDING,
          payload: {
            accommodation: accommodation,
            isSortedBy: "nameAsc",
            loading: false,
            error: null,
          },
        });
        break;
      case "nameDesc":
        accommodation = accommodation
          .slice()
          .sort((a: Accommodation, b: Accommodation): number => {
            return b.name.localeCompare(a.name);
          });
        dispatch({
          type: SET_SORT_DESCENDING,
          payload: {
            accommodation: accommodation,
            isSortedBy: "nameDesc",
            loading: false,
            error: null,
          },
        });
        break;
      case "ratingAsc":
        accommodation = accommodation
          .slice()
          .sort((a: Accommodation, b: Accommodation): number => {
            return String(a.rating.id).localeCompare(String(b.rating.id));
          });
        dispatch({
          type: SET_SORT_RATING_ASCENDING,
          payload: {
            accommodation: accommodation,
            isSortedBy: "ratingAsc",
            loading: false,
            error: null,
          },
        });
        break;
      case "ratingDesc":
        accommodation = accommodation
          .slice()
          .sort((a: Accommodation, b: Accommodation): number => {
            return String(b.rating.id).localeCompare(String(a.rating.id));
          });
        dispatch({
          type: SET_SORT_RATING_DESCENDING,
          payload: {
            accommodation: accommodation,
            isSortedBy: "ratingDesc",
            loading: false,
            error: null,
          },
        });
        break;
      default:
        type = "setAccommodation";
        accommodation = accommodation.slice();
    }
  };
