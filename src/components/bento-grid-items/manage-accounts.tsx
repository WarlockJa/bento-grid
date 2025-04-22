import { cn } from "@/lib/utils";

export default function ManageAccounts({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 overflow-hidden rounded-xl bg-white p-4 sm:p-6",
        className,
      )}
    >
      <div className="h-16 w-screen">
        <img
          src="/images/illustration-multiple-platforms.webp"
          alt="social media platforms"
          className="h-full rounded-full object-fill"
        />
      </div>
      <h2 className="text-[1.65rem] leading-8 font-medium tracking-[-0.09em] sm:text-[2.1rem]">
        Manage multiple accounts and platforms.
      </h2>
    </div>
  );
}
