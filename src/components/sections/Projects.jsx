export const Projects= () =>{
    return <section id="Projects" className="min-h-screen flex item-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
            </h2>
            <div className="gird grid-cols-2 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59.130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2"> <a href="https://github.com/suryarathee/NanoGPT">NanoGPT</a></h3>
                <p className="text-gray-400 mb-4">
                    A state-of-the-art language model designed for generating human-like text.
                </p>
                <div>
                    {["Pytorch","Python","Streamlit"].map((tech,key)=>(
                        <span key={key} className="bg-blue-800 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
                    ))}
                </div>
                <div className="flex justify-between items-center ">
                <a href="https://github.com/suryarathee/NanoGPT" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Code/Project →</a>
                </div>
                </div>
                <div className="p-6 rounded-xl border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59.130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2"> <a href="https://hacktivity-space.vercel.app/">Hactivity</a></h3>
                <p className="text-gray-400 mb-4">
                    One stop solution for all your hackathon needs. Find Like minded people, create teams, and get all the information about hackathons happening around you.Get Updates.
                </p>
                <div>
                    {["React","Firebase"].map((tech,key)=>(
                        <span key={key} className="bg-blue-800 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
                    ))}
                </div>
                <div className="flex justify-between items-center ">
                <a href="https://hacktivity-space.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Code/Project →</a>
                </div>
                </div>
                <div className="p-6 rounded-xl border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59.130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2"> <a href="https://github.com/suryarathee/questions_analysis">Question-analysis</a></h3>
                <p className="text-gray-400 mb-4">
                    Qusetion analysis for Previous year question papers I built a web app using PaddleOCR and Streamlit. The app takes a scanned image of the question paper and extracts the text from it using OCR. It then analyzes the text to identify the type of questions asked in the paper and provides insights on the distribution of questions based on topics and difficulty levels.
                </p>
                <div>
                    {["Python","PaddleOCR","BERT"].map((tech,key)=>(
                        <span key={key} className="bg-blue-800 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
                    ))}
                </div>
                <div className="flex justify-between items-center ">
                <a href="https://github.com/suryarathee/questions_analysis" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Code/Project →</a>
                </div>
                </div>

            </div>

        </div>
    </section>
}