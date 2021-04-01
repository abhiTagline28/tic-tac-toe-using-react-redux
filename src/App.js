import logo from './logo.svg';
import './App.css';
import Game from './Game';
import { Provider } from 'react-redux'
import store from './redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <Game />
      </div>
    </Provider>
  );
}
export default App;
