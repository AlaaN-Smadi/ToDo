import React from 'react';
import Table from 'react-bootstrap/Table';



class WheatherTable extends React.Component {
    render() {
        return (
            <div style={{ marginLeft: "25%", marginRight: "25%", textAlign: "center", backgroundColor: "#4b4ca3", opacity: "0.6" }}>


                <Table striped bordered hover>
                    <thead style={{ color: "wheat" }}>
                        <tr style={{ color: "wheat" }}><th colSpan="2"> Wheather </th></tr>
                    </thead>

                    <tbody>
                        {
                            this.props.wheatherData.data.map((item,index)=>{
                                return(
                                    <tr style={{ color: "wheat" }}key={index}>
                                <td> {item.valid_date} </td>
                                <td> heigh of {item.high_temp}, and low of {item.low_temp} with {item.weather.description} </td>

                            </tr>
                                )
                            })

                            

                        }



                    </tbody>
                </Table>



            </div>
        )
    }
}

export default WheatherTable