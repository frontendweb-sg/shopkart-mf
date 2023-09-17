const ALERT_SHOW = "ALERT SHOW";
const ALERT_HIDE = "ALERT_HIDE";

type AlertPayload = {};
const alertShow = async (
  dispatch: any,
  payload: AlertPayload,
  timer?: number
) => {
  dispatch({ type: ALERT_SHOW, payload });

  setTimeout(() => {
    dispatch({ type: ALERT_HIDE });
  }, timer || 3000);
};
const alertHide = (dispatch: any) => {
  dispatch({ type: ALERT_HIDE });
};

export { ALERT_HIDE, ALERT_SHOW, AlertPayload, alertHide, alertShow };
