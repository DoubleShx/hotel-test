import { } from "../types/reservation";
import { FETCH_RESERVATIONS, SET_RESERVATIONS, SHOW_RESERVATION_COLLAPSE } from "../types/reservation";

const initialState = {
  reservation: "",
  show: false
}


const reservation = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESERVATIONS :
      return { ...state, reservation: action.reservation }
    case SET_RESERVATIONS :
      return {...state, reservation: action.reservation }
    case SHOW_RESERVATION_COLLAPSE :
        return { ...state, show: action.show !== '' ? action.show : !state.show }
    default:
      return state
  }
}

export default reservation;
