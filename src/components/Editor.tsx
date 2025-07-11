import { useStateStore } from "@/store/TextStore";

const Editor = () => {
  const { mode, text, setText } = useStateStore();

  return (
    <textarea
      placeholder={
        mode === "html" ? "Enter markdown here ..." : "Enter HTML here..."
      }
      className="w-full min-h-[200px] h-full p-4 border resize-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      aria-label={mode === "html" ? "Markdown input" : "HTML input"}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default Editor;
