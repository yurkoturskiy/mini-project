import React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const options = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 1.03,
    },
  }),
  hidden: { opacity: 0 },
};

const LayersContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-[5px]"
    >
      <Accordion.Root
        className="z-50 space-y-1 w-[260px] rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Logo</AccordionTrigger>
          <AccordionContent>Add your logo Here</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Subtitles</AccordionTrigger>
          <AccordionContent>
            Would you like to generate subtitles?
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Headline</AccordionTrigger>
          <AccordionContent>Write down your headline here</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Media overlay</AccordionTrigger>
          <AccordionContent>Do your media overlay here</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Footage</AccordionTrigger>
          <AccordionContent>Footage goes here</AccordionContent>
        </AccordionItem>
      </Accordion.Root>
    </motion.div>
  );
};
export default LayersContent;

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "focus-within:shadow-transparent mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-white shadow-[#1f1f1f] text-sm py-[14px] flex h-[45px] flex-1 cursor-pointer rounded-[10px] items-center justify-between bg-[#252525] px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "text-white bg-[#1f1f1f] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp rounded-[10px] -mt-4 pt-4 overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";
