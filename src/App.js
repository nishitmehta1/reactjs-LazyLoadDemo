import React from 'react';
import data from './data'
import Posts from './Posts'
import LazyLoad from 'react-lazyload'
import './App.css';

function App() {
  
  const Loading = () => {
    return (
      <div className="post loading">
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            ng-attr-stroke="{{config.color}}"
            ng-attr-stroke-width="{{config.width}}"
            ng-attr-r="{{config.radius}}"
            ng-attr-stroke-dasharray="{{config.dasharray}}"
            stroke="#49d1e0"
            stroke-width="10"
            r="35"
            stroke-dasharray="164.93361431346415 56.97787143782138"
            transform="rotate(275.845 50 50)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    )
  };

  return (
    <div className="App">
      <div className="post-container">
        {
          data.map(
            post =>
              (
                <LazyLoad key={post.id} placeholder={<Loading/>} height={100} offset={[-100,100]}>
                  <Posts id={post.id} body={post.body} title={post.title}/>
                </LazyLoad>
              )
          )
        }
      </div>
    </div>
  );
}

export default App;
