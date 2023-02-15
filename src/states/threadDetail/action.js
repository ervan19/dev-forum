import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UP_VOTE_THREAD_DETAIL: 'TOGGLE_UP_VOTE_THREAD_DETAIL',
  TOGGLE_DOWN_VOTE_THREAD_DETAIL: 'TOGGLE_DOWN_VOTE_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteThreadDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threadDetail } = getState();
    dispatch(toggleDownVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleDownVoteThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
};
