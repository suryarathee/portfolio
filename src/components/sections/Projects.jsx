export const Projects= () =>{
    return <section id="Projects" className="min-h-screen flex item-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
            </h2>
            <div className="gird grid-cols-2 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59.130,246,0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2"> <a href="https://github.com/suryarathee/NanoGPT">NanoGPT</a></h3>
                <p>
                    A state-of-the-art language model designed for generating human-like text.
                </p>
                <div>
                    {["Pytorch","Python","Streamlit"].map((tech,key)=>(
                        <span key={key} className="bg-blue-800 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
                    ))}
                </div>
                </div>

            </div>

        </div>
    </section>
}