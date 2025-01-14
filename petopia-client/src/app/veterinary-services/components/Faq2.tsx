"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are some common questions about our veterinary services to help
            you.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I book?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Booking an appointment is easy! You can schedule online through
              our website or call us directly. We recommend booking in advance
              to secure your preferred time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              What are the costs?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Costs vary based on the services provided. We offer transparent
              pricing and a detailed breakdown during your visit. Feel free to
              ask about any specific treatments you're interested in.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What treatments do you offer?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We provide a wide range of veterinary services, including
              vaccinations, dental care, and surgeries. Our team is equipped to
              handle both routine and emergency care. Your pet's health and
              comfort are our top priorities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I bring my pet?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We encourage you to bring your pet to the appointment.
              This allows us to assess their health in a familiar context.
              Please ensure they are safely restrained during your visit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if I have concerns?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              If you have any concerns about your pet's health or our services,
              please don’t hesitate to reach out. Our staff is here to listen
              and provide guidance. Your peace of mind is important to us.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            We're here to help you with any inquiries.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
