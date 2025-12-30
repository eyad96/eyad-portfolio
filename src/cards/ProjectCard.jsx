export default function ProjectCard({ project }) {
    return (
        <div className="bg-[#020617] border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 duration-300 transition">

            <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
            />

            <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4">
                    {project.description}
                </p>

                <div className="flex items-center sm:items-center justify-center gap-3 text-sm">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    >
                        Live Demo
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
