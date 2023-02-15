import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVote: threadDetail.upVoted.include(action.payload.userId)
          ? threadDetail.upVote.filter((id) => id !== action.payload.userId)
          : threadDetail.upVote.concat(action.payload.userId),
      };
    case ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL:
      return {
        ...threadDetail,
        downVote: threadDetail.downVoted.include(action.payload.userId)
          ? threadDetail.downVote.filter((id) => id !== action.payload.userId)
          : threadDetail.downVote.concat(action.payload.userId),
      };
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
