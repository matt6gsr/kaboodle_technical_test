export default function Loading() {
  return (
    <div className="grid h-16 place-items-center mt-16">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin"
      ></div>
    </div>
  );
}
