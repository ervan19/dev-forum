import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import ThreadList from '../components/ThreadList/ThreadList';
import asyncPopulateUsersAndThreads from '../states/shared/action';
import {
  asyncNeutralizeVoteThread,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
} from '../states/threads/action';

// import PopularTagsCategory from '../components/PopularTagsCategory/PopularTagsCategory';

export default function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVote = (id) => {
    dispatch(asyncToggleUpVoteThread(id));
    dispatch(asyncNeutralizeVoteThread(id));
  };

  const onDownVote = (id) => {
    dispatch(asyncToggleDownVoteThread(id));
    dispatch(asyncNeutralizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section>
      <div className="hero">
        {/* <PopularTagsCategory threads={threads} /> */}
        <Link to="/new" className="add-discuss-btn">
          Buat Diskusi Baru
          <HiPlus size={20} fill="white" />
        </Link>
      </div>
      <ThreadList
        threads={threadList}
        upVote={onUpVote}
        downVote={onDownVote}
      />
    </section>
  );
}
