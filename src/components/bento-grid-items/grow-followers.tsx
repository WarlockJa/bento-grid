import { cn } from "@/lib/utils";

export default function GrowFollowers({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-custom-purple-500 grid items-center gap-4 rounded-xl p-6 sm:grid-cols-2",
        className,
      )}
    >
      <div className="mx-auto aspect-[1.134/1] max-h-52 sm:mr-auto sm:ml-0">
        <img
          src="/images/illustration-grow-followers.webp"
          alt="followers graph"
          className="h-full w-full"
        />
      </div>
      <h2 className="text-background text-center text-3xl font-medium sm:text-left lg:text-4xl">
        Grow followers with non-stop content.
      </h2>
    </div>
  );
}
