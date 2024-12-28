import { cardData } from "@/components/Data/Data";
import Card from "@/components/Card/Card";
import Comments from "@/components/Comments/Comments";
export default function Blogs() {
  return (
    <main>
      <div className="bg-slate-50 lg:bg-transparent w-full h-44 lg:h-56 my-10 overflow-hidden rounded-lg
       ">
        <p className="text-center text-2xl font-bold my-4 text-black
          md:text-3xl md:tracking-wider lg:leading-loose lg:text-4xl lg:pb-11">
          Welcome To
          <br />
          <span className="text-4xl border-b-2 text-black bg-slate-40 border-black">
            Tech Blogs
          </span>
          <br />
          The Blogs Website Based On Technology.</p>
      </div>
      <div className="flex flex-col">
        {
          cardData.map((item,index) =>
          (
            <Card blogno={item.blogno} blogName={item.blogName}
            slug={item.slug} description={item.description} imageType={item.imageType} key={index}/>
          )
          )
        }
      </div>
      <div className="">
        <Comments />
      </div>
    </main>

  );
}
