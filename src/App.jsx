
function App() {

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-200 dark:bg-gray-900">
        <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-7 sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-8 sm:flex-shrink-0 dark:bg-gray-800 sm:dark:hover:bg-gray-700">
          <img className="h-24 mx-auto rounded-full ring-4 transform hover:scale-105 duration-500" src="https://avatars.githubusercontent.com/u/22427255?s=400&u=5b94b3f244d001949d46062f423add93e82a158c&v=4" alt="" />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <h1 className="text-lg text-black font-semibold dark:text-gray-300">Learn with Foysal</h1>
              <p className="text-gray-500 font-medium dark:text-gray-400">Youtube Channel</p>
            </div>
            <button className="btn btn-purple">Visit Now</button>
            <button className="btn btn-green rounded-md ml-2">Details</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
