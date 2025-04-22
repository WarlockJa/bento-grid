import { cn } from "@/lib/utils";

export default function CreatePost({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-custom-yellow-100 my-auto flex h-full flex-1 flex-col justify-center gap-6 rounded-xl p-8",
        className,
      )}
    >
      <h2 className="text-3xl leading-8 font-medium tracking-[-0.09em] sm:text-[2.5rem]">
        Create and schedule content{" "}
        <span className="text-custom-purple-500 italic">quicker.</span>
      </h2>

      <img
        src="/images/illustration-create-post.webp"
        alt="create post"
        className="w-[70%] sm:w-auto"
      />
    </div>
  );
}
