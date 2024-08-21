function PrimaryButton({ href, label }) {
  return (
    <button
      type="button"
      className="bg-[#0074fc] hover:bg-[#0051ad] text-white py-2 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 mt-6"
    >
      <a href={href}>{label}</a>
    </button>
  );
}

export default PrimaryButton;
