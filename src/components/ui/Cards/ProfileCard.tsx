"use client";

import Image from "next/image";

interface ProfileCardProps {
  image: string;
  name: string;
  position: string;
  hrefLinkedIn?: string;
}

export default function ProfileCard({
  image,
  name,
  position,
  hrefLinkedIn,
}: ProfileCardProps) {
  return (
    <a
      href={hrefLinkedIn}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline cursor-pointer"
    >
      <div className="flex flex-col min-w-80  items-center ">
        <Image
          src={image}
          alt="Profile"
          width={150}
          height={150}
          className="rounded-lg object-cover bg-transparent "
        />

        <div className="card-body p-10">
          <h5 className="card-title">{name}</h5>
          <p>{position}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline small-opacity">LinkedIn</div>
          </div>
        </div>
      </div>
    </a>
  );
}
