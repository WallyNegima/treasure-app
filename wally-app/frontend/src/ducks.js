import { createActions, handleActions } from "redux-actions";

const defaultState = {
  workLogId: null
};

export const { overwriteWorkLogId } = createActions({
  OVERWRITE_WORK_LOG_ID: workLogId => ({ workLogId })
});

export default handleActions(
  {
    [overwriteWorkLogId]: (state, { payload: { workLogId } }) => {
      return { ...state, workLogId };
    }
  },
  defaultState
);
