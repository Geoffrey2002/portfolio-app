"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden border-[--color-border] bg-[--color-bg-card]">
      <Skeleton className="w-full h-[280px] md:h-[320px]" />
    </Card>
  );
}

export function SkillCardSkeleton() {
  return (
    <Card className="border-[--color-border] bg-[--color-bg-card] min-h-[160px] md:min-h-[180px]">
      <CardContent className="p-4 md:p-6 flex flex-col h-full">
        <div className="flex flex-col items-center flex-1">
          <Skeleton className="w-14 h-14 mb-3 rounded-full" />
          <Skeleton className="h-5 w-20 mb-2" />
          <Skeleton className="h-3 w-16 mb-3" />
          <div className="w-full">
            <Skeleton className="h-2 w-full mb-1" />
            <Skeleton className="h-2 w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialSkeleton() {
  return (
    <Card className="border-[--color-border] bg-[--color-bg-card]">
      <CardContent className="p-8 md:p-12">
        <Skeleton className="w-10 h-10 mb-6" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-8" />
        <div className="flex items-center gap-4">
          <Skeleton className="w-14 h-14 rounded-full" />
          <div className="flex-1">
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-3 w-48" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PageLoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-[--color-border] border-t-[--color-primary] rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 border-4 border-[--color-border] border-t-[--color-primary-light] rounded-full animate-spin animation-delay-150"></div>
        </div>
      </div>
    </div>
  );
}

export function ButtonLoading() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      <span>Loading...</span>
    </div>
  );
}




