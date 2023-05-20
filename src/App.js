import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App=()=>{
    return(
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
