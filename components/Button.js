const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-400 px-8 py-2 text-black border border-black shadow-offset-black mt-3"
    >
      {children}
    </button>
  );
};

export default Button;