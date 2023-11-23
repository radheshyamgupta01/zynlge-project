import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="main">
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="eight columns offset-by-two">
                <h1 className="headline">Career 360</h1>
              </div>
            </div>

            <div className="row">
              <div className="eight columns offset-by-two">
                <form action="" className="wiki-search-form">
                  <input
                    type="search"
                    placeholder="Search Colleges ,Exams,Courses & more..."
                    className="wiki-search-input"
                  
                  />
                  <button className="button btn btn-wiki">JEE Main College Predictor  </button>
                  <a
                    className="button btn btn-lucky"
                    href="http://en.wikipedia.org/wiki/Special:Random"
                    target="_blank"
                  >
                NEET College Predictor
                  </a>
                </form>
              </div>
            </div>

            <div className="row">
             
            </div>
          </div>
        </div>

        <div className="result hidden">
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="two-thirds column">
                  <form action="" className="result-wiki-search-form">
                    <input
                      type="text"
                      placeholder="Search Wikipedia..."
                      className="result-wiki-search-form-input"
                   
                    />
                    <button className="btn result-btn-wiki">Wiki Search</button>
                  </form>
                </div>
                <div class="one-third column">
                  <h1>Wikipedia Search</h1>
                </div>
              </div>
            </div>
          </header>

          {/* <div className="container">
            <section className="search-results">
              <div className="one-half column">
                <div className="display-results"></div>
              </div>
            </section>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
