
import './App.css';
import MainMenuHeader from './components/MainMenuHeader';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MainMenuHeader />
      </header>
      <TodoContainer />
    </div>
  );
}

export default App;
