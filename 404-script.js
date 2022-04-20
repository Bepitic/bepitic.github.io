* {
  border: none;
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
canvas {
  background: white;
  background: radial-gradient(#FFF, #DDD);
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}
.ui {
  display: none;
  position: fixed;
  z-index: 5;
  bottom: 0;
  left: 0;
  width: 120px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.7);
}
.ui p {
  font-size: 11px;
  font-weight: 700;
}
.ui p.zoom {
  margin-bottom: 5px;
}
.ui p.zoom span {
  margin-right: 5px;
  border: solid 1px #777;
  cursor: pointer;
  border-radius: 2px;
}
.ui p.zoom span.zoomin {
  padding: 2px 5px;
}
.ui p.zoom span.zoomout {
  padding: 2px 8px;
}
.ui p.zoom span:hover {
  background: black;
  color: white;
}
