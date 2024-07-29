import { useEffect, useRef, useState } from "react";
import iconUp from "../assets/icons/arrow-up.svg";

const Prompt = () => {
  const [innerWidth, setInnerWidth] = useState<number>();
  const [innerHeight, setInnerHeight] = useState<number>();
  const [rows, setRows] = useState(1);
  const elemRef = useRef<HTMLTextAreaElement>(null);

  const onInputResize = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const curTarget = e.target as HTMLTextAreaElement;
    

    // const calculatedHeight = curTarget.value.split("\n").length;
    // const curHeight = rows;
    // const heightFromContent =
    //   (curTarget.scrollHeight / 28);
    // );
    console.log(
      "got",
      curTarget.scrollHeight,
      curTarget.scrollLeft,
      curTarget.scrollTop,
      curTarget.scrollWidth,
      // curTarget.scrollHeight,
      // curTarget.offsetHeight,
      // rows,
      // heightFromContent,
      // curTarget.textLength,
      // curTarget.selectionStart,
      // curTarget.selectionEnd
    );
    // const finalRows = curTarget.scrollTop === 0 ? heightFromContent - 1 : heightFromContent;
    // if(heightFromContent !== rows) setRows(heightFromContent)
    // else if (finalRows !== rows) setRows(finalRows);
    if(e.key === "Backspace") {
      setRows()
    }
    if(curTarget.scrollTop && rows < 7) setRows(Math.ceil(rows + curTarget.scrollTop / 28));
    // else  if(rows < 8) {

    // }
  };

  useEffect(() => {
    setInnerWidth(elemRef.current!.clientWidth);
    setInnerHeight(elemRef.current!.scrollHeight);
  }, []);
  return (
    <div className="min-w-full bg-slate-100 rounded-lg p-3 border flex items-center">
      <textarea
        ref={elemRef}
        name="prompt"
        id="prompt-text"
        className="w-full leading-7 bg-transparent min-h-7 max-h-56 resize-none wrap"
        placeholder="Enter prompt here"
        rows={rows}
        // onInput={onInputResize}
        // onPaste={onInputResize}
        // onChange={onInputResize}
        onKeyUp={onInputResize}
      ></textarea>
      <img className="h-7" src={iconUp} alt="send prompt" />
    </div>
  );
};

export default Prompt;
