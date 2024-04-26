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
          <h2 className="mb-16 text-center text-2xl font-bold">Услуги</h2>
          <div className="mb-16 flex flex-wrap">
            <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
              <div
                className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init=""
                data-te-ripple-color="light"
              >
                <img
                  src="/materials-background.jpg"
                  className="w-full"
                  alt="maps"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </div>
            <div id="main-div" className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold">МАТЕРИАЛЫ</h3>

              <p className="mb-6 text-neutral-500">
                Не удивлюсь, если самым интересным воспоминанием из детства у
                моих детей будут знакомства со странами. Потому что страна - это
                все: география, история, мифы и великие люди, изобретения,
                природа, достопримечательности. Так знакомиться с миром не
                просто интересно - вы вырабатываете связи между разнородными
                сферами и показываете их целостность.
              </p>
              <p className="text-neutral-500">
                Чтобы вам было проще это сделать, я создала набор пдф, в которых
                делюсь самыми интересными книгами и проектами, которые покажут
                вам Китай, Францию или Монголию с разных сторон. Книги нужно
                будет купить или взять в библиотеке.
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
                  src="/russian-language-background.jpg"
                  className="w-full"
                  alt="books"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
              <h3 className="mb-4 text-2xl font-bold">Русский язык</h3>

              <p className="text-neutral-500">
                Если ребенок научился в семье говорить и читать по русски,
                следующая его задача - научиться грамотно писать и постоянно
                расширять словарный запас. Чтобы язык не зачерствел, не уступил
                английскому, нужна практика. Я буду учить ваших детей писать по
                собственному авторскому учебнику. На уроке будем также играть в
                игры, развивать словарный запас. Я буду читать детям книгу, и мы
                вместе её обсудим.
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
                  src="/grammar-background.jpg"
                  className="w-full"
                  alt="books"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </div>
            <div id="grammar-div" className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
              <h3 className="mb-4 text-2xl font-bold">Грамматика</h3>

              <p className="text-neutral-500">
                Грамматика - это логика языка, его скелет. Программа, по которой
                я преподаю, нацелена на практику. Акцент ставится на том, что
                нужно знать для реальной письменной грамотности, а не владения
                набором терминов. Дети освоятся с частями речи, структурой
                предложения и пунктуацией, научатся избегать типичных ошибок в
                словоупотреблении. Всего в программе 6 уровней, от базового до
                продвинутого. Если вы выбираете курсы для домашнего обучения,
                это графа Language Arts.
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
                  src="/usa-history-background.jpg"
                  className="w-full"
                  alt="books"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
              <h3 className="mb-4 text-2xl font-bold">География США</h3>

              <p className="text-neutral-500">
                Этот курс для 1-6 класса не только про столицы, реки и всякие
                скучности. Он про изюминки каждого штата - про его природу и
                людей, про диковинки и знаменитые на весь мир компании.
                Технические детали можно выучить по списку или в электронной
                игре. Я же вдохновляю воображение, учу любить мир. Урок на
                английском языке. Если вы выбираете курсы для домашнего
                обучения, это графа Social Studies.
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
                  src="/nature-background.jpg"
                  className="w-full"
                  alt="nature"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
              <h3 className="mb-4 text-2xl font-bold">Природоведение</h3>

              <p className="text-neutral-500 ">
                О природе можно говорить бесконечно. У нас так и получается -
                дети не хотят уходить с урока. А если уходят, то бегут
                рассказывать обо всем родителям. Почему кошка втягивает когти?
                Как дерутся жирафы? Зачем дерутся? Что такое эхолокация?
                Почемучкам важно знать, а также восхищаться и удивляться, а
                также думать критично. Я не всегда отвечаю на их вопросы, скорее
                навожу на мысль, учу сопоставлять, делать выводы.
                <br />
                1-6 класс, на русском.
                <br />
                Если вы выбираете курсы для домашнего обучения, это графа
                Science.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
