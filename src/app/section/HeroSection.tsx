import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-hero bg-cover">
      <div className="flex justify-center items-center py-48">
        <div className="container max-w-7xl mx-auto p-4">
          <div>
            <span className="text-sm block mx-auto py-1 px-2 rounded-xl border-2 w-fit">
              Web Development Excellence
            </span>
            <div>
              <h1 className="text-3xl text-center font-bold py-4 w-full mx-auto md:text-5xl md:w-md lg:text-7xl lg:w-2xl">
                We Build Digital Experiences That Drive Results
              </h1>
              <p className="text-center mx-auto md:w-md lg:w-2xl">
                Transform your vision into high-performance websites and web
                applications. Our expert team delivers scalable, modern
                solutions that elevate your business.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-2 md:flex-row md:w-md md:mx-auto">
              <Button size="lg" className="w-1/2 cursor-pointer mx-auto">
                Start Your Project{" "}
                <span>
                  <MoveRight />
                </span>
              </Button>
              <Button size="lg" className="w-1/2 cursor-pointer  mx-auto">
                View Our Work
              </Button>
            </div>
          </div>

          <div className="container grid grid-cols-2 gap-8 mt-24">
            <div className="flex flex-col gap-2 items-center">
              <span className="text-3xl font-semibold">150+</span>
              <span className="text-stone-400">Project Delivered</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-3xl font-semibold">98%</span>
              <span className="text-stone-400">Client Satisfaction</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-3xl font-semibold">5+</span>
              <span className="text-stone-400">Years Experience</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-3xl font-semibold">24/7</span>
              <span className="text-stone-400">Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
