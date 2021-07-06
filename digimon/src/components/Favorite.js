import React, { Component } from 'react'
import axios from 'axios';
import DataFromCrudApi from './DataFromCrudApi';
import ShowCrudUpdate from './ShowCrudUpdate';
export class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Url: process.env.REACT_APP_SERVER_URL,
            dataFromCrudApi: [],
            showDataFromCrudApi: false,
            message: '',
            showMessage: false,
            level: '',
            nameOfname: '',
            showUpdate: false



        }

    }



    componentDidMount = async () => {
        const request = await axios.get(`${this.state.Url}/digimon/favorite`);
        this.setState({
            dataFromCrudApi: request.data,
            showDataFromCrudApi: true
        })
    }


    deleteItem = async (name) => {
        const request = await axios.delete(`${this.state.Url}/digimon/favorite/${name}`);

        this.setState({
            dataFromCrudApi: request.data
        })
    }


    showUpdateItem = (level, name) => {
        this.setState({
            level: level,
            nameOfname: name,
            showUpdate: true
        })
    }

    updateOfLevel = (e) => this.setState({
        level: e.target.value,
    })

    updateItem = async (e) => {
        e.preventDefault();

        const request = await axios.put(`${this.state.Url}/digimon/favorite/${this.state.nameOfname}`, { level: this.state.level });
        this.setState({
            dataFromCrudApi: request.data,

        })

    }



    render() {
        return (
            <>

                {
                    this.state.showMessage &&
                    <h2>
                        {this.state.message}
                    </h2>
                }

                {
                    this.state.showUpdate &&
                    <ShowCrudUpdate
                        updateOfLevel={this.updateOfLevel}
                        updateItem={this.updateItem}
                        level={this.state.level}
                    />
                }
                {
                    this.state.showDataFromCrudApi &&
                    <DataFromCrudApi
                        dataFromCrudApi={this.state.dataFromCrudApi}
                        deleteItem={this.deleteItem}
                        showUpdateItem={this.showUpdateItem}
                    />
                }



            </>
        )
    }
}

export default Favorite
