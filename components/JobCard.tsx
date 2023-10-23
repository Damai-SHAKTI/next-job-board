import Image from "next/image";

import Badge from "./Badge";
import JobCardSkin from "./JobCardSkin";
import { FC } from "react";

interface Props {
    title: string,
    companyName: string,
    companyImage: string,
    country: string,
    employmentType: string,
    description: string,
    datePosted: string,
    salary: string,
}

const colors: any = {
    red: "bg-brand-red",
    purple: "bg-brand-purple",
    orange: "bg-orange-500",
    green: "bg-green-600"
}

const JobCard: FC<Props> = ({ title, companyName, companyImage, country, employmentType, description, datePosted, salary }) => {
    const randomColor = () => {
        var keys = Object.keys(colors);
        return colors[keys[keys.length * Math.random() << 0]];
    };

    return (
        <JobCardSkin colour={randomColor()}>
            <div className="flex items-start gap-2">
                <Image alt="" src={companyImage} width={54} height={54} />
                <div className="text-white">
                    <h1 className="text-lg">{title}</h1>
                    <p className="text-sm">{companyName}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
                <Badge
                    text={country}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    }
                />
                <Badge
                    text={employmentType}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                />
            </div>

            <p className="text-gray-200">{description}</p>

            <div className="absolute w-full bottom-0 left-0 p-3 flex items-center justify-between bg-white h-12">
                <p className="text-sm">{datePosted}</p>
                <p className="text-md font-medium">{salary}</p>
            </div>
        </JobCardSkin>
    )
}

export default JobCard;