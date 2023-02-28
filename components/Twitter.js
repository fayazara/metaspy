/* eslint-disable @next/next/no-img-element */
import PreviewContainer from "./PreviewContainer";

export default function Twitter(props) {
  return (
    <section>
      <div className="bg-slate-50 px-6 py-2 mb-4">
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.23em"
            height="1em"
            viewBox="0 0 256 209"
          >
            <path
              fill="#55acee"
              d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
            ></path>
          </svg>
          <p className="text-lg font-medium">Twitter</p>
        </div>
      </div>
      <ul className="overflow-x-auto flex flex-nowrap px-4 space-x-4">
        <PreviewContainer label="Laptop, Desktop">
          <div className="max-w-3xl">
            <div className="rounded-3xl overflow-hidden border border-[#CFD9DE] cursor-pointer">
              <img src={props.image} alt={props.title} />
              <div className="p-4 border-t border-[#CFD9DE]">
                <p className="text-[#536471] text-[15px]">{props.url}</p>
                <p className="text-[#0F1419] text-[15px] leading-5 truncate">
                  {props.title}
                </p>
                <p className="text-[#536471] text-[15px] line-clamp-2">
                  {props.description}
                </p>
              </div>
            </div>
          </div>
        </PreviewContainer>
        <PreviewContainer label="Mobiles (Large Summary Card)">
          <div className="max-w-sm">
            <div className="rounded-3xl overflow-hidden border border-[#CFD9DE] cursor-pointer">
              <img
                src={props.image}
                alt={props.title}
                className="aspect-video"
              />
              <div className="p-4 border-t border-[#CFD9DE]">
                <p className="text-[#536471] text-[15px]">{props.url}</p>
                <p className="text-[#0F1419] text-[15px] leading-5 truncate">
                  {props.title}
                </p>
              </div>
            </div>
          </div>
        </PreviewContainer>
        <PreviewContainer label="Laptop, Desktop (Small Summary Card)">
          <div className="max-w-xl">
            <div className="rounded-2xl overflow-hidden border border-[#CFD9DE] cursor-pointer flex">
              <img
                src={props.image}
                alt={props.title}
                className="aspect-square h-32 w-32 object-cover"
              />
              <div className="p-4 border-l border-[#CFD9DE]">
                <p className="text-[#536471] text-[15px]">{props.url}</p>
                <p className="text-[#0F1419] text-[15px] leading-5 truncate">
                  {props.title}
                </p>
                <p className="text-[#536471] text-[15px] line-clamp-2">
                  {props.description}
                </p>
              </div>
            </div>
          </div>
        </PreviewContainer>
        <PreviewContainer label="Mobiles (Large Card)">
          <div className="max-w-sm">
            <div className="rounded-2xl overflow-hidden border border-[#CFD9DE] cursor-pointer flex">
              <img
                src={props.image}
                alt={props.title}
                className="aspect-square h-24 w-24 object-cover"
              />
              <div className="p-4 border-l border-[#CFD9DE] max-w-max">
                <p className="text-[#536471] text-xs">{props.url}</p>
                <p className="text-[#0F1419] text-[15px] leading-5 text-sm">
                  {props.title}
                </p>
              </div>
            </div>
          </div>
        </PreviewContainer>
      </ul>
    </section>
  );
}
