export default function ButtonComponent({ onClick, color, title }) {
  return (
    <>
      <button
        onClick={() => onClick()}
        className={`${
          color ? color : "bg-blue-600"
        } text-white px-3 rounded-md py-2`}
      >
        {title}
      </button>
      <div></div>
    </>
  );
}
export function ButtonSecondary() {
  return (
    <button className="bg-gray-500 text-white px-3 rounded-md py-2">
      Secondary
    </button>
  );
}
