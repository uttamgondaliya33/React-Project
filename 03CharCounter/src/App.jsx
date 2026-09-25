
import { useState } from "react";

function App() {
 
  const [text, setText] = useState("");

  const characters = text.length;

  const words =
    text.trim() === ""
      ? 0
      : text.trim().split(/\s+/).length;

  const sentences =
    text.trim() === ""
      ? 0
      : text.split(/[.!?]+/).filter(Boolean).length;

  const lines =
    text === ""
      ? 0
      : text.split("\n").length;

  const readingTime =
    words === 0
      ? 0
      : Math.ceil(words / 200);

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="min-h-screen bg-[#f6f7fb] px-4 py-10 text-[#171923] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        <header className="mb-7 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <span className="mb-3 inline-block rounded-full bg-[#e9e7ff] px-3 py-1.5 text-[11px] font-bold tracking-[1px] text-[#5b4de8]">
              TEXT TOOL
            </span>

            <h1 className="text-3xl font-bold tracking-[-1.5px] sm:text-4xl">
              Word & Character Counter
            </h1>

            <p className="mt-2 text-sm text-[#747886]">
              Write your text and track everything in real time.
            </p>
          </div>

          {/* Clear Button */}
          <button
            onClick={handleClear}
            className="w-full rounded-xl border border-[#dedfe6] bg-white px-5 py-2.5 text-sm font-semibold text-[#444754] transition hover:bg-[#f1f1f5] sm:w-auto"
          >
            Clear
          </button>

        </header>


        <main className="overflow-hidden rounded-[18px] border border-[#e5e6eb] bg-white shadow-[0_10px_35px_rgba(30,35,50,0.06)]">

  
          <div className="flex h-14 items-center justify-between border-b border-[#eeeeF2] px-5">

            <span className="text-sm font-semibold text-[#424550]">
              Your Text
            </span>

            <span className="flex items-center gap-2 text-xs font-medium text-[#25a269]">

              <span className="h-2 w-2 rounded-full bg-[#2bc277] shadow-[0_0_0_4px_#e6f8ef]" />

              Live

            </span>

          </div>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing something..."
            className="h-82.5 w-full resize-y border-none bg-white p-6 text-[17px] leading-[1.8] text-[#252832] outline-none placeholder:text-[#b1b4be]"
          />

          <div className="flex flex-col justify-between gap-2 border-t border-[#eeeeF2] bg-[#fafafd] px-5 py-3 text-xs text-[#9295a0] sm:flex-row">

            <span>
              Characters and words update automatically
            </span>

            <span>
              {characters} characters
            </span>

          </div>

        </main>

        <section className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="flex items-center gap-4 rounded-[15px] border border-[#e5e6eb] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(30,35,50,0.06)]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0efff] text-[17px] font-bold text-[#5b4de8]">
              Aa
            </div>

            <div>
              <p className="text-xs text-[#858894]">
                Characters
              </p>

              <h2 className="text-[25px] font-bold tracking-[-0.5px]">
                {characters}
              </h2>
            </div>

          </div>

          <div className="flex items-center gap-4 rounded-[15px] border border-[#e5e6eb] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(30,35,50,0.06)]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0efff] text-[17px] font-bold text-[#5b4de8]">
              W
            </div>

            <div>
              <p className="text-xs text-[#858894]">
                Words
              </p>

              <h2 className="text-[25px] font-bold tracking-[-0.5px]">
                {words}
              </h2>
            </div>

          </div>


          <div className="flex items-center gap-4 rounded-[15px] border border-[#e5e6eb] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(30,35,50,0.06)]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0efff] text-[17px] font-bold text-[#5b4de8]">
              ¶
            </div>

            <div>
              <p className="text-xs text-[#858894]">
                Sentences
              </p>

              <h2 className="text-[25px] font-bold tracking-[-0.5px]">
                {sentences}
              </h2>
            </div>

          </div>


          <div className="flex items-center gap-4 rounded-[15px] border border-[#e5e6eb] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(30,35,50,0.06)]">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0efff] text-[17px] font-bold text-[#5b4de8]">
              ↵
            </div>

            <div>
              <p className="text-xs text-[#858894]">
                Lines
              </p>

              <h2 className="text-[25px] font-bold tracking-[-0.5px]">
                {lines}
              </h2>
            </div>

          </div>

        </section>


        <section className="mt-5 flex flex-col justify-between gap-5 rounded-[15px] bg-[#171923] px-6 py-5 text-white sm:flex-row sm:items-center">

          <div>

            <h3 className="text-[15px] font-semibold">
              Writing Statistics
            </h3>

            <p className="mt-1 text-xs text-[#a9acb7]">
              Keep an eye on your writing as you type.
            </p>

          </div>


          <div className="flex flex-col sm:items-end">

            <span className="text-xs text-[#a9acb7]">
              Estimated reading time
            </span>

            <strong className="mt-1 text-base">
              {readingTime} min
            </strong>

          </div>

        </section>

        <footer className="mt-7 text-center text-xs text-[#a1a4ae]">
          Built with React · Simple · Fast · Real-time
        </footer>

      </div>
    </div>
  );
}

export default App;
