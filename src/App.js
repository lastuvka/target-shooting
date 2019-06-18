import React from 'react';
import './App.css';
import TargetBox from './TargetBox/TargetBox';
import TargetInfo from './Target/TargetInfo';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {},
        };
    }

    setInfo(info) {
        this.setState({
            info,
        });
    }

    render() {
        const info = this.state.info;
        return (
            <div className="App">
                <TargetBox setInfo={this.setInfo.bind(this)}/>
                <TargetInfo info={info}/>
            </div>
        );
    }
}

export default App;
