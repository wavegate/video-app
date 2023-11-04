import ReactFullpage from "@fullpage/react-fullpage";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <>
      <Video></Video>
      <Video></Video>
      <ReactFullpage
        //fullpage options
        licenseKey={"gplv3-license"}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Video></Video>
              </div>
              <div className="section">
                <Video></Video>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

export default App;
