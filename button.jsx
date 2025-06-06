
export function Button({ children, className, onClick, variant }) {
  return (
    <button
      className={`bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
