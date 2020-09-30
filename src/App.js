import React, { useState } from "react";
import "./style.css";
import PulseCircle from './PulseCircle'

export default function App() {

  return (
    <div>
      <PulseCircle radius={20} color='blue' thickness={3} top={2} left={23}/>
      <PulseCircle loopType='yoyo'/>
    </div>
  );
}