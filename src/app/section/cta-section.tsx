import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoveRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="pb-24" id="cta">
      <div className="container max-w-7xl mx-auto w-full p-4">
        <Card className="dark:bg-background border hover:border-primary h-full w-full max-w-4xl mx-auto md:px-8 py-16">
          <CardContent className="flex flex-col gap-8 items-center">
            <div>
              <h3 className="text-3xl text-center font-bold md:text-5xl">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-center text-muted-foreground pt-4">
                Lets discuss your project and create a digital experience that
                sets you apart from the competition.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <Button size="lg">
                Schedule a Call{" "}
                <span>
                  <MoveRight />
                </span>
              </Button>
              <Button size="lg">Send a Message</Button>
            </div>

            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <div className="inline-flex items-center gap-2">
                <span className="size-2 bg-green-500 block rounded-full"></span>
                <span>Free consultation</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="size-2 bg-green-500 block rounded-full"></span>
                <span>No commitment required</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="size-2 bg-green-500 block rounded-full"></span>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
