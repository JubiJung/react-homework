import React from "react";
import TermsList from "../components/TermsList";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="sr-only">아토믹 과제</h1>
      <main className="h-[560px]">
        <TermsList />
      </main>
    </>
  );
}

export default App;
