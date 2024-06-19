import './App.css';

function App() {
  const title = "Welcome to my new blog";
  const likes = 50;
  // const person = { name : "yoshi", age : 30}
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p> Liked: {likes} times</p>

        {/* <p> {person}</p> //error */}
        <p> { 10 } </p> {/*10*/}
        <p> {"Hello, jojo"} </p> {/*Hello, jojo*/}
        <p> {[1,2,3,4,5]} </p> {/*1,2,3,4,5*/}
        <p> { Math.random() * 10} </p> {/*random number*/}

        <a href={link}> Google Site</a>

      </div>
    </div>
  );
}

export default App;
