import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

const features = [
  {
    icon: "https://svgl.app/library/nextjs_icon_dark.svg",
    title: "Next.js 15",
    description:
      "Leverage the power of Next.js 15 for a seamless, high-performance dashboard experience.",
  },
  {
    icon: "https://svgl.app/library/shadcn-ui_dark.svg",
    title: "Shadcn UI",
    description:
      "Build modern, accessible, and beautifully designed interfaces with Shadcn UI components.",
  },
  {
    icon: "https://svgl.app/library/tailwindcss.svg",
    title: "Tailwind CSS v4",
    description:
      "Style your dashboard effortlessly with Tailwind CSS v4, ensuring a sleek and responsive design.",
  },
  {
    icon: "https://svgl.app/library/tanstack.svg",
    title: "TanStack",
    description:
      "Enhance data management and interactivity with the power of TanStack's robust utilities.",
  },
]

export const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-black tracking-tight max-w-lg">
          Build with Modern Stacks for Efficiency, and Scalability.
        </h2>
        <div className="mt-6 md:mt-8 w-full mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <Accordion defaultValue="item-0" type="single" className="w-full">
              {features.map(({ title, description, icon }, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="data-[state=open]:border-b-2 data-[state=open]:border-primary"
                >
                  <AccordionTrigger className="text-lg [&>svg]:hidden">
                    <div className="flex items-center gap-4">
                      <Image
                        src={icon}
                        width={25}
                        height={25}
                        alt={`logo ${title}`}
                      />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[17px] leading-relaxed text-muted-foreground">
                    {description}
                    <div className="mt-6 mb-2 md:hidden aspect-video w-full bg-muted rounded-xl" />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media */}
          <div className="hidden md:block w-full h-full bg-muted rounded-xl" />
        </div>
      </div>
    </div>
  )
}
