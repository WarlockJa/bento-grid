import { cn } from "@/lib/utils";

export default function SchedulePosts({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-custom-purple-100 flex flex-col justify-center gap-6 overflow-hidden rounded-xl p-4 sm:p-8",
        className,
      )}
    >
      <h2 className="text-center text-[1.65rem] leading-8 font-medium tracking-[-0.09em] sm:text-left sm:text-[2.1rem]">
        Schedule to social media.
      </h2>
      <div className="sm:h-80 sm:w-screen">
        <img
          src="/images/illustration-schedule-posts.webp"
          alt="posts graph"
          className="h-full"
        />
      </div>
      <p className="text-center text-lg leading-5 sm:text-left">
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
  );
}
