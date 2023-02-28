export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-black rounded flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8.379 4.5c-.49 0-.935.287-1.138.733L6.183 7.56a.75.75 0 1 1-1.366-.62l1.058-2.328A2.75 2.75 0 0 1 8.38 3h7.243a2.75 2.75 0 0 1 2.503 1.612l1.058 2.326a.75.75 0 1 1-1.366.621L16.76 5.233a1.25 1.25 0 0 0-1.137-.733H8.379Zm-1.879 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm-4.5 3a4.5 4.5 0 0 1 8.973-.5h2.055a4.5 4.5 0 1 1 .084 1.5h-2.223A4.502 4.502 0 0 1 2 16.5Zm15.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM2.934 10.973c5.13-1.297 13.003-1.297 18.132 0a.75.75 0 1 0 .368-1.454c-5.37-1.359-13.497-1.359-18.868 0a.75.75 0 1 0 .368 1.454Z"
                ></path>
              </svg>
            </div>
            <p className="font-bold text-lg">Meta Spy</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
