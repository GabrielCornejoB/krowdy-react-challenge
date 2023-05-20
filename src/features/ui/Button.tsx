interface Props {
  text: string;
  isMainColor: boolean;
  handleSubmit?: () => void;
}

const Button = ({ text, isMainColor, handleSubmit }: Props) => {
  return (
    <button
      className={`cursor-pointer rounded-md px-4 py-2 font-bold tracking-wider text-slate-200 transition-all ${
        isMainColor
          ? "bg-sky-600 hover:bg-sky-700"
          : "bg-slate-500 hover:bg-slate-700"
      }`}
      onClick={handleSubmit}
    >
      {text}
    </button>
  );
};
export default Button;
