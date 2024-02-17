import React from 'react'
import './css/alarmicon.css';
export default function AlarmIcon({number}) {
  return (
    <div className="alarm-icon">
      <i class="fa-solid fa-bell fa-2x" style={{color: "#74C0FC"}}></i>
      <span className="badge">{number}</span>
    </div>
  )
}
