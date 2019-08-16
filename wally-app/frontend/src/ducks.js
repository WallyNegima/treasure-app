import { createActions, handleActions } from "redux-actions";

const defaultState = {
  workLogId: null,
  count: 0
};

export const { overwriteWorkLogId, overwriteCount } = createActions({
  OVERWRITE_WORK_LOG_ID: workLogId => ({ workLogId }),
  OVERWRITE_COUNT: count => ({ count })
});

export default handleActions(
  {
    [overwriteWorkLogId]: (state, { payload: { workLogId } }) => {
      return { ...state, workLogId };
    },
    [overwriteCount]: (state, { payload: { count } }) => {
      return { ...state, count };
    }
  },
  defaultState
);
