import MyApp from "./components/MyApp";

function App() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-center py-10 text-6xl">Random Color</h2>
        <div className="flex flex-wrap">
          <MyApp className="w-40" />
        </div>
      </div>
    </>
  );
}

export default App;
