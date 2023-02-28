import { useState } from "react";

export default function Url(props) {
  const [url, setUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUrlSubmit(url);
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <div className="relative rounded-md border bg-slate-50 border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 flex-1">
            <label
              htmlFor="URL"
              className="absolute -top-2 left-2 -mt-px inline-block bg-slate-50 px-1 text-xs font-medium text-gray-900"
            >
              URL
            </label>
            <input
              type="url"
              name="url"
              id="url"
              required
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm bg-transparent"
              placeholder="Enter a URL to preview"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            className={`${
              props.loading ? "opacity-40" : ""
            } rounded-md bg-slate-900 hover:bg-slate-800 text-white px-6 h-[42px] sm:h-[38px] flex items-center focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-offset-1`}
            disabled={props.loading}
          >
            <span className="hidden sm:block mr-2">Submit</span>
            {props.loading ? (
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="m2.721 2.051l15.355 7.566a.5.5 0 0 1 0 .897L2.72 18.08a.5.5 0 0 1-.704-.576l1.521-5.745a.5.5 0 0 1 .401-.365l6.881-1.147a.25.25 0 0 0 .188-.146l.018-.06a.25.25 0 0 0-.15-.272l-.056-.016L3.9 8.6a.5.5 0 0 1-.4-.365L2.016 2.628a.5.5 0 0 1 .704-.577Z"
                ></path>
              </svg>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
