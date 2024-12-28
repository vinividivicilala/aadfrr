import cardType from "../types/CardType";
import Image from "next/image";
import Link from "next/link";

export default function Card(props: cardType) {
  return (
    <main>
      <div
        id="card"
        className="h-5/6 w-full lg:w-1/3 flex flex-col my-10 bg-gray-50
             rounded-lg mx-auto shadow-lg shadow-black lg:hover:scale-110 transition-all"
      >
        <div className="w-full h-5/6 border-b-4 rounded-lg bg-teal-950">
          <h1
            className="text-2xl px-4 font-bold py-2 bg-gray-100 rounded-lg
                     border-b-red-300 border-b-2 lg:text-3xl lg:text-center xl:rounded-none
                     "
          >
            Blog:{props.blogno}
          </h1>
          <div className="lg:p-2 xl:p-0 w-full lg:h-1/5">
            <Image
              src={props.imageType}
              alt="Blockchain"
              width={500}
              height={500}
              className="p-3 lg:p-2 rounded-2xl lg:mx-auto"
            />
          </div>
        </div>
        <div className="my-2 flex flex-col xl:px-2">
          <h1 className="capitalize text-3xl p-2 font-sans font-semibold lg:tracking-wider underline lg:text-4xl lg:font-bold xl:text-center">
            {props.blogName}:
          </h1>
          <p className="text-center capitalize font-sans text-xl tracking-widest p-1 lg:text-2xl lg:leading-loose">
            {props.description}
          </p>
          <div className="text-center my-2">
            <Link
              href={props.slug}
              className="text-center text-teal-900 hover:text-black hover:bg-white p-2
                            text-md bg-teal-200 hover:font-semibold transition-all rounded-lg
                            hover:rounded-xl lg:hover:border-[1px]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
