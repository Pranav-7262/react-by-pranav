import { useEffect, useRef, useState } from "react";
import { API_URL } from "../../ai-helper/constants";
import QuestionAnswer from "../../ai-components/QuestionAnswer";
import RecentSearch from "../../ai-components/RecentSearch";

function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);
  const [recentHistory, setRecentHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );
  const [selectedHistory, setSelectedHistory] = useState("");
  const scrollToAns = useRef();
  const [loader, setLoader] = useState(false);

  const askQuestion = async () => {
    if (!question && !selectedHistory) return;

    // --- Save question to history ---
    if (question) {
      let history = JSON.parse(localStorage.getItem("history")) || [];
      history = history.slice(0, 19);
      history = [question, ...history];
      history = history.map(
        (item) => item.charAt(0).toUpperCase() + item.slice(1).trim()
      );
      history = [...new Set(history)];
      localStorage.setItem("history", JSON.stringify(history));
      setRecentHistory(history);
    }

    const payloadData = question ? question : selectedHistory;
    const payload = {
      contents: [{ parts: [{ text: payloadData }] }],
    };

    setLoader(true);

    try {
      let res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("API Error:", res.status, errorText);

        let fallbackMsg =
          res.status === 429
            ? "⚠️ Too many requests. Please wait and try again."
            : "❌ Failed to fetch response from AI.";

        setResult((prev) => [
          ...prev,
          { type: "q", text: payloadData },
          { type: "a", text: [fallbackMsg] },
        ]);
        setLoader(false);
        setQuestion("");
        return;
      }

      let response = await res.json();

      if (!response.candidates || !response.candidates[0]) {
        console.error("Unexpected response:", response);
        setResult((prev) => [
          ...prev,
          { type: "q", text: payloadData },
          {
            type: "a",
            text: ["🤔 No valid answer received. Try again later."],
          },
        ]);
        setLoader(false);
        setQuestion("");
        return;
      }

      let dataString = response.candidates[0].content.parts[0].text || "";
      dataString = dataString.split("* ").map((item) => item.trim());

      setResult((prev) => [
        ...prev,
        { type: "q", text: payloadData },
        { type: "a", text: dataString },
      ]);

      setQuestion("");

      setTimeout(() => {
        if (scrollToAns.current) {
          scrollToAns.current.scrollTop = scrollToAns.current.scrollHeight;
        }
      }, 500);
    } catch (err) {
      console.error("Fetch failed:", err);
      setResult((prev) => [
        ...prev,
        { type: "q", text: payloadData },
        { type: "a", text: ["🚨 Network error. Please try again."] },
      ]);
    } finally {
      setLoader(false);
    }
  };

  const isEnter = (event) => {
    if (event.key === "Enter") {
      askQuestion();
    }
  };

  useEffect(() => {
    if (selectedHistory) askQuestion();
  }, [selectedHistory]);

  return (
    <>
      <div className="grid grid-cols-5 h-full text-center md:grid-cols-5 ">
        <RecentSearch
          recentHistory={recentHistory}
          setRecentHistory={setRecentHistory}
          setSelectedHistory={setSelectedHistory}
        />

        <div className="col-span-4 p-10 ">
          <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-700 py-1">
            Curious about something green? Just ask
          </h1>

          {loader && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}

          <div ref={scrollToAns} className="container h-110 overflow-scroll">
            <div className="text-black p-1">
              <ul>
                {result.map((item, index) => (
                  <QuestionAnswer key={index} item={item} index={index} />
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white w-1/2 text-black m-auto rounded-3xl p-1 pr-5 border border-zinc-300 flex h-10 items-center md:h-20 justify-between shadow-sm">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={isEnter}
              className="w-full h-full p-2 outline-none text-black md:text-xl bg-white rounded-2xl placeholder-gray-500"
              type="text"
              placeholder="Ask me anything"
            />
            <button onClick={askQuestion}>ask</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
