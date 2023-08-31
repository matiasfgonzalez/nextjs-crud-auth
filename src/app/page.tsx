import ButtonAuth from "@/components/ButtonAuth";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Front End
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Front End para probar la API creada con NESTJS
                </h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <strong>API:</strong>
                </p>

                <a
                  className="text-indigo-500 inline-flex items-center"
                  href={process.env.NEXT_PUBLIC_BACKEND_URL_DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir a la documentación
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ButtonAuth />
    </div>
  );
};

export default HomePage;
