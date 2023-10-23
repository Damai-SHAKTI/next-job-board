import { FC, ReactNode } from "react";

interface Props {
    colour: string,
    children: ReactNode,
}

const JobCardSkin: FC<Props> = ({ children, colour }) => {
    return (
        <div className={"relative items-stretch p-3 w-full sm:w-[400px] h-[260px] space-y-3 rounded-3xl bg-brand-purple overflow-hidden " + colour}>
            {children}
        </div>
    )
}

export default JobCardSkin;