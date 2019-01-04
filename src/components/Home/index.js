import React, { Component } from 'react';
import HomeContent from './Content';

class HomeContainer extends Component {
    state = {
        marketing: false,
        react: false,
        ui: false,
        backend: false
    }
    choose = (property) => {
        let temp_state = {
            marketing: false,
            react: false,
            ui: false,
            backend: false
        }
        return () => {
            this.setState((state) => ({
                ...temp_state,
                [property]: !state[property]
            }))
        }
    }
    render() {
        let { marketing, react, ui, backend } = this.state;
        return (
            <div>
                <HomeContent
                marketing = { marketing }
                react = { react }
                ui = { ui }
                backend = { backend }
                choose={this.choose}
                />
            </div>
        )
    }
}

export default HomeContainer
