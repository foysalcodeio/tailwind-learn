
function App() {

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <div className="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-6 sm:flex sm:items-center sm:py-4 sm:space-y-0 sm:space-x-7 sm:flex-shrink-0">
          <img className="h-24 mx-auto rounded-full ring-4 transform hover:scale-105 duration-500" src="https://avatars.githubusercontent.com/u/22427255?s=400&u=5b94b3f244d001949d46062f423add93e82a158c&v=4" alt="" />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-2xl text-black font-semibold">Learn with Foysal</p>
              <p className="text-gray-500 font-medium">Youtube Channel</p>
            </div>
            <button className="px-4 py-2 border border-purple-200 rounded-full text-md text-purple-600 font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Visit Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
