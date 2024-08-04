import iconUp from "../assets/icons/arrow-up.svg";

const Prompt = () => {
  const onInputResize = (e: React.SyntheticEvent) => {
    const curTarget = e.target as HTMLTextAreaElement;
    curTarget.style.height = "40px";
    curTarget.style.height = curTarget.scrollHeight + "px";
  };
  return (
    <div className="min-w-full bg-slate-100 rounded-lg flex items-center box-content border">
      <textarea
        name="prompt"
        id="prompt-text"
        className={`w-full flex items-center p-3 bg-transparent resize-none overflow-hidden`}
        placeholder="Enter prompt here"
        onChange={onInputResize}
        rows={1}
      ></textarea>
      <button className="bg-transparent">
        <img className="h-10 w-10 mr-2" src={iconUp} alt="send prompt" />
      </button>
    </div>
  );
};

export default Prompt;
