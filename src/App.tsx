import BoardList from './components/BoardList/BoardList'
import ListsContainer from './components/ListsContainer/ListsContainer'
import TaskModal from './components/TaskModal/TaskModal'
import LoggerModal from './components/LoggerModal/LoggerModal'
import { appContainer, boardArea, contentArea } from './App.css'

function App() {
  return (
    <div className={appContainer}>
      <aside className={boardArea}>
        <BoardList />
      </aside>
      <main className={contentArea}>
        <ListsContainer />
      </main>
      <TaskModal />
      <LoggerModal />
    </div>
  )
}

export default App
