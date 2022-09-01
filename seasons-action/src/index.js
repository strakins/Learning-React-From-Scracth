import React from 'react';
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay'

// We Use class component instead of functional component to 
// call d geolocation.

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     )
//     return (
//         <div>Hi there!</div>
//     )
// };

class App extends React.Component {
    state = {lat: null, errMessage: ''}

    // The above statement replaces contsructor and super constructor expression
        // constructor(props) {
            // super(props);
        // The only allowed method of direct assignment to this.state
            // this.state = {lat: null, errMessage:''};

        // Refactoring the data calling we use componentDidMount
            // window.navigator.geolocation.getCurrentPosition(
        //     // (position) => console.log(position),
        //     (position) => {
        //         this.setState({ lat: position.coords.latitude });
        //     },
        //     // err => console.log(err)
        //     err => {
        //         this.setState({errMessage: err.message})
        //     }
        // ); 
    // }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({errMessage: err.message})
        ); 
    }

    //  Sample of LifeCycle Method Behavior
    // componentDidMount() {
    //     console.log('My component was rendered on d screen');
    // }

    // componentDidUpdate() {
    //     console.log('My component did rerendered - it was updated');
    // }
    // We need to define a render method as required by React
    render() {
        return <div className=''>
            <SeasonDisplay lat={this.state.lat} />
        </div>
    }
}

ReactDom.render(< App />, document.querySelector('#root'))