import { cn } from "../../lib/utils";
import bgImg from "/AboutPages/LeadershipPage/img.webp";
import chairmanMessage from "../../Data/chairmanMessage";
import chairmanImg from "/HomePage/LeadershipSection/chairman.webp";
import { useEffect } from "react";

export default function LeadershipPage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <section className="leadership-page pb-0 ">
        {/* Header Section */}
        <section
          className={cn(
            "relative px-6 md:px-16 py-10 mb-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] md:bg-fixed bg-center shadow-xl overflow-hidden",
            "header"
          )}
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-secColor/40 z-10" />
          <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
            <h1 className="text-secColor text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg tracking-tight leading-tight drop-shadow-xl">
              Our Leadership
            </h1>
            <p className="text-white text-lg md:text-2xl max-w-2xl font-bold">
              Our leadership team brings together decades of expertise and
              strategic insight, guiding the company with integrity and
              dedication to sustainable growth.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="px-6 md:px-16 py-10 max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secColor">
            About Chairman
          </h2>
          <p className="text-primary font-medium text-lg leading-relaxed">
            <span className="block my-2">
              <span className="font-bold">{chairmanMessage.author}</span> – The
              CEO of this company. GSP is moving forward under his inspiring
              leadership and vision.
            </span>
            <span className="block my-2">
              With a deep sense of professionalism and strategic insight, he
              consistently drives the company towards success and innovation.
            </span>
          </p>
        </section>

        {/* Message Section */}
        <section className="px-6 md:px-16 py-16 ">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 items-center rounded-2xl p-6 md:p-10 shadow-lg shadow-secColor">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  loading="lazy"
                  src={chairmanImg}
                  alt="Company Owner"
                  className={cn(
                    "shadow-xl w-[400px] h-[500px] object-cover object-top transform ",
                    "transition duration-500 ease-in-out group-hover:scale-110 "
                  )}
                />
                <div
                  className={cn(
                    "overlay absolute inset-0 bg-secColor/30 rounded-2xl z-0",
                    "group-hover:bg-transparent transition duration-500 ease-in-out"
                  )}
                ></div>
              </div>
            </div>

            {/* Message */}
            <div className="overflow-auto px-2 py-2 animate-fade-up">
              <h3 className="text-2xl md:text-3xl font-bold text-secColor mb-4">
                Chairman's Message
              </h3>
              <div className="text-primary/80 font-medium text-lg space-y-4 leading-relaxed">
                <p className="italic border-l-4 border-secColor p-4 bg-secColor/5 rounded-md">
                  {`${chairmanMessage.longMsg}`}
                </p>
                <p>{`${chairmanMessage.completedMsg}`}</p>
                <p>{`${chairmanMessage.completedMsg2}`}</p>
                <div className="mt-6">
                  <p className="font-bold text-primary text-md italic">
                    {chairmanMessage.author}
                  </p>
                  <p className="text-secColor text-sm">
                    {chairmanMessage.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
