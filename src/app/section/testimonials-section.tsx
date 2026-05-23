"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    content:
      "Nexus Digital transformed our outdated website into a modern, high-converting platform. Our online sales increased by 300% within the first quarter.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    avatar: "SC",
  },
  {
    id: 2,
    content:
      "The team at Nexus delivered beyond our expectations. Their attention to detail and commitment to quality is unmatched. Highly recommend!",
    author: "Michael Torres",
    role: "Founder, Elevate Studio",
    avatar: "MT",
  },
  {
    id: 3,
    content:
      "Working with Nexus was seamless from start to finish. They understood our vision and brought it to life with exceptional craftsmanship.",
    author: "Emily Johnson",
    role: "Marketing Director, Bloom Co.",
    avatar: "EJ",
  },
  {
    id: 4,
    content:
      "Our new web application has revolutionized how we serve our customers. The performance improvements alone were worth the investment.",
    author: "David Park",
    role: "CTO, DataFlow Systems",
    avatar: "DP",
  },
];
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  return (
    <section className="w-full pb-24" id="testimonials">
      <div className="container max-w-7xl mx-auto w-full p-4">
        <div>
          <p className="dark:text-muted-foreground text-center tracking-wide text-xl">
            TESTIMONIALS
          </p>
          <div>
            <h3 className="text-center text-3xl font-bold py-4 md:text-5xl">
              Trusted by Industry Leaders
            </h3>
            <p className="text-center text-muted-foreground md:w-xl mx-auto pb-12">
              See what our clients have to say about working with us.
            </p>
          </div>
        </div>

        <div>
          <Card className="dark:bg-background border hover:border-primary h-full w-full max-w-2xl mx-auto md:p-8">
            <CardContent>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xl tracking-wide">
                    {testimonials[currentIndex].content}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold p-4 bg-foreground text-background dark:text-background rounded-full">
                    {testimonials[currentIndex].avatar}
                  </span>
                  <div className="inline-flex flex-col">
                    <span>{testimonials[currentIndex].author}</span>
                    <span>{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    index === currentIndex ? "bg-primary" : "bg-border",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-center py-8">Trusted by companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center">
            {["TechStart", "Elevate", "Bloom", "DataFlow"].map((company) => (
              <p
                key={company}
                className="text-2xl text-muted-foreground font-medium"
              >
                {company}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
