import { cn } from "@/lib/utils";

export default function GrowFollowers({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-custom-purple-500 flex flex-col items-center gap-4 rounded-xl p-6 sm:flex-row",
        className,
      )}
    >
      <div className="h-52 sm:w-[36em]">
        <img
          src="/images/illustration-grow-followers.webp"
          alt="followers graph"
          className="h-full w-full"
        />
      </div>
      <h2 className="text-background text-3xl font-medium sm:text-4xl">
        Grow followers with non-stop content.
      </h2>
    </div>
  );
}
