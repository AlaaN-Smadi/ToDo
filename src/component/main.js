import React from 'react';
// import FormPage from './form';
// import TablePage from './Table';
// import Map from './map';
// import axios from 'axios';
// import ShowError from './ShowError';
// import WheatherTable from './wheather';
// import Movies from './Movies';
// import ErrorWeather from './ErrorWeather';


class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            jsonData: {},
            cityNameInfo: '',
            zoom: 10,
            showMap: false,
            showError: false,
            wheather: {},
            showWheather: false,
            errorWeather: false,
            showMovies: false,
            movies: {}
        }
    }

    // pk.d7056802aacd70f241c6719bb2bf361a	

    // submitBut = async (e) => {
    //     e.preventDefault();
    //     try {
    //         let cityName = e.target.cityName.value

    //         let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${cityName}&format=json`
    //         let data = await axios.get(url);


    //         await this.setState({
    //             jsonData: data.data[0],
    //             cityNameInfo: data.data[0].display_name,
    //             showMap: true,
    //             showError: false

    //         })

    //         // console.log(myServerData.data.length)

    //         //  Weather
    //         try {
    //             let cityName = this.state.jsonData.display_name.split(",")[0]

    //             let myServer = `${process.env.REACT_APP_SERVER_LINK}wheatherJSON?city=${cityName}`
    //             let myServerData = await axios.get(myServer);

    //             await this.setState({
    //                 wheather: myServerData
    //             })

    //             if (this.state.wheather.data.length !== 0) {
    //                 await this.setState({
    //                     showWheather: true,
    //                     errorWeather: false
    //                 })
    //             } else {
    //                 await this.setState({
    //                     showWheather: false,
    //                     errorWeather: true
    //                 })
    //             }
    //             console.log(myServerData.data);


    //         } catch {
    //             await this.setState({
    //                 showWheather: false,
    //                 errorWeather: true
    //             })
    //         }

    //         //  Movies
    //         try {
    //             let cityName = this.state.jsonData.display_name.split(",")[0]
    //             let myMovieServer = `${process.env.REACT_APP_SERVER_LINK}movies?city=${cityName}`

    //             let moviesObject = await axios.get(myMovieServer)

    //             // console.log(moviesObject.data)

    //             await this.setState({
    //                 showMovies: true,
    //                 movies: moviesObject.data
    //             })
    //         } catch {
    //             // console.log('Movies did not work')
    //             await this.setState({
    //                 showMovies: false
    //             })
    //         }
    //         // console.log(this.state.wheather.data[0].data)
    //         // console.log(this.state.jsonData)
    //         // console.log(this.state.jsonData)


    //     } catch {
    //         await this.setState({
    //             showError: true,
    //             showWheather: false,
    //             showMap: false

    //         })
    //     }



    // }



    render() {
        return (
            <div style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_Map_Blank.svg')", backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
                {/* <FormPage submitBut={this.submitBut} />


                {this.state.showMap &&
                    <TablePage cityInfo={this.state.jsonData} />
                }

                {
                    (this.state.showWheather ? <WheatherTable wheatherData={this.state.wheather} showWheather={this.state.showWheather} cityInfo={this.state.jsonData} /> : null)
                }

                {
                    this.state.errorWeather &&
                    <ErrorWeather />
                }

                {this.state.showMap &&
                    <Map setZoom={this.setZoom} zoom={this.state.zoom} lon={this.state.jsonData.lon} lat={this.state.jsonData.lat} />
                }

                {this.state.showMovies &&
                <Movies moviesObject={this.state.movies} />
                }

                {this.state.showError &&
                    <ShowError />
                } */}

                
            </div>
        )
    }
}

export default Main