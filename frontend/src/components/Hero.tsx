import { Link } from "react-router-dom";

// const Hero = () => {
// 	const navigate = useNavigate();
	// return (
	// 	<div className="w-[100] h-screen bg-gradient-to-r from-amber-200 to-yellow-500 flex flex-col justify-center items-center">
	// 		<h1 className="text-4xl md:text-7xl tracking-wide font-extrabold text-center md:text-left">
	// 			Stay Curious.
	// 		</h1>
	// 		<h6 className="text-2xl md:text-4xl tracking-wide font-light text-center md:text-left py-6">
	// 			Discover stories, thinking, and expertise from writers on any topic.
	// 		</h6>

	// 		<button onClick={ () => {
	// 			const token = localStorage.getItem("token");
	// 			if (token) {
	// 				navigate("/blogs");
	// 			} else {
	// 				navigate("/signin");
	// 			}
	// 		}} className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-gray-900 text-gray-800">
	// 			<span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-900 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
	// 				<span className="relative text-gray-900 transition font-bold duration-300 group-hover:text-white ease text-lg tracking-wider" >
	// 					Start reading
	// 				</span>
	// 		</button>
	// 	</div>
	// );
	
	
// };


export const Hero = ({ uniqueId }: { uniqueId: string }) => {

	return <div>

	<div className="flex flex-col min-h-[100dvh] bg-black">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="relative container px-4 md:px-6 space-y-6">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Discover the Latest Trends in Tech and Beyond
              </h1>
              <p className="text-muted-foreground md:text-xl text-white">
                Stay up-to-date with BlogiAIn, where we cover the latest news, insights, and expert analysis on a wide
                range of topics.
              </p>
              <Link
                to="/blogs"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white"
               
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Latest Blog Posts</h2>
              <p className="text-muted-foreground md:text-xl text-white">Explore our latest articles and insights.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                to="#"
                className="group grid gap-4 rounded-lg bg-card p-4 transition-colors hover:bg-card/80"
               
              >
                <img src={`https://picsum.photos/300/300?random=web development`} alt="Blog Post" className="aspect-[4/3] w-full rounded-lg object-cover" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:underline text-white">The Future of Web Development</h3>
                  <p className="text-muted-foreground line-clamp-2 text-white">
                    Explore the latest trends and technologies shaping the future of web development.
                  </p>
                </div>
              </Link>
              <Link
                to="#"
                className="group grid gap-4 rounded-lg bg-card p-4 transition-colors hover:bg-card/80"
               
              >
                <img src={`https://picsum.photos/300/300?random=AI`} alt="Blog Post" className="aspect-[4/3] w-full rounded-lg object-cover" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:underline text-white">The Rise of Artificial Intelligence</h3>
                  <p className="text-muted-foreground line-clamp-2 text-white">
                    Discover how AI is transforming industries and shaping our future.
                  </p>
                </div>
              </Link>
              <Link
                to="#"
                className="group grid gap-4 rounded-lg bg-card p-4 transition-colors hover:bg-card/80"
               
              >
                <img src={`https://picsum.photos/300/300?random=sustainable future`} alt="Blog Post" className="aspect-[4/3] w-full rounded-lg object-cover" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:underline text-white">The Sustainable Future of Tech</h3>
                  <p className="text-muted-foreground line-clamp-2 text-white">
                    Explore how technology can help us build a more sustainable future.
                  </p>
                </div>
              </Link>
              <Link
                to="#"
                className="group grid gap-4 rounded-lg bg-card p-4 transition-colors hover:bg-card/80 text-white"
               
              >
                <img src={`https://picsum.photos/300/300?random=remote work`} alt="Blog Post" className="aspect-[4/3] w-full rounded-lg object-cover" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:underline text-white">The Future of Remote Work</h3>
                  <p className="text-muted-foreground line-clamp-2 text-white">
                    Discover the latest trends and insights on the future of remote work.
                  </p>
                </div>
              </Link>
              <Link
                to="#"
                className="group grid gap-4 rounded-lg bg-card p-4 transition-colors hover:bg-card/80"
               
              >
                <img src={`https://picsum.photos/300/300?random=5G technology`} alt="Blog Post" className="aspect-[4/3] w-full rounded-lg object-cover" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:underline text-white">The Impact of 5G Technology</h3>
                  <p className="text-muted-foreground line-clamp-2 text-white">
                    Explore the transformative potential of 5G technology and its impact on our lives.
                  </p>
                </div>
              </Link>
              <Link
                to="#"
                className="group grid gap-4 rounded-lg bg-card p-4 transition-colors hover:bg-card/80"
               
              >
                <img src={`https://picsum.photos/300/300?random=cybersecurity`} alt="Blog Post" className="aspect-[4/3] w-full rounded-lg object-cover" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold group-hover:underline text-white">The Future of Cybersecurity</h3>
                  <p className="text-muted-foreground line-clamp-2 text-white">
                    Stay ahead of the curve with the latest trends and innovations in cybersecurity.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
	</div>
	</div>
}

export default Hero;

