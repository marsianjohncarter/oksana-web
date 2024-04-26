import { Link } from "react-router-dom"
import AppBar from "../components/app-bar/app-bar";
import Footer from "../components/app-footer/app-footer";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

export default function Home() {
  return (
    <>
      <AppBar navigation={navigation} />

      <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
        <div className="relative">
          <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-2xl p-5 mb-40">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="/avatar.png"
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-semibold mt-3">
              Оксана Гермоковская
            </h2>
            <p className="text-center text-gray-600 mt-1">Software Engineer</p>

            <div className="mt-5">
              <h3 className="text-xl font-semibold">Bio</h3>
              <p className="text-gray-600 mt-2">
                John is a software engineer with over 10 years of experience in
                developing web and mobile applications. He is skilled in
                JavaScript, React, and Node.js.
              </p>
            </div>
          </div>
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                    <img
                      xmlns="http://www.w3.org/2000/svg"
                      src="/book.png"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-dark">
                  МАТЕРИАЛЫ
                  </h2>
                  <p className="mt-4 text-lg text-gray-900">
                    Не удивлюсь, если самым интересным воспоминанием из детства
                    у моих детей будут знакомства со странами. Потому что страна
                    - это все: география, история, мифы и великие люди,
                    изобретения, природа, достопримe. . .
                  </p>
                  <div className="mt-6">
             
                    <Link className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700" to="/about#main-div">Узнать больше</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width={647}
                  height={486}
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="/materials-background.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
                    <img
                      src="/pen.png"
                      xmlns="http://www.w3.org/2000/svg"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-dark">
                    Грамматика
                  </h2>
                  <p className="mt-4 text-lg text-gray-900">
                    Грамматика - это логика языка, его скелет. Программа, по
                    которой я преподаю, нацелена на практику. Акцент ставится на
                    том, что нужно знать для реальной письменной грамотн. . .
                  </p>
                  <div className="mt-6">
                  <Link className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700" to="/about#grammar-div">Узнать больше</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  alt="Inbox user interface"
                  loading="lazy"
                  width={647}
                  height={486}
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src="/grammar-background.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
