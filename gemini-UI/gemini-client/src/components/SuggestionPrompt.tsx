interface SuggestionBoxProps {
  content: string;
  handleClick: () => void;
  className?: string;
}
const SuggestionPrompt = ({
  content,
  handleClick,
  className = "",
}: SuggestionBoxProps) => {
  return (
    <button
      className={`p-4 text-left flex-1 flex rounded-md hover:bg-slate-700 hover:text-white ${className}`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default SuggestionPrompt;
