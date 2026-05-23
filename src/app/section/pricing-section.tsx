import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

interface PricingFeature {
  title: string;
  href: string;
}

interface PricingPlan {
  title: string;
  description: string;
  price: string;
  features: string[];
  button: PricingFeature[];
}

const pricingList: PricingPlan[] = [
  {
    title: "Starter",
    description: "Perfect for small businesses getting started online.",
    price: "$2,500",
    features: [
      "Unlimited website design",
      "Mobile-first design",
      "Basic SEO optimization",
      "Contact form integration",
      "2 rounds of revisions",
      "30 days support",
    ],
    button: [
      {
        title: "Get started",
        href: "#",
      },
    ],
  },
  {
    title: "Professional",
    description: "For growing businesses that need more features.",
    price: "$5,500",
    features: [
      "Up to 15 pages",
      "Custom design & animations",
      "Advanced SEO package",
      "CMS integration",
      "E-commerce readys",
      "Analytics dashboard",
      "Unlimited revisions",
      "90 days support",
    ],
    button: [
      {
        title: "Get started",
        href: "#",
      },
    ],
  },
  {
    title: "Enterprise",
    description: "Full-scale solutions for large organizations.",
    price: "Custom",
    features: [
      "Unlimited pages",
      "Custom web application",
      "API integrations",
      "Performance optimization",
      "Security hardening",
      "Dedicated project manager",
      "Priority support",
      "Ongoing maintenance",
    ],
    button: [
      {
        title: "Get started",
        href: "#",
      },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="w-full pt-16 pb-24" id="pricing">
      <div className="container max-w-7xl mx-auto w-full p-4">
        <div>
          <p className="dark:text-muted-foreground text-center tracking-wide text-xl">
            PRICING
          </p>
          <div>
            <h3 className="text-center text-3xl font-bold py-4 md:text-5xl">
              Transparent Pricing for Every Scale
            </h3>
            <p className="text-center text-muted-foreground md:w-xl mx-auto pb-12">
              Choose the package that fits your needs. All plans include our
              commitment to quality and timely delivery.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {pricingList.map((item) => (
            <Card
              className="dark:bg-background border hover:border-primary h-full py-8"
              key={item.title}
            >
              <CardContent>
                <div>
                  <div className="flex flex-col gap-8 items-center">
                    <div>
                      <h3 className="font-semibold text-xl py-2 text-center">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-center py-4">
                        {item.description}
                      </p>
                      <h3 className="text-3xl text-center font-bold">
                        {item.price}
                        <span className="text-xl font-normal">/ one-time</span>
                      </h3>
                    </div>

                    <div>
                      <ul className="flex flex-col gap-2">
                        {item.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-lg gap-4"
                          >
                            <span>
                              <CircleCheck className="text-muted-foreground size-5" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {item.button.map((button) => (
                      <Button key={button.title} size="lg" className="w-1/2">
                        <Link href={button.href}>{button.title}</Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center pt-8">
          Need something different? Contact us for a custom quote
        </p>
      </div>
    </section>
  );
}
