import axios from 'axios';
import React, { Component } from 'react'
import DataFromApi from './DataFromApi'
export class Main extends Component {

    constructor(props){
        super(props);
            this.state={
                Url:process.env.REACT_APP_SERVER_URL,
                dataFromApi:[],
                showDataFromApi:false,
                message:'',
                showMessage:false


            }
        
    }
  


    componentDidMount=async()=>{
        const request=await axios.get(`${this.state.Url}/digimon`);
        this.setState({
            dataFromApi:request.data,
            showDataFromApi:true
        })
    }

      
    favoriteItem=async(dataObj)=>{
        const postRequest=await axios.post(`${this.state.Url}/digimon/favorite`,dataObj);

        this.setState({
            message:postRequest.data,
            showMessage:true
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
               this.state.showDataFromApi &&
               <DataFromApi
               dataFromApi={this.state.dataFromApi}
               favoriteItem={this.favoriteItem}

               />
           }

           </>
        )
    }
}

export default Main
