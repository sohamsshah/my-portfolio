import Head from "next/head";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Soham Shah | Resume</title>
        <meta name="description" content="Soham Shah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="lg:mx-56 mx-8 flex flex-col h-screen justify-between">
        <div>
          <Navbar />
          <div className="text-gray-600 dark:text-gray-400">
            <div className="mt-2 border-b-2">
              <h1 className="text-6xl font-bold pb-6 text-gray-900 dark:text-gray-200">
                Resume 📃
              </h1>
            </div>
            <h2 className="text-4xl pt-4 font-bold text-gray-900 dark:text-gray-200">
              Soham S. Shah
            </h2>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Objective
              </p>
              <p className="text-xl pb-6">
                I aim to deliver applications that are scalable, thoughtfully
                crafted and that make use of best coding practices at work. I am
                dynamic for learning new technologies and implementing them to
                develop as per the requirement. I aspire to create an impact
                from my work and help the developer community along witnessing
                personal growth and exposure.
              </p>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Work Experience 👨‍💻
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Full Stack Developer - Quicko
                  </h2>
                  <h3>April 2021 - June 2021</h3>
                  <ul className="my-2">
                    <li>
                      - Lead the Flutter development project and developed a
                      fully functional Mobile and a Progressive Web App.
                    </li>
                    <li>
                      - Published the app to production after UAT tests that was
                      further used by more than 10K users.
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Project Mentor, GirlScript Summer of Code (GSSoC&apos;21)
                  </h2>
                  <h3>March 2021 - June 2021</h3>
                  <ul className="my-2">
                    <li>
                      - Mentored 50+ GSSoC&apos;21 Participants at RottenScripts
                      for Python and JavaScript related features and bugs
                    </li>
                    <li>
                      - Successfully merged 90+ PRs and performed 40+ extensive
                      code-reviews during the program
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Software Developer, BotCart.co
                  </h2>
                  <h3>September 2020 - November 2020</h3>
                  <ul className="my-2">
                    <li>
                      - Wrote code to revamp and redesign the Frontend of the
                      Web Application using React.js
                    </li>
                    <li>
                      - Worked to integrate the Application with Slack Channels
                      by using Slack API and Bolt.js Framework
                    </li>
                    <li>
                      - Implemented the RASA ChatBot framework with Python and
                      researched NLP patterns
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Community Experience 🌐
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Community Outreach Team Member at Google Developer Students
                    Club, GHRCE
                  </h2>
                  <ul className="my-2">
                    <li>
                      - Managed the Technical Community at DSC-GHRCE - Organized
                      events and meetups
                    </li>
                    <li>
                      - Involved myself in planning, marketing and other events
                      of the club
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Robotics Lead, AIIH Club
                  </h2>
                  <ul className="my-2">
                    <li>
                      - Organized Robotics workshops and conducted Hackathons
                      for 1000+ students
                    </li>
                    <li>
                      - Gave Talks on Embedded programming and Artificial
                      Intelligence
                    </li>
                    <li>
                      - Conducted Workshops for students of remote-area colleges
                      who have less exposure to latest technologies
                    </li>
                    <li>
                      - Provided Robotics training for School Students and
                      helped beginners to explore and learn the technology{" "}
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Community Developer, Activeloop AI
                  </h2>
                  <ul className="my-2">
                    <li>
                      - Proposed initiative of tech-talks, developer meetups,
                      open source contributions, rewards, etc. for the
                      ActiveloopAI community.
                    </li>
                    <li>
                      - Closely worked with the core team for the community
                      events along with Open Source contributions
                    </li>
                  </ul>
                </li>
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Open Source and Web Development Mentor, Ingenious Hackathon,
                    Ahmedabad University
                  </h2>
                  <ul className="my-2">
                    <li>
                      - &apos;Ingenious Hackathon&apos; which is a 48-hour
                      intensive coding hackathon partnered with IEEE organized
                      by Ahmedabad University.
                    </li>
                    <li>
                      - To suggest improvements and review of their idea and
                      project
                    </li>
                    <li>
                      - Helped the hackers in bugs or blockers while the 48 hour
                      hackathon span
                    </li>
                    <li>
                      - Solved the queries of the hackers in the field of Open
                      Source, Web Development and Artificial Intelligence.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-bold">
                Tech Stack 🛠
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
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
            </div>
            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Education
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  <h2 className="font-medium text-gray-900 dark:text-gray-200 text-xl mb-2">
                    Adani Institute of Infrastructure Engineering
                  </h2>
                  <ul className="my-2">
                    <li>
                      Major: Information and Communication Technology (ICT)
                    </li>
                    <li>CGPA: 9.52</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="border-b-2">
              <p className="text-3xl pb-2 pt-10 text-gray-900 dark:text-gray-200 font-medium">
                Awards and Achievements 🏆
              </p>
              <ul className="text-xl pb-4 pl-6 list-disc">
                <li className="my-4">
                  My Research paper entitled &apos;SOC Estimation using
                  Filter-based and Data-driven Techniques&apos; got published in
                  &apos;Research Challenges in Science, Engineering and
                  Technology&apos; by NOVA publications USA.
                </li>
                <li className="my-4">
                  Wrote a review paper entitled &apos;Embedded Systems and
                  Computer Vision Techniques utilized in Spray Painting
                  Robots&apos; which currently under review stage at Elsevier
                  publications.
                </li>
                <li className="my-4">
                  Patent for &apos;Automatic Spray-Painting Robot for Road
                  Markings&apos; has been successfully published under Indian
                  Patents.
                </li>
                <li className="my-4">
                  Winners, AIIH 24-Hour Robotics Hackathon
                </li>
                <li className="my-4">Semi-finalists, EYRC IIT-Bombay</li>
                <li className="my-4">
                  Top Contributor of the month, ActiveloopAI Hub
                </li>
                <li className="my-4">
                  Winners, Innovate to Impact(i2i) category across Gujarat state
                  organized by &apos;Gujarat Innovation and Startup
                  Council(GISC)&apos;, 2020-2021
                </li>
                <li className="my-4">
                  Best Initiative Award, Innovative Student&apos;s Co-creation
                  Award for Leadership and Excellence (i-SCALE) category across
                  Gujarat state organized by &apos;Gujarat Innovation and
                  Startup Council(GISC)&apos;, 2019-2020
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
