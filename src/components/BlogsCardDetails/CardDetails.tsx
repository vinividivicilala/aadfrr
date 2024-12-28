import Image from "next/image";
import { blogsCardDetailsTypes } from "../types/CardType";
import Link from "next/link";

export default function CardDetails(props: blogsCardDetailsTypes) {
  return (
    <main>
      <div className="w-full my-10 borde-4 flex flex-col h-fit">
        <div className="w-full h-fit">
          <Image
            src={props.image}
            className="rounded-md text-center md:ml-10"
            width={400}
            height={400}
            alt="blog photo"
          />
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-700 rounded-md my-4 md:text-4xl">
            Key Concepts of{" "}
            <span className="px-2 border-b-[3px] border-gray-500 rounded-l-xl text-gray-400">
              {props.blogName}
            </span>
          </h1>
          <h2
            className="text-2xl font-semibold p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start"
          >
            1. {props.firstHeading}:
          </h2>
          <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl lg:text-2xl text-start lg:p-4">
            {props.firstPara}
          </p>
          <h2
            className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start"
          >
            2. {props.secondHeading}:
          </h2>
          <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl lg:text-2xl text-start lg:p-4">
            {props.secondPara}
          </p>
          <h2
            className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start"
          >
            3. {props.thirdHeading}:
          </h2>
          <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl text-start lg:text-2xl lg:p-4">
            {props.thirdPara}
          </p>
          <h2
            className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start"
          >
            4. {props.fourthHeading}:
          </h2>
          <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl text-start lg:text-2xl lg:p-4">
            {props.fourthPara}
          </p>
          <h2
            className="text-2xl font-semibold p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg capitalize md:text-3xl md:text-start"
          >
            5. {props.fifthHeading}:
          </h2>
          <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl text-start lg:text-2xl lg:p-4">
            {props.fifthPara}
          </p>

          <div className="my-2 w-full lg:h-12">
            <Link
              href={"/Blogs"}
              className="text-2xl px-6 py-[6px] rounded-xl text-white font-sans font-[600]
                 bg-black transition-all lg:hover:bg-teal-100 lg:hover:text-black lg:hover:font-bold
                 lg:hover:scale-110 duration-200 lg:hover:border-[1px] lg:hover:border-teal-400"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
