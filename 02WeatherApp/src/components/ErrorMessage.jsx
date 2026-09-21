
function ErrorMessage({ message }) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-6">
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-center">
        <div className="text-3xl mb-2">
          ⚠️
        </div>

        <p className="text-red-600 font-medium">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ErrorMessage;

