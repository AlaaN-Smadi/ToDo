import React from 'react';
import Table from 'react-bootstrap/Table';

class TablePage extends React.Component {
    
    render() {
        return (
            <div style={{ marginLeft: "25%", marginRight: "25%", textAlign: "center", backgroundColor: "#4b4ca3", opacity: "0.6" }}>
                <Table striped bordered hover>
                    <thead style={{ color: "wheat" }}>
                        <tr>

                            <th colSpan="2"> {this.props.cityInfo.display_name} </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ color: "wheat" }}>
                            <td> Latitude </td>
                            <td> {this.props.cityInfo.lat} </td>

                        </tr>
                        <tr style={{ color: "wheat" }}>
                            <td> Longitude </td>
                            <td> {this.props.cityInfo.lon} </td>

                        </tr>

                        


                    </tbody>
                </Table>
            </div>
        )
    }
}

export default TablePage
