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
            Here are some common questions about purchasing products, shipping,
            and returns.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What products do you offer?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We offer a wide range of products for your pets, including food,
              toys, clothing, and health supplies. Our selection is tailored for
              both cats and dogs, ensuring you find the perfect items for your
              furry friends. Browse our categories to discover everything we
              have available.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How is shipping handled?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Shipping is processed quickly to ensure your products arrive on
              time. We offer various shipping options, including standard and
              expedited delivery. You can track your order through our website
              for added convenience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We want you to be completely satisfied with your purchase. If
              you're not happy, you can return most products within 30 days for
              a full refund. Please ensure items are in their original condition
              for a smooth return process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I track my order?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Once your order is shipped, you will receive a tracking number via
              email. Use this number on our website to check the status of your
              delivery. Stay updated on your order's journey to your doorstep.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I change my order?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can modify your order before it has been processed.
              Please contact our customer service team as soon as possible. Once
              the order is shipped, changes cannot be made.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help!</p>
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
