import * as Tooltip from "@radix-ui/react-tooltip";

export default function TooltipComponent({ content, children }) {
  return (
    <Tooltip.Provider delayDuration={700}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div>{children}</div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="px-1 py-1 text-xs bg-[#2c2c2c] text-[#8b8b8b] rounded-md"
            sideOffset={5}
          >
            {content}
            <Tooltip.Arrow className="fill-[#2c2c2c]" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
