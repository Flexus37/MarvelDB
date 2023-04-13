import { Component } from "react";
import AppHeader from '../appHeader/AppHeader'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
            </div>
        );
    }
}

export default App;