import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Head>
        <title>Soham Shah | About</title>
        <meta name="description" content="Soham Shah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                About 🙋‍♂️
              </h1>
            </div>
            <div className="flex md:flex-row flex-col py-10 justify-around items-start">
              <div className="w-full border-2 p-4 shadow-md rounded-md border-50">
                <Image src="/displayPicture.jpg" height="300" width="300" />
                <h2>
                  <span className="text-lg font-bold text-gray-900 dark:text-gray-200">
                    Soham Shah
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    Software Engineer
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    India
                  </span>
                </h2>
                <h2>
                  <span className="text-md text-gray-900 dark:text-gray-200">
                    sohamshah456@gmail.com
                  </span>
                </h2>
              </div>
              <div className="md:pl-16 md:pt-0 pl-0 pt-8 pr-4 md:pr-16">
                <h2 className="text-3xl font-bold pb-4 text-gray-900 dark:text-gray-200">
                  {" "}
                  Hi 👋 I'm Soham Shah
                </h2>
                <p className="text-lg pb-4">
                  I am a passionate engineer; here with an aim to create
                  positive impact - with the power of code. Programming in
                  simple terms actually boils down to one purpose - "Problem
                  Solving". Thus, I don't prefer confining myself to a
                  particular language or framework; and instead being extremely
                  dynamic to learn and build whatever problem demands.
                </p>
                <p className="text-lg pb-4">
                  I am currently an undergraduate student of Information and
                  Communication Technology (ICT) at Adani Institute of
                  Infrastructure Enginnering. Have been organizing and mentoring
                  various workshops, hackathons and community events. I am
                  ardent about the Startup Culture, Computer Science Research
                  and Product Engineering.
                </p>
                <p className="text-lg pb-4">
                  Presently, I am aligned to Web Technologies and Tooling and
                  play with Frontend everyday. Also, I possess decent experience
                  with Machine Learning and Computer Vision Paradigms of
                  Computer Science; where research interest lies.
                </p>
                <p className="text-lg pb-4">
                  If not programming, you can find me singing, reading
                  philosophy and cosmology, writing poetry or making funny
                  programming memes on my Instagram meme page.
                </p>
                <p className="text-lg pb-4">
                  Want to dicuss tech, ideas or opportunities? You can always
                  reach out to me on:
                </p>
                <ul className="text-xl pb-4">
                  <li className="my-2">
                    Mail:{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      sohamshah456@gmail.com
                    </a>
                  </li>
                  <li className="my-2">
                    Github:{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      @sohamsshah
                    </a>
                  </li>
                  <li className="my-2">
                    Twitter:{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      @sohamsshah_
                    </a>
                  </li>

                  <li className="my-2">
                    Linkedin:{" "}
                    <a
                      href=""
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      in/sohamshah456
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
