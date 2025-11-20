import { Skeleton } from "@/components/ui/skeleton"

export function LivroSkeleton() {
    return (
        <div className="flex gap-5 items-center justify-center">
            {[...Array(6)].map((_, i) => (
                <Skeleton
                    key={i}
                    className="relative w-32 h-48 md:w-20 md:h-30 lg:w-30 lg:h-45 bg-slate-300"
                />
            ))}
        </div>
    )
}
