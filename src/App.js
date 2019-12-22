import React from "react";
import "./App.css";
import AppNavbar from "./components/navbar/navbar";
import Landing from "./pages/landing/landing";
import Watch from "./pages/watch/watch";
import Dashboard from "./pages/dashboard/dashboard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import thumb1 from "./components/video.card/thumbs/1.jpg";
import thumb2 from "./components/video.card/thumbs/2.jpg";
// import VideoArea from "./components/video.area/video.area";
// import VideoList from "./components/video.list/video.list";
// import CaptureToggle from "./components/captureToggle/captureToggle";

function App() {
  const videos = [
    {
      title: "Cartoon video",
      subtitle: "subtext",
      url:
        "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      thumbnail: thumb1
    },
    {
      title: "Demo video",
      subtitle: "don't read",
      url:
        "https://doc-00-4o-docs.googleusercontent.com/docs/securesc/skf7maoc7v0i9k5m61tcus4vfp2sl54g/fmdht5c7b6i4rcd86ur2597lmnaardbp/1576980000000/05353733768379011654/05353733768379011654/1zo8qV5fDrWQ5AXNH2Lv1-s_dRmQaOiga?e=download&authuser=0",
      thumbnail: thumb2
    }
  ];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <AppNavbar />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route
              path="/watch"
              exact
              component={() => <Watch videos={videos} />}
            />
            <Route
              path="/dashboard"
              exact
              component={() => <Dashboard videos={videos} />}
            />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
