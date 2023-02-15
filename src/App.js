import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/Loading/Loading';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import LeaderboardsPage from './pages/Leaderboards';
import Navigation from './components/Navigation/Navigation';
import CreateDisscussPage from './pages/CreateDiscussPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogouHandler = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }
  return (
    <>
      <Loading />
      <div className="App">
        <header>
          <Navigation authUser={authUser} logoutHandler={onLogouHandler} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
            <Route path="/new" element={<CreateDisscussPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
