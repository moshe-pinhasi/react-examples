import './App.css';

import {
  UseCallbackExample, 
  TableExample
} from './examples'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        Examples
      </header>

      <main className="app-main">
          {/* <UseCallbackExample /> */}

          <TableExample />
      </main>
    </div>
  );
}

export default App;
