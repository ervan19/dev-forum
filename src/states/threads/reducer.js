import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.CREATE_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.TOGGLE_UP_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: threads.upVotesBy.includes(action.payload.userId)
              ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
              : thread.upVotesBy.concat([action.payload.userId]),
          };
        }
        return thread;
      });
    case ActionType.TOGGLE_DOWN_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: threads.downVotesBy.includes(action.payload.userId)
              ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
              : thread.downVotesBy.concat([action.payload.userId]),
          };
        }
        return thread;
      });

    case ActionType.NEUTRALIZE_VOTE_THREAD:
      return threads.map((thread) => {
        if (threads.id === action.payload.threadId) {
          return {
            ...thread,
            neutralizeVotes: thread.neutralizeVotes.includes(action.payload.id)
              ? threads.filter((id) => id !== action.payload.userId)
              : thread.neutralizeVotes.concat([action.payload.userId]),
          };
        }
        return thread;
      });

    default:
      return threads;
  }
}

export default threadsReducer;
