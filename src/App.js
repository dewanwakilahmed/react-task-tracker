import React from "react"; // required for class based component

// import Header from "./components/Header";

// function App() {
//   // const name = "Dewan";
//   // const x = true;

//   return (
//     <div className="container">
//       {/* <h1>Hello from React!</h1> */}
//       {/* <h2>Hello {name}</h2> */}
//       {/* <h2>{x ? "Yes" : "No"}</h2> */}
//       <Header />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return <h1>Hello from a Class!</h1>;
  }
}

export default App;
