import React from "react";

import { Logo } from "@/components/logo";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Phone, Twitter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { ContactForm } from "@/features/contact/contact-form";

const faq = [
  {
    question: "What is your return policy?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum cumque odit at ad illum numquam. In, harum. Totam commodi aut ipsam adipisci atque quod. Saepe recusandae officia exercitationem laborum!",
  },
  {
    question: "How do I track my order?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum cumque odit at ad illum numquam. In, harum. Totam commodi aut ipsam adipisci atque quod. Saepe recusandae officia exercitationem laborum!",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum cumque odit at ad illum numquam. In, harum. Totam commodi aut ipsam adipisci atque quod. Saepe recusandae officia exercitationem laborum!",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum cumque odit at ad illum numquam. In, harum. Totam commodi aut ipsam adipisci atque quod. Saepe recusandae officia exercitationem laborum!",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum cumque odit at ad illum numquam. In, harum. Totam commodi aut ipsam adipisci atque quod. Saepe recusandae officia exercitationem laborum!",
  },
];

const data = [
  {
    icon: Phone,
    title: "Call us",
    description: "Mon - fri 8am - 5pm",
    content: "+62 123-456-789",
  },
  {
    icon: Twitter,
    title: "Mention us",
    description: "Mention or direct message to get help",
    content: "@nyanboard",
  },
  {
    icon: MapPin,
    title: "Visit us",
    description: "Visi our office",
    content: "View on google maps",
  },
];

export const ContactPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <div className="my-6 text-center">
        <Logo className="mx-auto size-18" />
        <h1 className="heading-1">Contact our team</h1>
        <p className="text-muted-foreground">Let us know how we can help.</p>
      </div>

      <div className="flex flex-wrap gap-4">
        {data.map(({ title, icon: Icon, description, content }) => (
          <Card className="flex-grow" key={title}>
            <CardHeader>
              <Icon />
            </CardHeader>
            <CardContent>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant={"ghost"}>
                <a className="underline" href="#">
                  {content}
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 my-18">
        <div className="">
          <Card className="px-5 py-6">
            <h2 className="heading-2">Send email</h2>
            <ContactForm />
          </Card>
        </div>
        <div className="">
          <h1 className="heading-2">Frequenly asked questions</h1>

          <Accordion type="single" className="mt-6" defaultValue="question-0">
            {faq.map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
