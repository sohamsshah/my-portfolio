import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soham Shah | Projects</title>
        <meta name="description" content="Soham Shah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900">
                Projects 💻
              </h1>
              <p className="text-xl pb-4">
                I build and break stuff to experiment with technologies I am
                passionate about. My Projects consist of full-stack
                applications, libraries/npm-packages, open-source and things
                that gave me dopamine hits during their development.
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 font-bold">
                Ongoing 🚶‍♂️
              </p>
              <ul className="text-xl pb-4 list-disc">
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    OpenSwags.io
                  </h2>
                  <p className="mb-2">
                    <b>OpenSwags.io</b> is an e-commerce platform for Open
                    Source Enthusiasts to buy swags from virtual currency which
                    is earned by contributing to Open Source. Implemented
                    authentication, cart, wishlist, checkout and dynamic product
                    and project listing features.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: React,
                    MongoDB, Express, Node
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    askNeoG
                  </h2>
                  <p className="mb-2">
                    <b>askNeoG</b> is an internal stackoverflow for the students
                    of NeoG Camp Cohort 22. It consists of features such as
                    authentication, upvote, ask questions, comment, reply,
                    topics search, create teams etc.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: Next.js,
                    Express.js, TypeScript, MongoDB
                  </p>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 font-bold">
                Built ⌨🔧
              </p>
              <ul className="text-xl pb-4 list-disc">
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    mockBee
                  </h2>
                  <p className="mb-2">
                    <b>mockBee</b> gives you Fake Backend APIs for you to build
                    awesome Frontend Projects! It is a collection of
                    fine-crafted APIs for awesome web applications such as
                    e-commerce, video-library, social media etc. It is easily
                    configurable, highly customizable and all app APIs are
                    packed with cool features 🔥
                  </p>
                  <p className="mb-2">
                    Also, MockBee is still actively developed and more and more
                    new APIs are being added to the project for helping more and
                    more frontend devs in the community!🚀
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: MirageJS,
                    Docusaurus, React, npx, prompt, JavaScript, Rollup
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    Sodium UI Component Library
                  </h2>
                  <p className="mb-2">
                    <b>Sodium UI</b> is a frontend react-based web component
                    library similar to Material UI or Chakra UI. Components are
                    built by following Atomic Design principles. Bundling of the
                    Library is performed with Rollup. The Web Components are
                    well-documented accompanied by a Docsite; created with React
                    from scratch.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: React,
                    Storybook, NPM, Rollup, CSS
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    Sodium Infinite Scroll Component
                  </h2>
                  <p className="mb-2">
                    <b>sodium-infinite-scroller</b> is a simple, zero-dependency
                    and awesome React Infinite ♾ Scrolling Component based on
                    Intersection Observer API. Powered by Vite.js
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: React,
                    IntersectionObserverAPI, Vite.js
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    REStream
                  </h2>
                  <p className="mb-2">
                    <b>REStream</b> is a full stack video streaming platform for
                    researchers which is distraction-free and niche-specific app
                    for budding researchers. Configured features such as follow,
                    like videos, create and add to playlist, browse by
                    categories, search history.
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: React,
                    Express, MongoDB, Node, Atomic Design
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    pixelsHash
                  </h2>
                  <p className="mb-2">
                    <b>pixelsHash</b> is the Go-to place for High Quality,
                    Beautiful and Picturesque 3-D matrices of Pixels - hashed
                    perfectly for you to describe your thoughts in high
                    resolution! 🖼⚡ You can view, search and download everything
                    that you want! Powered By Unsplash! It has features such as
                    infinite scrolling, save search history, great lighthouse
                    score, download pictures, profanity filter, toggle view and
                    many more!
                  </p>
                  <p className="mb-2">
                    <span className="font-medium">Built With</span>: Next,
                    Unsplash API, React Skeleton, React Select, TailwindCSS
                  </p>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 font-bold">
                Contributed 💖
              </p>
              <ul className="text-xl pb-4">
                <li className="my-4">
                  <h2 className="font-medium text-2xl mb-2">
                    caMicroscope | ActiveloopAI | Remotion
                  </h2>
                  <h2 className="font-medium text-2xl mb-2">
                    Next | React-Bootstrap | MDN Web Docs
                  </h2>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 font-bold">
                Maintaining 🤓
              </p>
              <ul className="text-xl pb-4 list-disc">
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    Rotten_Scripts
                  </h2>
                  <p className="mb-2">
                    <b>Rotten_Scripts</b> contains amazing and awesome scripts
                    written in Python, JavaScript, Bash, Powershell, and more.
                    Major work revolves around creating new issues, helping
                    contributors with existing features/bugs, reviewing PRs and
                    overall maintaining the repository.
                  </p>
                </li>
                <li className="my-4">
                  <h2 className="font-medium underline text-2xl mb-2">
                    JavaScriptONLY
                  </h2>
                  <p className="mb-2">
                    <b>JavaScriptONLY</b> is a well-curated content for
                    refering/learning JavaScript. Have added JavaScript Notes,
                    Code Snippets, Resources, Books, Interview Questions and a
                    lot more. Generally I share and document my learnings here,
                    together with the community.
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
