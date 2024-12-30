import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Section: React.FC<SectionProps> = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        "pt-[4vh] h-[96vh] lg:mx-0 lg:my-40 my-[5%] min-h-fit",
        className
      )}
      {...props}
    />
  );
};

export { Section };
