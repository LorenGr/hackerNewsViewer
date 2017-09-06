import React from 'react';
import ReactDOM from 'react-dom';

class Viewer extends React.Component {


    render() {
        return (
            <div>Test</div>
        )
    }
}

ReactDOM.render(
    <Viewer/>,
    document.getElementById('app_container')
);