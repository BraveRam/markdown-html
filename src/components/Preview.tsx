import { useStateStore } from "@/store/TextStore";
import { Button } from "./ui/button";
import { Clipboard } from "lucide-react";
import { toast } from "sonner";

const Preview = () => {
  const { mode, resultText } = useStateStore();

  const handleCopy = () => {
    navigator.clipboard.writeText(resultText);
    toast.success("Copied to clipboard");
  };

  if (mode === "html") {
    return (
      <div className="relative">
        <Button
          variant={"ghost"}
          size={"icon"}
          className="absolute top-2 right-2"
          onClick={handleCopy}
        >
          <Clipboard className="h-4 w-4" />
        </Button>
        <div
          className="w-full min-h-[200px] h-full p-4 border rounded-md overflow-auto bg-white dark:bg-gray-900"
          aria-live="polite"
          dangerouslySetInnerHTML={{ __html: resultText }}
        />
      </div>
    );
  }
  return (
    <div className="relative h-1/2 w-full p-4 border">
      <Button
        variant={"ghost"}
        size={"icon"}
        className="absolute top-2 right-2"
        onClick={handleCopy}
      >
        <Clipboard className="h-4 w-4" />
      </Button>
      {resultText}
    </div>
  );
};

export default Preview;
