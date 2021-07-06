import React, { Component } from 'react'

export class ShowCrudUpdate extends Component {
    render() {
        return (
            <div>
            <form onSubmit={this.props.updateItem}>
            <input onChange={this.props.updateOfLevel} type="text"  value={this.props.level}/>
            <input type="submit" value="update form"/>
          </form>
          </div>
        )
    }
}

export default ShowCrudUpdate
