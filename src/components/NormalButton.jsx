
function NormalButton({ onClick, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border-2 text-[#D4AF37] border-[#D4AF37] hover:bg-[#D4AF37]/10 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 font-semibold py-2 px-4 rounded transition-colors duration-200 cursor-pointer ${className}`}
      style={{ fontFamily: "'Rosarivo', serif" }}
    >
      {children}
    </button>
  );
}

export default NormalButton;