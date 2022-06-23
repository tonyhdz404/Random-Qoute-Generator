import { useEffect } from "react";
import { useState } from "react";
import { VscRefresh, VscTwitter } from "react-icons/vsc";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [qoute, setQoute] = useState({});
  async function fetchData() {
    setIsLoading(true);
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQoute(data);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <VscRefresh className="loading__icon" />
      </div>
    );
  }
  return (
    <div id="quote-box">
      <p id="text">{qoute.content}</p>
      <span id="author">- {qoute.author}</span>
      <div className="button-wrapper">
        <button id="new-quote" type="button" onClick={fetchData}>
          New qoute
        </button>
        <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank">
          <VscTwitter className="icon" />
        </a>
      </div>
    </div>
  );
}

export default App;
