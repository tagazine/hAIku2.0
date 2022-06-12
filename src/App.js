import HaikuRefresh from "./HaikuRefresh";
import "./App.css";

function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <HaikuRefresh />
      <div>
        <button id="button" onClick={refreshPage}>
          Click for New Haiku
        </button>
      </div>
    </div>
  );
}

export default App;
