import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soham Shah</title>
        <meta name="description" content="Soham Shah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                Soham Shah 👋
              </h1>
              <p className="text-xl pb-4">
                Hey, there! Welcome to my Website. I am Soham Shah - Software
                Engineer based in India.
              </p>
              <p className="text-xl">
                I am a final year student at Adani Institute, currently pursuing
                Information and Communication Technology Engineering.
              </p>
              <p className="text-xl pb-4">
                My experience revolves around developing full-stack
                applications, frontend web-tooling, npm-packages and libraries
                and design systems. I also have research exposure in the areas
                of articifial intelligence and robotics and published patent and
                research work around it.
              </p>
              <p className="text-xl pb-4">
                I have been involved with Google Developer Student Clubs- GHRCE
                and Adani Institute of Innovation Hub (AIIH) and have organized
                workshops, talks and hackathons for the community. I am also a
                passionate open source contributor and tech speaker.
              </p>
              <p className="text-lg pb-10">
                <Link href="/about">
                  <a className="hover:underline">Learn More...</a>
                </Link>
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Tech Stack 🛠
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                  <span className="underline">Languages</span>: JavaScript,
                  TypeScript, Java, Python, HTML5, CSS3{" "}
                </li>
                <li className="my-2">
                  <span className="underline">Frameworks and Libraries</span>:
                  React.js, Next, Node, Express, Tensorflow, OpenCV
                </li>
                <li className="my-2">
                  <span className="underline">Platforms</span>: Git (Github and
                  Gitlab), Heroku, AWS, Google Firebase
                </li>
                <li className="my-2">
                  <span className="underline">Database</span>: MongoDB, SQL,
                  PostgreSQL
                </li>
                <li className="my-2">
                  <span className="underline">Design Libraries</span>:
                  TailwindCSS, Bootstrap, MaterialUI, AntDesign
                </li>
              </ul>
              <p className="text-lg pb-10">
                <Link href="/resume">
                  <a className="hover:underline">Learn More...</a>
                </Link>
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Recent Tech Talks 🎙
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://www.youtube.com/watch?v=bFkSf6g1vms&t=1984s"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      PULL REQUEST (Open source Workshop)
                    </a>
                  </span>
                  <span className="font-500"> @GDSC-GHRCE</span>{" "}
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://www.youtube.com/watch?t=4112&v=v13fju8L-Q8&feature=youtu.be"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      UNBUNDLED: The Future of Frontend Tooling
                    </a>
                  </span>
                  <span className="font-500"> @ReactNativeBLR</span>{" "}
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://www.youtube.com/watch?v=mp3SIa1H1rI"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Building, testing and Publishing your own React Component
                      Library
                    </a>
                  </span>
                  <span className="font-500"> @ReactJSBangalore</span>{" "}
                </li>
              </ul>
              <p className="text-lg pb-10">
                <Link href="/talks">
                  <a className="hover:underline">Learn More...</a>
                </Link>
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Recent Blog Posts 📚
              </p>
              <ul className="text-xl pb-4">
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://sohamsshah.hashnode.dev/top-12-tips-on-how-to-excel-at-your-developer-job"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Top 12 Tips on how to excel 🚀at your developer job!
                    </a>
                  </span>
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://sohamsshah.hashnode.dev/know-how-git-works-behind-the-scenes-aa40567082ba"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Know how Git works: Behind the Scenes!🤯
                    </a>
                  </span>
                </li>
                <li className="my-2">
                  <span>
                    <a
                      className="underline"
                      href="https://sohamsshah.hashnode.dev/7-open-source-spirits-you-must-know"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      7 Open Source Spirits you must know!
                    </a>
                  </span>
                </li>
              </ul>
              <p className="text-lg pb-10">
                <a
                  className="hover:underline"
                  href="https://sohamsshah.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn More...
                </a>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
