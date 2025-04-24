import { RevealOnScroll } from "../RevealOnScroll";
export const About=()=>{
     
    const languages = ["C/C++","Python","R","JavaScript","PL/SQL","HTML/CSS"];
    const Tools_and_FrameWorks = ["Pytorch","Tensorflow","Flask","FastAPI","Streamlit","ReactJS","Django","Docker","PowerBI"];
    const frontendSkills = ["ReactJS","HTML/CSS","JavaScript","Bootstrap","Tailwind CSS"];
    


    return <section id="About"
    className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                About Me
            </h2>
            <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
                <p className="text-gray-300 mb-6">
                Computer Engineering undergrad at TIET , India. Passionate about Machine Learning and Finance, I specialize in Data Science and Machine Learning. I love building and tinkering with Neural Network. Fueled with innovation dedicated to providing solutions to real life problems.
                </p>
            </div>
            <div className="grid grid-cols-1  gap-6">
                <div className=" rounded-xl p-6 hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Languages</h3>
                    <div className=" flec flex-wrap gap-2">
                        {languages.map((tech,key) => <span key={key} className="bg-blue-800 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>)}
                    </div>
                </div>
                <div className=" rounded-xl p-6 hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"></h3>Tools and Frameworks
                    <div className=" flec flex-wrap gap-2">
                        {Tools_and_FrameWorks.map((tech,key) => <span key={key} className="bg-blue-800 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>)}
                    </div>
                </div>
                <div className=" rounded-xl p-6 hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"></h3>Frontend
                    <div className=" flec flex-wrap gap-2">
                        {frontendSkills.map((tech,key) => <span key={key} className="bg-blue-800 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>)}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1   mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                    Education
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>
                            B.E  in Computer Engineering
                        </strong>-Thapar Institute of Engineering and Technology(2022-2026)
                    </li>
                    <li>
                        Relevent Coursework: Data Science, Machine Learning, Deep Learning, Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks,Corporate Finance.
                    </li>
                </ul>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
};