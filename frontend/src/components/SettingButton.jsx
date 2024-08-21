function SettingButton({ handleClick, label, isSelected }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`py-2 px-4 rounded-lg ${
        isSelected ? 'bg-[#0074fc] text-white' : 'bg-gray-700 text-gray-300'
      }`}
    >
      {label}
    </button>
  );
}

export default SettingButton;
