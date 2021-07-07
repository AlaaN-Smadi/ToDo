import React from 'react';

class ErrorWeather extends React.Component {
    render() {
        return (
            <div style={{ marginLeft: "25%",marginBottom:"25px",color:"wheat", marginRight: "25%",height:"100px", textAlign: "center", backgroundColor: "#4b4ca3", opacity: "0.6" }}>
                <h2> 😔 There's  No  Weather  Data  for  this  City  at  the  moment 😔 </h2>
            </div>
        )
    }
}

export default ErrorWeather
