import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(//get position
            position => this.setState({lat: position.coords.latitude}),//set first STATE
            positionError => this.setState({errorMessage: positionError.message })//set secound STATE
        );    
    };
    
    //HELPER METHOD!!!if we have some logic to display something, put it in header
    renderContent = () => {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        
        if ( this.state.lat && !this.state.errorMessage) {
            return  <SeasonDisplay lat={this.state.lat}/>//send PROPS to child element
        }            
        
        return <Spinner message="Wait a moment..."/>
    }

    //always we have to render something in CLASS components
    render() {
            return(//try to have as a little as posible return statement's in render method
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);