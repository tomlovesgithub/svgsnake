import React from 'react'
// import {isMobile} from 'react-device-detect';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: []
    };
  }

  move(evt) {
    if (evt.target.tagName.toLowerCase() === 'svg') {
      evt.preventDefault();
      var svgPos = this.refs.svg.getBoundingClientRect();
      var x = evt.clientX,
      y = evt.clientY;
      if (evt.type==='touchmove') {
        evt.preventDefault();
        x = evt.touches[0].pageX
        y = evt.touches[0].pageY;
      }
      x = x - svgPos.left;
      y = y - svgPos.top;
      var points = this.state.points;
      if (points.length > 50) {
        points.shift();
      }
      points.push({
        x: x,
        y: y
      });
      this.setState(points);
    }
  }
  render() {
    var points = <circle cx="100" cy="100" r="1" />;
    if (this.state.points.length > 0) {
      var allPoints = this.state.points,
      d = '';
      points = allPoints.map(function(point, i) {
        var last = (i === allPoints.length - 1);
        var first = (i === 0);
        if (first) {
          d += 'M ';
        }
        d += ' ' + point.x + ' ' + point.y;
        if (first) {
          d += ' L ';
        }
        if (last) {
          return <path key={i} stroke="grey" strokeLinecap="round" fill="none" strokeWidth="30" d={d}/>
        }
        else {
          return null
        };
      });

    }

    return (
      <div onMouseMove={this.move.bind(this)} onTouchMove={this.move.bind(this)}>
      <svg ref="svg" width="100vw" height="100vh">
      <defs>
      <marker id="arrow" markerWidth="4" markerHeight="20" refX="0" refY="4" orient="auto" markerUnits="strokeWidth" viewBox="0 0 50 50">
      <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
      </marker>
      </defs>
      {points}
      </svg>
      </div>
    )
  }
}

export default App
