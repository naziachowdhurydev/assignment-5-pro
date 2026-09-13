const bannerStack = new URL("../assets/banner-stack.png", import.meta.url).href;

const Banner = () => {
  return (
    <section
      className="border-b border-slate-100 bg-white"
      aria-labelledby="banner-title"
    >
      <div className="container mx-auto grid items-center gap-10 px-4 py-14  lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-0 lg:py-20">
        <div className="max-w-2xl">
          <h1
            id="banner-title"
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Build Your Ideal
            <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#technologies"
              className="rounded-md bg-linear-to-r from-orange-500 via-pink-500 to-fuchsia-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-md border border-slate-200 bg-white px-10 py-3 text-center text-sm text-slate-600 transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="#"
            className="h-auto w-full max-w-md object-contain sm:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
