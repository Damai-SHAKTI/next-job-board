import { FC, ReactNode } from "react";

interface Props {
    icon?: ReactNode,
    text: string,
}

const Badge: FC<Props> = ({ icon, text }) => {
  return (
    <div className="w-fit py-1.5 px-4 flex items-center gap-1 text-gray-200 border border-gray-200 bg-white/25 rounded-full">
        {icon && icon}
        <p className="text-sm text-white">{text}</p>
    </div>
  )
}

export default Badge;