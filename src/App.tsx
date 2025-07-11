import { Header } from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { ArrowRightLeft } from "lucide-react";
import { useStateStore } from "./store/TextStore";
import { Toaster } from "sonner";

function App() {
  const { switch: modeSwitch, mode } = useStateStore();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="p-4 min-h-screen flex flex-col">
        <header className="mb-2">
          <Header />
        </header>
        <div className="flex flex-col lg:flex-row gap-4 flex-1">
          <div className="w-full flex-1 flex flex-col">
            <h2 className="ml-1.5 font-extrabold text-center my-3">
              {mode === "html" ? "HTML" : "Markdown"}
            </h2>
            <Editor />
          </div>
          <div onClick={() => modeSwitch()} className="mt-3 flex items-center justify-center">
            <ArrowRightLeft className="font-extrabold cursor-pointer text-2xl" />
          </div>
          <div className="w-full flex-1 flex flex-col">
            <h2 className="ml-1.5 font-extrabold text-center my-3">
              {mode === "html" ? "Markdown" : "HTML"}
            </h2>
            <Preview />
          </div>
        </div>
        <footer className="mt-8 text-center font-extrabold">
          <h2>All rights reserved &copy; 2025</h2>
        </footer>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
