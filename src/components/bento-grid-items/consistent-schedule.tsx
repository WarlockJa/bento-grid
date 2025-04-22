import { cn } from "@/lib/utils";

export default function ConsistentSchedule({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-custom-yellow-500 flex flex-col gap-4 overflow-hidden rounded-xl p-4 sm:p-6",
        className,
      )}
    >
      <h2 className="text-[1.65rem] leading-6 font-medium tracking-[-0.09em] sm:text-[2.1rem] sm:leading-8">
        Maintain a consistent posting schedule.
      </h2>
      <div className="h-28 w-screen max-w-48 sm:h-16 sm:w-auto sm:max-w-max">
        <img
          src="/images/illustration-consistent-schedule.webp"
          alt="calendar"
          className="w-full"
        />
      </div>
    </div>
  );
}
