import React from 'react'
import "./css/alertsPage.css";
import SearchBar from '../Components/SearchBar';
import AlarmIcon from '../Components/AlarmIcon';
import Alert from '../Components/alert';
import alerts from '../data/alerts';
export default function AlertsPage() {
  
  return (
    <div className="alerts-page-container">
        <div className="alert-strp-container">
            <div className="as-header-container">
                <h1 className="as-heading">alerts</h1>
                <SearchBar 
                placeholder="Search By..."
                />
                <AlarmIcon 
                number={3}
                />
            </div>
            <div className="as-body-container">
             {alerts.map((a,i)=>{
              return (
                <Alert
                i = {i}
              alertName="asdasd"
              no={500} 
              percentage={80}
              risk={"high risk"}
              />
              )
             })}
            </div>
        </div>
        
    </div>
  )
}
