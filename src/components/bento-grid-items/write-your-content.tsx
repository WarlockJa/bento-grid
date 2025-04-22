import { cn } from "@/lib/utils";

export default function WriteYourContent({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-custom-yellow-500 flex flex-1 flex-col justify-between gap-4 rounded-xl p-6",
        className,
      )}
    >
      <h2 className="mr-2 text-3xl leading-7 font-medium tracking-[-0.09em] sm:text-[2.5rem] sm:leading-9">
        Write your content using AI.
      </h2>

      <div className="sm:h-56 lg:w-screen">
        <img
          src="/images/illustration-ai-content.webp"
          alt="ai content request"
          className="h-full w-[80%] sm:w-auto"
        />
      </div>
    </div>
  );
}
