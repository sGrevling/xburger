import './App.css';
import Menu from "./lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Menu
            shouldCloseOnClick={(e) =>
                ['button'].includes(e.target.tagName.toLowerCase())
            }
        >
          {['one', 'two', 'three', 'five'].map(x => (
              <button
                  key={x}
                  onClick={() => {
                    console.log(x);
                  }}
              >
                {x}
              </button>
          ))}
        </Menu>
      </header>
    </div>
  );
}

export default App;
