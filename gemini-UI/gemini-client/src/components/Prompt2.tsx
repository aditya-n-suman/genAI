import { useState } from "react";
import iconUp from "../assets/icons/arrow-up.svg";
import { countTextLines } from "../utils/jsUtils";

const Prompt2 = () => {
  const [lineCount, setLineCount] = useState(1);
  const onInputResize = (e: React.SyntheticEvent) => {
    const curTarget = e.target as HTMLTextAreaElement;
    const newlineCount = curTarget.value.split("\n").length;
    if (newlineCount > 7) setLineCount(8);
    else {
      const contentLines = countTextLines(curTarget.value, "prompt-text") -1;
      setLineCount(contentLines);
    }
  };
  return (
    <div className="min-w-full bg-slate-100 rounded-lg p-3 flex items-center box-content border">
      <textarea
        name="prompt"
        id="prompt-text"
        className={`w-full leading-7 bg-transparent resize-none wrap ${
          lineCount > 7 ? "overflow-y-auto" : "overflow-hidden"
        }`}
        placeholder="Enter prompt here"
        onChange={onInputResize}
        rows={lineCount}
      ></textarea>
      <img className="h-10 w-10" src={iconUp} alt="send prompt" />
    </div>
  );
};

export default Prompt2;
