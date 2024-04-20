import AppBar from "../components/app-bar/app-bar";
import Footer from "../components/app-footer/app-footer";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "/about", current: true },
  { name: "Contact", href: "/contact", current: false },
];

export default function About() {
    return (
        <>
        <AppBar navigation={navigation} />
      <div className="container my-24 mx-auto md:px-6 md:p-3 xs:p-1">
        <section className="mb-32">
          <h2 className="mb-16 text-center text-2xl font-bold">
            About Me
          </h2>
          <div className="mb-16 flex flex-wrap">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg"
                  className="w-full"
                  alt="Louvre"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold">That&apos;s the news!</h3>

              <p className="mb-6 text-neutral-500">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                placerat vulputate. Ut vulputate est non quam dignissim
                elementum. Donec a ullamcorper diam.
              </p>
              <p className="text-neutral-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
                nulla saepe rerum aspernatur odio amet perferendis tempora
                mollitia? Ratione unde magni omnis quaerat blanditiis cumque
                dolore placeat rem dignissimos?
              </p>
            </div>
          </div>
          <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg"
                  className="w-full"
                  alt="Louvre"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
              <h3 className="mb-4 text-2xl font-bold">Exhibition in Paris</h3>

              <p className="text-neutral-500">
                Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                porta dui, sit amet rutrum enim massa in ante. Curabitur in
                justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                Cras tempor convallis magna id rhoncus. Suspendisse potenti. Nam
                mattis faucibus imperdiet. Proin tempor lorem at neque tempus
                aliquet. Phasellus at ex volutpat, varius arcu id, aliquam
                lectus. Vestibulum mattis felis quis ex pharetra luctus. Etiam
                luctus sagittis massa, sed iaculis est vehicula ut.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/079.jpg"
                  className="w-full"
                  alt="Louvre"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold">Stock market boom</h3>

              <p className="text-neutral-500 ">
                Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
                tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
                Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
                augue ornare. Proin ac dui vel lectus eleifend vestibulum et
                lobortis risus. Nullam in commodo sapien. Curabitur ut erat
                congue sem finibus eleifend egestas eu metus. Sed ut dolor id
                magna rutrum ultrices ut eget libero. Duis vel porttitor odio.
                Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi
                euismod dignissim malesuada, lacus lorem commodo leo, tristique
                blandit ante mi id metus. Integer et vehicula leo, vitae
                interdum lectus. Praesent nulla purus, commodo at euismod nec,
                blandit ultrices erat. Aliquam eros ipsum, interdum et mattis
                vitae, faucibus vitae justo. Nulla condimentum hendrerit leo, in
                feugiat ipsum condimentum ac. Maecenas sed blandit dolor.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
    )
}