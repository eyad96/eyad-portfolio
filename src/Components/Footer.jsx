import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (

        <footer className="border-t border-slate-800 bg-[#020617] text-slate-400">
            <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

                <p className="text-sm">
                    © {new Date().getFullYear()} Eyad Odeh. All rights reserved.
                </p>

                <div className="flex gap-5 text-xl">
                    <a
                        href="https://github.com/eyad96"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/eyad-odeh/"
                        target="_blank"
                        className="hover:text-blue-500 transition"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>

    );
}
