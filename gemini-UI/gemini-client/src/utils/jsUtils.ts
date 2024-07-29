export const countTextLines = (value: string, id: string) => {
  const textarea = document.getElementById(id)!;
  const textareaStyles = window.getComputedStyle(textarea);
  const font = `${textareaStyles.fontSize} ${textareaStyles.fontFamily}`;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  ctx.font = font;

  const parseValue = (v: string) =>
    v.endsWith("px") ? parseInt(v.slice(0, -2), 10) : 0;
  const paddingLeft = parseValue(textareaStyles.paddingLeft);
  const paddingRight = parseValue(textareaStyles.paddingRight);
  const textareaWidth =
    textarea.getBoundingClientRect().width - paddingLeft - paddingRight;

  let allLineCount = 0;
  const linesByNewline = value.split("\n");
  allLineCount += linesByNewline.length;
  linesByNewline.forEach((line) => {
    // if (line.length <= lineWidth) allLines.push(line);
    // else {
    const words = line.split(" ");
    let lineCount = 0;
    let curLine = "";
    for (let i = 0; i < words.length; i++) {
      const wordWidth = ctx.measureText(words[i] + " ").width;
      const lineWidth = ctx.measureText(curLine).width;
      if (lineWidth + wordWidth > textareaWidth) {
        lineCount++;
        curLine = words[i] + " ";
      } else {
        curLine += words[i] + " ";
      }
    }
    if (curLine.trim() !== "") {
      lineCount++;
    }

    allLineCount += lineCount;

    // let start = 0;
    // let remaining = line.length;
    // while (remaining > 0) {
    //   const child = line.substring(start, start + lineWidth);
    //   remaining -= lineWidth;
    //   start += lineWidth;
    //   allLines.push(child);
    // }
    // }
  });
  return allLineCount;
};
