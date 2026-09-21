
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [resultColor, setResultColor] = useState("text-slate-500");

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter weight and height");
      return;
    }

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (weightValue <= 0 || heightValue <= 0) {
      alert("Weight and height must be greater than 0");
      return;
    }

    const bmiValue =
      (weightValue / (heightValue * heightValue)) * 10000;

    const finalBMI = bmiValue.toFixed(1);

    let category = "";
    let color = "";

    if (bmiValue < 18.5) {
      category = "Underweight";
      color = "text-yellow-500";
    } else if (bmiValue < 25) {
      category = "Healthy Weight";
      color = "text-green-600";
    } else if (bmiValue < 30) {
      category = "Overweight";
      color = "text-orange-500";
    } else {
      category = "Obesity";
      color = "text-red-600";
    }

    setBmi(finalBMI);
    setMessage(category);
    setResultColor(color);
  };

  const reloadCalculator = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
    setResultColor("text-slate-500");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            BMI Calculator
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Calculate your Body Mass Index
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Weight
            </label>

            <div className="relative">
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                className="w-full h-12 rounded-lg border border-slate-300 px-4 pr-14 text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                kg
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Height
            </label>

            <div className="relative">
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                className="w-full h-12 rounded-lg border border-slate-300 px-4 pr-16 text-slate-800 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500">
                cm
              </span>
            </div>
          </div>

          <button
            onClick={calculateBMI}
            className="w-full h-12 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 active:scale-[0.98] transition cursor-pointer"
          >
            Calculate BMI
          </button>

          <button
            onClick={reloadCalculator}
            className="w-full h-12 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 active:scale-[0.98] transition cursor-pointer"
          >
            Reload
          </button>
        </div>

        <div className="border-t border-slate-200 my-7"></div>

        <div className="text-center">
          <p className="text-sm text-slate-500">
            Your BMI is
          </p>

          <h2 className={`text-5xl font-bold mt-2 ${resultColor}`}>
            {bmi || "0.0"}
          </h2>

          <p className="text-sm text-slate-500 mt-5">
            You are:
          </p>

          <p className={`text-xl font-bold mt-1 ${resultColor}`}>
            {message || "—"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

