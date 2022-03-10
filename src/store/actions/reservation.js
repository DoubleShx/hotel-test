import * as actions from "../types/reservation"

export const reservationCollapse = (show="") => dispatch => {
      dispatch({
        type: actions.SHOW_RESERVATION_COLLAPSE,
        show
      })
}