import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Header />
      </header>

      <main className="app__main">
        <Main />
      </main>
    </div>
  );
}

export default App;
