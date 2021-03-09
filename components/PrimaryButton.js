const PrimaryButton = ({ children }) => {
  return (
    <button
      type="button"
      className="bg-green-400 px-8 py-2 text-black border border-black shadow-offset-black hover:bg-green-500"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
