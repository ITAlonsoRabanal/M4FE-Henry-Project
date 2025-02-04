import { Github, Linkedin, Mail } from "lucide-react";

import Link from "next/link";


export const Footer : React.FC = (): React.ReactElement => {

    return (
        <div className="flex justify-around align-middle bg-gray-800 p-4">
            <Link href={`https://github.com/ITAlonsoRabanal`} className="flex gap-2 text-white hover:font-semibold">
                <Github/>
                <span className="sm:block hidden">Github</span>
            </Link>
            <div className="flex gap-2 text-white hover:font-semibold">
                <Mail/>
                <span className="sm:block hidden">nachoalonso273@gmail.com</span>
            </div>
            <div className="flex gap-2 text-white hover:font-semibold">
                <Linkedin  />
                <span className="sm:block hidden">LinkedIn</span>
            </div>
        </div>
    )

}

export default Footer;