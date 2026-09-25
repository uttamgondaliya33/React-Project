import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");

  const [interest, setInterest] = useState(0);

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  function handleClick() {
    let valid = true;

    if (num1 === "") {
      setError1("Principal amount is required");
      valid = false;
    } else {
      setError1("");
    }

    if (num2 === "") {
      setError2("Interest rate is required");
      valid = false;
    } else {
      setError2("");
    }

    if (num3 === "") {
      setError3("Tenure is required");
      valid = false;
    } else {
      setError3("");
    }

    if (!valid) {
      return;
    }

    const principal = Number(num1);
    const rate = Number(num2);
    const time = Number(num3);

    const result = (principal * rate * time) / 100;

    setInterest(result);
  }

  function handleReset() {
    setNum1("");
    setNum2("");
    setNum3("");

    setInterest(0);

    setError1("");
    setError2("");
    setError3("");
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 sm:p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Simple Interest Calculator
          </h1>

          <p className="mt-2 text-slate-500">
            Calculate your simple interest easily
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-7 text-center">
          <p className="text-sm font-medium text-slate-500">
            Simple Interest
          </p>

          <h2 className="mt-2 text-4xl font-bold text-blue-600">
            ₹ {interest.toFixed(2)}
          </h2>
        </div>

        <div className="space-y-5">

          {/* Principal */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Principal Amount
            </label>

            <input
              type="number"
              value={num1}
              onChange={(e) => {
                setNum1(e.target.value);
                setError1("");
              }}
              placeholder="Enter principal amount"
              className={`w-full rounded-xl border px-4 py-3.5 text-slate-800 outline-none transition focus:ring-4 focus:ring-blue-100 ${
                error1
                  ? "border-red-500"
                  : "border-slate-300 focus:border-blue-500"
              }`}
            />

            {error1 && (
              <p className="mt-2 text-sm text-red-500">
                {error1}
              </p>
            )}
          </div>


          {/* Interest Rate */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Interest Rate (%)
            </label>

            <input
              type="number"
              value={num2}
              onChange={(e) => {
                setNum2(e.target.value);
                setError2("");
              }}
              placeholder="Enter interest rate"
              className={`w-full rounded-xl border px-4 py-3.5 text-slate-800 outline-none transition focus:ring-4 focus:ring-blue-100 ${
                error2
                  ? "border-red-500"
                  : "border-slate-300 focus:border-blue-500"
              }`}
            />

            {error2 && (
              <p className="mt-2 text-sm text-red-500">
                {error2}
              </p>
            )}
          </div>


          {/* Tenure */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-slate-700">
              Tenure (Years)
            </label>

            <input
              type="number"
              value={num3}
              onChange={(e) => {
                setNum3(e.target.value);
                setError3("");
              }}
              placeholder="Enter tenure in years"
              className={`w-full rounded-xl border px-4 py-3.5 text-slate-800 outline-none transition focus:ring-4 focus:ring-blue-100 ${
                error3
                  ? "border-red-500"
                  : "border-slate-300 focus:border-blue-500"
              }`}
            />

            {error3 && (
              <p className="mt-2 text-sm text-red-500">
                {error3}
              </p>
            )}
          </div>


          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">

            <button
              onClick={handleClick}
              className="w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Calculate
            </button>

            <button
              onClick={handleReset}
              className="w-full rounded-xl bg-slate-200 px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-300"
            >
              Reset
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;