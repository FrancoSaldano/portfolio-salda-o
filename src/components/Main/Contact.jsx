const Contact = () => {
  
  return (
    <div className="row-span-4 col-span-2 row-start-2 col-start-2 flex flex-col -mt-20">
      <div>
        <p className="font-title-hammer text-4xl -mx-5 mb-5 text-right text-stone-500">
          CONTACT
        </p>
        <form onSubmit={(event) =>event.preventDefault()}>
          <div className="mb-10 grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group text-left">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-md text-amber-100 bg-transparent border-0 border-b-2 border-stone-400 appearance-none dark:text-white dark:border-stone-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                placeholder=" "
                required={true}
              />
              <label
                htmlFor="floating_first_name"
                className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group text-left">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-md text-amber-100 bg-transparent border-0 border-b-2 border-stone-400 appearance-none dark:text-white dark:border-stone-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                placeholder=" "
                required={true}
              />
              <label
                htmlFor="floating_last_name"
                className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="mt-15 relative z-0 mb-6 w-full group text-left">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-md text-amber-100 bg-transparent border-0 border-b-2 border-stone-400 appearance-none dark:text-white dark:border-stone-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
              placeholder=" "
              required={false}
            />
            <label
              htmlFor="floating_email"
              className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="mt-20 grid md:grid-cols-2 md:gap-6 text-left">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-md text-amber-100 bg-transparent border-0 border-b-2 border-stone-400 appearance-none dark:text-white dark:border-stone-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                placeholder=" "
                required={false}
              />
              <label
                htmlFor="floating_phone"
                className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-md text-amber-100 bg-transparent border-0 border-b-2 border-stone-400 appearance-none dark:text-white dark:border-stone-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                placeholder=" "
                required={true}
              />
              <label
                htmlFor="floating_company"
                className=" peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company (Ex. Google)
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="px-3 py-2 m-4 bg-stone-600 text-stone-100 rounded hover:bg-stone-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
