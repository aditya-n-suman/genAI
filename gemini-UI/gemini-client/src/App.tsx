import "./App.css";
import Prompt from "./components/Prompt";
import SuggestionPrompt from "./components/SuggestionPrompt";
import { suggestions } from "./utils/constants";

function App() {
  return (
    <main className="flex-1 max-w-4xl p-4 mx-auto flex flex-col min-h-screen">
      <section className="flex-1 flex flex-col justify-center items-start gap-3">
        <h2 className="text-xl font-bold">How can I help you today?</h2>
        <div className="flex gap-6 flex-col md:flex-row">
          {suggestions.map((suggestion, index) => (
            <SuggestionPrompt
              key={index}
              handleClick={() => console.log("clicked", index)}
              content={suggestion}
            />
          ))}
        </div>
      </section>
      <Prompt />
    </main>
  );
}

export default App;
