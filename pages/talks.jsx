import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import { MdiGithub, MdiYoutube, MdiPresentationPlay } from "../assets/Socials";

export default function Talks() {
  return (
    <div>
      <Head>
        <title>Soham Shah | Talks</title>
        <meta name="description" content="Soham Shah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                Talks 🎙
              </h1>
              <p className="text-xl pb-4">
                I am a true believer of `One&apos;s Knowledge amplifies
                exponentially, when shared.` And so, I love giving Tech Talks at
                various Meetups and Conferences to share my learnings with the
                community. I speak about Frontend Technologies, Tooling and
                interesting things about the Web.
              </p>
            </div>
            <div className="border-b-2">
              <ul className="text-xl pb-4">
                <li className="my-4">
                  <h2 className="text-2xl pb-2 text-gray-900 dark:text-gray-200 font-bold">
                    WHY TO and HOW TO Snowpack your Web Apps -
                    <a
                      className="text-blue-500 hover:text-blue-800 hover:underline text-2xl mx-1"
                      href="https://www.meetup.com/JavaScriptMeetup/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @JavaScriptMeetupBLR
                    </a>
                  </h2>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      <MdiGithub className="text-2xl" />{" "}
                      <span>
                        {" "}
                        <a
                          className="text-blue-500 hover:text-blue-800 hover:underline text-lg mx-1"
                          href="https://github.com/sohamsshah/talk-supplies/tree/main/jsmeetupblr"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Resources{" "}
                        </a>{" "}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MdiPresentationPlay className="text-2xl" />{" "}
                      <span>
                        {" "}
                        <a
                          className="text-blue-500 hover:text-blue-800 hover:underline text-lg mx-1"
                          href="https://www.canva.com/design/DAEsQiDrB5A/share/preview?token=kJRgLHP39tB_aHVJaDAy8A&role=EDITOR&utm_content=DAEsQiDrB5A&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Slides{" "}
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <p className="mb-2">
                    Delivered a Talk on Snowpack and Unbundled Development on
                    9th October, 2021; where we discussed everything in and out
                    of this build tool. The topics covered in the session are:
                    <ul className="my-2 list-disc pl-6">
                      <li>History of JS Bundling</li>
                      <li>Physics of Snowpack</li>
                      <li>Chemistry of Snowpack</li>
                      <li>Mathematics of Snowpack</li>
                      <li>Biology of Snowpack</li>
                      <li>Lab Work (LIVE CODE)</li>
                    </ul>
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Theme</span>:
                    Physics-Chemistry-Mathematics-Biology Science Subjects
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="text-2xl pb-2 text-gray-900 dark:text-gray-200 font-bold">
                    PULL REQUEST (Open source Workshop) -{" "}
                    <a
                      className="text-blue-500 hover:text-blue-800 hover:underline text-2xl mx-1"
                      href="https://sites.google.com/view/dscghrce/home"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Google Developer Students Club @GHRCE
                    </a>
                  </h2>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      <MdiYoutube className="text-2xl" />{" "}
                      <span>
                        {" "}
                        <a
                          className="text-blue-500 hover:text-blue-800 hover:underline text-lg mx-1"
                          href="https://www.youtube.com/watch?v=bFkSf6g1vms"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Watch{" "}
                        </a>{" "}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MdiPresentationPlay className="text-2xl" />{" "}
                      <span>
                        {" "}
                        <a
                          className="text-blue-500 hover:text-blue-800 hover:underline text-lg mx-1"
                          href="https://www.canva.com/design/DAErdkZtqCk/share/preview?token=S6sig1TGB8qzug5Q1mGa1g&role=EDITOR&utm_content=DAErdkZtqCk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Slides{" "}
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <p className="mb-2">
                    Conducted an Open Source Workshop at GDSC-GHRCE which
                    revolved around Open Source, Git and Github on 2 Oct, 2021.
                    The topics covered in the session are:
                    <ul className="my-2 list-disc pl-6">
                      <li>
                        What is Open Source (Story: Hermione and Her Wizchat)
                      </li>
                      <li>Why to Contribute to Open Source</li>
                      <li>Git and Github</li>
                      <li>Making our first ever PULL REQUEST</li>
                      <li>The 7 Open Source Spirits</li>
                      <li>Open Source Programs and Opportunities</li>
                      <li>Participating in Hacktoberfest</li>
                      <li>Where to Start From</li>
                    </ul>
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Theme</span>: Harry Potter
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="text-2xl pb-2 text-gray-900 dark:text-gray-200 font-bold">
                    UNBUNDLED: The Future of Frontend Tooling -{" "}
                    <a
                      className="text-blue-500 hover:text-blue-800 hover:underline text-2xl mx-1"
                      href="https://www.meetup.com/React-Native-Bangalore-Meetup/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ReactNativeBLR @geekyAnts
                    </a>
                  </h2>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      <MdiYoutube className="text-2xl" />{" "}
                      <span>
                        {" "}
                        <a
                          className="text-blue-500 hover:text-blue-800 hover:underline text-lg mx-1"
                          href="https://www.youtube.com/watch?v=v13fju8L-Q8"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Watch{" "}
                        </a>{" "}
                      </span>
                    </div>
                    <div className="flex items-center mr-2">
                      <MdiGithub className="text-2xl" />{" "}
                      <span>
                        {" "}
                        <a
                          className="text-blue-500 hover:text-blue-800 hover:underline text-lg mx-1"
                          href="https://github.com/sohamsshah/talk-supplies/tree/main/rnblr-meetup"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Resources{" "}
                        </a>{" "}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MdiPresentationPlay className="text-2xl" />{" "}
                      <span>
                        {" "}
                        <a
                          className="text-blue-500 hover:text-blue-800 hover:underline text-lg mx-1"
                          href="https://www.canva.com/design/DAEo652kwqQ/share/preview?token=50dClE79h-f_-lvCylvKxQ&role=EDITOR&utm_content=DAEo652kwqQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Slides{" "}
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <p className="mb-2">
                    Delivered a talk on Unbundled Development at ReactNativeBLR
                    organized by geekyAnts on 11 Sept, 2021. Discussed about
                    JavaScript Bundling, Build Tools, Vite.js, Snowpack and a
                    lot of interesting things. The topics covered in the session
                    are:
                    <ul className="my-2 list-disc pl-6">
                      <li>A brief History of JavaScript Bundling</li>
                      <li>Idea of Unbundled Development</li>
                      <li>The Philosophy Behind Snowpack</li>
                      <li>The Science Behind Snowpack</li>
                      <li>The Philosophy Behind Vite.js</li>
                      <li>The Science Behind Vite.js</li>
                      <li>Comparison between Vite.js and Snowpack</li>
                    </ul>
                  </p>

                  <p className="mb-2">
                    <span className="font-medium">Theme</span>: Philosophy Vs.
                    Science
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="text-2xl pb-2 text-gray-900 dark:text-gray-200 font-bold">
                    Building, testing and Publishing your own React Component
                    Library -{" "}
                    <a
                      className="text-blue-500 hover:text-blue-800 hover:underline text-2xl mx-1"
                      href="https://www.meetup.com/ReactJS-Bangalore/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ReactJSBangalore @reactify_in
                    </a>
                  </h2>
                  <div className="flex items-center mr-2">
                    <div className="flex items-center mr-2">
                      <MdiYoutube className="text-2xl" />{" "}
                      <span>
                        {" "}
                        <a
                          className="text-blue-500 hover:text-blue-800 hover:underline text-lg mx-1"
                          href="https://www.youtube.com/watch?v=mp3SIa1H1rI"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Watch{" "}
                        </a>{" "}
                      </span>
                    </div>
                    <div className="flex items-center mr-2">
                      <MdiGithub className="text-2xl" />{" "}
                      <span>
                        {" "}
                        <a
                          className="text-blue-500 hover:text-blue-800 hover:underline text-lg mx-1"
                          href="https://github.com/sohamsshah/talk-supplies/tree/main/reactjs-meetup-14"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Resources{" "}
                        </a>{" "}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MdiPresentationPlay className="text-2xl" />{" "}
                      <span>
                        {" "}
                        <a
                          className="text-blue-500 hover:text-blue-800 hover:underline text-lg mx-1"
                          href="https://docs.google.com/presentation/d/1VOcL18u8rQ18i7U6LVso_SgSXZPyVFfeWea1ux49w-k/edit?usp=sharing"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Slides{" "}
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                  <p className="mb-2">
                    Gave a talk at ReactJS Bangalore organized by reactify on 10
                    July, 2021. Discussed upon how to build developer products
                    such as libraries, open source projects, tools etc. Along
                    with tech explanation, there was a lot of live-code and
                    eventually we publish our own React Component Library to
                    NPM. The topics covered in the session are:
                    <ul className="my-2 list-disc pl-6">
                      <li>What are Design Systems</li>
                      <li>Why We Need Design Systems</li>
                      <li>How can we implement them?</li>
                      <li>WHAT is Storybook and WHY shall one consider it?</li>
                      <li>HOW to use Storybook?</li>
                      <li>WHAT is Rollup?</li>
                      <li>WHY Rollup?</li>
                      <li>Some Open Source Stalking</li>
                      <li>Some tips from the experts</li>
                    </ul>
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Theme</span>: The What, Why,
                    How Principle
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
