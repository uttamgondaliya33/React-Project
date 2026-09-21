
function Loading() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="w-10 h-10 mx-auto border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        <p className="text-slate-600 font-medium mt-4">
          Loading weather...
        </p>

      </div>
    </div>
  );
}

export default Loading;

