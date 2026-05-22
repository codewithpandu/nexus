import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, MoveRight, Sparkles, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="flex justify-center items-center pt-48 pb-16">
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

          <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
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

          <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mt-24">
            <div>
              <Card className="dark:bg-background border hover:border-primary h-full">
                <CardContent>
                  <span className="p-4 inline-block bg-muted rounded-xl">
                    <Code className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-xl py-2">
                      Custom Development
                    </h3>
                    <p className="text-muted-foreground">
                      Tailored solutions built with modern technologies for your
                      unique needs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="dark:bg-background border hover:border-primary h-full">
                <CardContent>
                  <span className="p-4 inline-block bg-muted rounded-xl">
                    <Zap className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-xl py-2">
                      Lightning Fast
                    </h3>
                    <p className="text-muted-foreground">
                      Optimized performance that keeps your users engaged and
                      converts.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="dark:bg-background border hover:border-primary h-full">
                <CardContent>
                  <span className="p-4 inline-block bg-muted rounded-xl">
                    <Sparkles className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-xl py-2">
                      Modern Design
                    </h3>
                    <p className="text-muted-foreground">
                      Beautiful, intuitive interfaces that delight your users.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
