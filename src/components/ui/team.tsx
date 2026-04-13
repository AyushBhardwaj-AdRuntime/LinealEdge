"use client";

import React from "react";
import { Marquee } from "./marquee";

interface TeamMember {
  image: string;
  name: string;
  role: string;
}

interface TeamProps {
  title: string;
  description: string;
  members: TeamMember[];
  layout?: "marquee" | "grid";
  reviewText?: string;
  reviewerImage?: string;
  reviewerName?: string;
  reviewerRole?: string;
}

export function Team({
  title,
  description,
  members,
  layout = "marquee",
  reviewText,
  reviewerImage,
  reviewerName,
  reviewerRole,
}: TeamProps) {
  return (
    <section className="relative w-full flex flex-col items-center">
      <div className="pointer-events-none absolute inset-0 z-0">
        <svg
          className="absolute right-0 bottom-0 text-gray-600/5 opacity-50 dark:text-neutral-800"
          fill="none"
          height="154"
          viewBox="0 0 460 154"
          width="460"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_494_1104)">
            <path
              d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
            />
          </g>
          <defs>
            <clipPath id="clip0_494_1104">
              <rect fill="white" height="154" width="460" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        <div className="mx-auto mb-12 md:mb-20 flex max-w-3xl flex-col items-center px-4 text-center">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900/10 border border-gray-400/30 text-gray-900 shadow-sm backdrop-blur-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-star-icon lucide-user-star"
            >
              <path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
              <path d="M8 15H7a4 4 0 0 0-4 4v2" />
              <circle cx="10" cy="7" r="4" />
            </svg>
          </div>

          <h1 className="relative mb-4 font-bold text-4xl text-gray-900 tracking-tight sm:text-5xl dark:text-neutral-100">
            {title}
          </h1>
          <p className="max-w-2xl text-gray-700 text-lg sm:text-xl dark:text-neutral-300 font-medium">
            {description}
          </p>
        </div>

        {layout === "marquee" ? (
          <div className="relative mx-auto w-full max-w-5xl overflow-hidden mask-image-linear">
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 sm:w-32 bg-[linear-gradient(to_right,#030508,transparent)]" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 sm:w-32 bg-[linear-gradient(to_left,#030508,transparent)]" />
            
            <Marquee className="[--gap:2rem] w-full" pauseOnHover repeat={4}>
              {members.map((member) => (
                <div
                  className="group flex w-[280px] sm:w-[320px] shrink-0 flex-col transition-transform duration-500 hover:-translate-y-2"
                  key={member.name}
                >
                  <div className="relative h-[380px] w-full overflow-hidden rounded-2xl bg-gray-900/5 border border-gray-400/20 shadow-xl">
                    <img
                      alt={member.name}
                      className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                      src={member.image}
                    />
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-12 text-center backdrop-blur-[2px]">
                      <h3 className="font-medium text-lg text-gray-900 mb-1 tracking-wide">
                        {member.name}
                      </h3>
                      <p className="text-green-400 font-medium text-sm tracking-widest uppercase opacity-90">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {members.map((member) => (
              <div
                className="group flex flex-col transition-transform duration-500 hover:-translate-y-2"
                key={member.name}
              >
                <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-gray-900/5 border border-gray-400/20 shadow-xl ring-1 ring-gray-300/30 group-hover:ring-green-400/30 transition-all duration-300">
                  <img
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0 group-hover:scale-105"
                    src={member.image}
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 pt-10 text-center backdrop-blur-[1px]">
                    <h3 className="font-medium text-base text-gray-900 mb-1 tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-green-400 font-semibold text-xs tracking-widest uppercase opacity-90 drop-shadow-md">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {reviewText && (
          <div className="mx-auto mt-24 max-w-4xl px-6 text-center">
            <p className="mb-8 font-medium text-xl sm:text-2xl text-gray-900/90 leading-relaxed tracking-tight">
              "{reviewText}"
            </p>
            {(reviewerName || reviewerImage) && (
              <div className="flex flex-col items-center justify-center gap-4 mt-12">
                {reviewerImage && (
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-gray-400/30 shadow-lg">
                    <img
                      alt={reviewerName || "Reviewer"}
                      className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                      src={reviewerImage}
                    />
                  </div>
                )}
                <div className="text-center">
                  <p className="font-semibold text-lg text-gray-900">
                    {reviewerName}
                  </p>
                  <p className="text-gray-700/60 font-medium text-sm mt-1">
                    {reviewerRole}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}