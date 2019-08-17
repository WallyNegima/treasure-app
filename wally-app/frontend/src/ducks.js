import { createActions, handleActions } from "redux-actions";

const defaultState = {
  workLogId: null,
  count: 0
};

export const {
  overwriteWorkLogId,
  overwriteCount,
  incrementCount
} = createActions({
  OVERWRITE_WORK_LOG_ID: workLogId => ({ workLogId }),
  OVERWRITE_COUNT: count => ({ count }),
  INCREMENT_COUNT: () => {}
});

export default handleActions(
  {
    [overwriteWorkLogId]: (state, { payload: { workLogId } }) => {
      return { ...state, workLogId };
    },
    [overwriteCount]: (state, { payload: { count } }) => {
      return { ...state, count };
    },
    [incrementCount]: (state, {}) => {
      console.debug(state.count);
      return { ...state, count: state.count + 1 };
    }
  },
  defaultState
);
