import './App.css';

function App() {
  return (
    <div className="title">
        <h1> This is h1</h1>
        <h2> This is h2</h2>
        <h3> This is h3</h3>
        <CompApp />
        {CompApp}
        <CompApp></CompApp>
    </div>
  );
}

const CompApp = () => {
  return (
    <>
      <p> This is a test for calling compApp component inside other component</p>
      <p> This is a second paragraph</p>
    </>
  )
}


export default App;
