import { createHashRouter as createRouter } from 'react-router-dom';
import Routes from './Routes';
import StartPage from '../../pages/StartPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Authenticated from '../../components/hocs/Authenticated';
import TestPage from '../../dev/TestPage';
import QuizPage from '../../dev/QuizPage';
import HomePage from '../../pages/HomePage';
import OnlyPublic from '../../components/hocs/OnlyPublic';
import HomeLayout from '../../components/layouts/HomeLayout';
import ExamsHistoryPage from '../../pages/ExamsHistoryPage/ExamsHistoryPage';
import SettingsPage from '../../pages/SettingsPage';

const router = createRouter([
  {
    path: Routes.START,
    element: (
      <OnlyPublic>
        <StartPage />
      </OnlyPublic>
    ),
  },
  {
    path: Routes.LOGIN,
    element: (
      <OnlyPublic>
        <LoginPage role="teacher" />
      </OnlyPublic>
    ),
  },
  {
    path: Routes.JOIN,
    element: (
      <OnlyPublic>
        <LoginPage role="student" />
      </OnlyPublic>
    ),
  },
  {
    path: Routes.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: Routes.HOME,
    element: (
      <Authenticated>
        <HomePage />
      </Authenticated>
    ),
  },
  {
    path: 'test',
    element: (
      <Authenticated>
        <TestPage />
      </Authenticated>
    ),
  },
  {
    path: 'quiz',
    element: (
      <Authenticated>
        <QuizPage />
      </Authenticated>
    ),
  },
  {
    path: Routes.EXAMS_HISTORY,
    element: (
      <Authenticated>
        <ExamsHistoryPage />
      </Authenticated>
    ),
  },
  {
    path: Routes.CREATE_TEST,
    element: (
      <Authenticated>
        <HomeLayout>Create test page</HomeLayout>
      </Authenticated>
    ),
  },
  {
    path: Routes.TESTS_LIBRARY,
    element: (
      <Authenticated>
        <HomeLayout>Tests library page</HomeLayout>
      </Authenticated>
    ),
  },
  {
    path: Routes.SETTINGS,
    element: (
      <Authenticated>
        <SettingsPage />
      </Authenticated>
    ),
  },
]);

export default router;
