/* eslint-disable @next/next/no-img-element */
import PreviewContainer from "./PreviewContainer";

export default function Facebook(props) {
  return (
    <section>
      <div className="bg-slate-50 px-6 py-2">
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <path
              fill="#1877F2"
              d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
            ></path>
            <path
              fill="#FFF"
              d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
            ></path>
          </svg>
          <p className="text-lg font-medium">Facebook</p>
        </div>
      </div>
      <ul className="overflow-x-auto flex flex-nowrap px-4 space-x-4 bg-[#F0F2F5] py-4">
        <PreviewContainer label="Laptop, Desktop">
          <div className="max-w-3xl bg-white rounded-lg fb-shadow overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://pbs.twimg.com/profile_images/1605861798024212481/t9ZM7Z3f_400x400.jpg"
                    alt="Profile Pic"
                    className="h-10 w-10 rounded-full border"
                  />
                  <div>
                    <p className="font-medium">Fayaz Ahmed</p>
                    <div className="flex items-center space-x-1">
                      <p className="text-xs text-gray-500">2h</p>
                      <span>&middot;</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-slate-500"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          d="M7 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm7.5 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175a6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755a4.502 4.502 0 0 1 5.874 2.636a.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-slate-800"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="text-[#216FDB] text-[15px] font-normal mt-2">
                {props.fullUrl}
              </p>
            </div>
            <img src={props.image} alt={props.title} className="border-y" />
            <div className="bg-[#F0F2F5] p-4 relative">
              <div className="h-8 w-8 rounded-full border bg-white absolute right-4 flex items-center justify-center -top-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-800"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.839 17.525c-.006.002-.559.186-1.039.186c-.265 0-.372-.055-.406-.079c-.168-.117-.48-.336.054-1.4l1-1.994c.593-1.184.681-2.329.245-3.225c-.356-.733-1.039-1.236-1.92-1.416a4.776 4.776 0 0 0-.958-.097c-1.849 0-3.094 1.08-3.146 1.126a.5.5 0 0 0 .493.848c.005-.002.559-.187 1.039-.187c.263 0 .369.055.402.078c.169.118.482.34-.051 1.402l-1 1.995c-.594 1.185-.681 2.33-.245 3.225c.356.733 1.038 1.236 1.921 1.416c.314.063.636.097.954.097c1.85 0 3.096-1.08 3.148-1.126a.5.5 0 0 0-.491-.849z"
                  ></path>
                  <circle
                    cx="13"
                    cy="6.001"
                    r="2.5"
                    fill="currentColor"
                  ></circle>
                </svg>
              </div>
              <p className="text-[#65676B] capitalize text-sm font-light">
                {props.url.toUpperCase()}
              </p>
              <p className="text-[#050505] truncate">{props.title}</p>
              <p className="text-[#65676B] text-[.9375rem] truncate">
                {props.description}
              </p>
            </div>
            <div className="border-t px-4 py-2">
              <div className="grid grid-cols-3 border-b border-slate-300 pb-1">
                <div className="flex items-center justify-center h-10 hover:bg-slate-100 rounded-lg">
                  <div className="flex items-center justify-center space-x-2 text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V3a.75.75 0 0 1 .75-.75A2.25 2.25 0 0 1 16.5 4.5c0 1.152-.26 2.243-.723 3.218c-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715c.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48a4.53 4.53 0 0 1-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602c.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665a8.97 8.97 0 0 0 .654 3.375Z"
                      ></path>
                    </svg>
                    <p>Like</p>
                  </div>
                </div>
                <div className="flex items-center justify-center h-10 hover:bg-slate-100 rounded-lg">
                  <div className="flex items-center justify-center space-x-2 text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227c1.068.157 2.148.279 3.238.364c.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67c1.09-.086 2.17-.208 3.238-.365c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      ></path>
                    </svg>
                    <p>Comment</p>
                  </div>
                </div>
                <div className="flex items-center justify-center h-10 hover:bg-slate-100 rounded-lg">
                  <div className="flex items-center justify-center space-x-2 text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m21.707 11.293l-8-8A1 1 0 0 0 12 4v3.545A11.015 11.015 0 0 0 2 18.5V20a1 1 0 0 0 1.784.62a11.456 11.456 0 0 1 7.887-4.049c.05-.006.175-.016.329-.026V20a1 1 0 0 0 1.707.707l8-8a1 1 0 0 0 0-1.414ZM14 17.586V15.5a1 1 0 0 0-1-1c-.255 0-1.296.05-1.562.085a14.005 14.005 0 0 0-7.386 2.948A9.013 9.013 0 0 1 13 9.5a1 1 0 0 0 1-1V6.414L19.586 12Z"
                      ></path>
                    </svg>
                    <p>Share</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 my-2">
                <img
                  src="https://pbs.twimg.com/profile_images/1605861798024212481/t9ZM7Z3f_400x400.jpg"
                  alt="Profile Pic"
                  className="h-8 w-8 rounded-full border"
                />
                <div className="flex-1 rounded-full bg-slate-100 flex items-center h-8 px-3 text-slate-500">
                  <p>Write a comment...</p>
                </div>
              </div>
            </div>
          </div>
        </PreviewContainer>
        <PreviewContainer label="Mobile Web">
          <div className="max-w-lg bg-white">
            <div className="h-1 bg-[#BCC0C4]"></div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <img
                  src="https://pbs.twimg.com/profile_images/1605861798024212481/t9ZM7Z3f_400x400.jpg"
                  alt="Profile Pic"
                  className="h-10 w-10 rounded-full border"
                />
                <div>
                  <p className="font-medium">Fayaz Ahmed</p>
                  <div className="flex items-center space-x-1">
                    <p className="text-xs text-gray-500">2h</p>
                    <span>&middot;</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-slate-500"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M7 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm7.5 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175a6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755a4.502 4.502 0 0 1 5.874 2.636a.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-slate-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="h-1 bg-[#BCC0C4]"></div>
          </div>
        </PreviewContainer>
      </ul>
    </section>
  );
}
