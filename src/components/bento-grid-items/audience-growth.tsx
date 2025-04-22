import { cn } from "@/lib/utils";

export default function AudienceGrowth({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between overflow-hidden rounded-xl bg-white p-6",
        className,
      )}
    >
      <div>
        <div
          className={cn(
            "flex items-center text-[3rem] leading-10 font-medium tracking-tighter sm:mb-4 sm:text-[4rem]",
            "before:pb-3 before:content-['>']",
          )}
        >
          <p>56%</p>
        </div>

        <h2 className="mb-4 text-lg">faster audience growth</h2>
      </div>

      <div className="h-17 w-screen">
        <img
          src="/images/illustration-audience-growth.webp"
          alt="people avatars"
          className="h-full w-auto"
        />
      </div>
    </div>
  );
}
