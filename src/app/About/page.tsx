import Image from "next/image";

export default function About() {
  return (
    <div className="main h-full w-full">
      <section>
        <div className="content w-full h-[90%] xl:h-screen flex flex-col sm:flex-row">
          <div className="left h-full w-full">
            <h1
              className="text-4xl p-2 mt-10 mb-4 font-sans text-center font-bold bg-slate-100
             tracking-wide hover:scale-105 hover:text-white hover:bg-gradient-to-r hover:from-red-400 hover:to-red-600
             hover:underline transition-all duration-500 ease-in-out hover:uppercase sm:text-start sm:p-11 sm:text-5xl
             sm:bg-teal-100 sm:leading-relaxed sm:ml-9 sm:mb-0"
            >
              A-O-A.
              <br />
              <span className="p-0 sm:p-9 hover:rotate-6 transition-transform duration-500 ease-in-out">
                I Am
              </span>
              <br />
              <span className="pt-10 hover:scale-110 hover:text-yellow-300 transition-transform duration-500 ease-in-out">
                M.Hamza Zai
              </span>
            </h1>

            <div
              className="right mt-10 font-sans text-2xl p-2 text-center capitalize leading-relaxed sm:text-start sm:p-10
              sm:mt-0 sm:leading-loose"
            >
              <p className="hover:text-gray-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
                I am a <b>Front-End developer.</b>I learned Html, CSS, and
                Typescript. And now I am learning Next.js14 from <b>GIAIC</b>
                <em>
                  {" "}
                  (Governor Initiative For Artificial Intelligence And
                  Computing).
                </em>
                <br />I also learned some <b>Frameworks</b> like &quot;Bootstrap and
                Tailwind&quot; for CSS.
                <br />
                My goal is to become a <b>Full-Stack Engineer.</b>
                <span className="block sm:hidden">
                  {" "}
                  Below is my photo:
                  <i className="ri-corner-right-down-line text-xl font-bold"></i>
                </span>
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] sm:h-[30%]">
            <Image
              src="https://images.pexels.com/photos/28733009/pexels-photo-28733009.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="My Photo"
              width={200} // Adjust according to the real image size
              height={100} // Adjust according to the real image size
              className="w-4/5 mx-auto border-x-2 border-y-4 shadow-2xl shadow-black
              border-black mb-4 sm:mt-10 md:w-[90%] xl:w-2/3 hover:scale-110 hover:rotate-3 transition-all duration-500 ease-in-out
              bg-slate-400"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
