import "./App.css";
import Prompt from "./components/Prompt";
import Prompt2 from "./components/Prompt2";

function App() {
  return (
    <main className="min-w-80 max-w-4xl p-4 mx-auto flex flex-col min-h-screen">
      <section className="flex-1"></section>
      <Prompt2 />
    </main>
  );
}

export default App;
