import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Layout = lazy(() => import('../layout'))
const NotFound = lazy(() => import('../../pages/notfound'))
const Home = lazy(() => import('../../pages/home'))
const Task = lazy(() => import('../../pages/task'))
const CreateTask = lazy(() => import('../../pages/task/components/Create'))
const Auth = lazy(() => import('../../pages/auth'))
const Surveys = lazy(() => import('../../pages/surveys'))
const Adiccion = lazy(() => import('../../pages/surveys/components/Preferences'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='home' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='tasks' element={<Task />} />
            <Route path='tasks/create' element={<CreateTask />} />
            <Route path='surveys' element={<Surveys />} />
            <Route path='surveys/adiccion' element={<Adiccion />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
