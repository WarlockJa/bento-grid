import { cn } from "@/lib/utils";

export default function SocialMedia({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-custom-purple-500 text-background flex flex-col items-center justify-center rounded-xl p-8 text-pretty sm:p-12",
        className,
      )}
    >
      <h1 className="text-center text-5xl font-medium tracking-tighter sm:text-6xl">
        Social Media <span className="text-custom-yellow-500">10x</span>{" "}
        <span className="italic">Faster</span> with AI
      </h1>
      <img
        src="/images/illustration-five-stars.webp"
        alt="five stars"
        className="mt-6 w-52"
      />
      <p>Over 4,000 5-star reviews</p>
    </div>
  );
}
