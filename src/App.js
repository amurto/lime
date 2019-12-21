import React from "react";
import "./App.css";
import AppNavbar from "./components/navbar/navbar";
import VideoArea from "./components/video.area/video.area";
import VideoList from "./components/video.list/video.list";
import CaptureToggle from "./components/captureToggle/captureToggle";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppNavbar />
        <CaptureToggle />
        <VideoArea />
        <VideoList />
      </header>
    </div>
  );
}

export default App;
