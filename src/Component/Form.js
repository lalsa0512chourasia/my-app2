import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             department:"",
             rating:"",
             items: []
        }
    }
    getValue = (event) => {
       this.setState({   [event.target.name]: event.target.value })
    }

    handleSubmit =(event) =>{
        event.preventDefault();
        const tempObj = {
            name : this.state.name, 
            department : this.state.department,
            rating : this.state.rating
        }
        const tempArr = this.state.items;
        tempArr.push(tempObj)
        this.setState(
            {
                name:'',
                department:'', 
                rating:'',
                items:[...tempArr]
            }
        )
    }


    render() {
        return (
            <>
            <div>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <form>
                    <label>Name :</label>
                    <input type="text" name='name' value={this.state.name} onChange={this.getValue}></input><br/>

                    <label>Department :</label>
                    <input type="text" name='department' value={this.state.department} onChange={this.getValue}></input><br/>

                    <label>Rating :</label>
                    <input type="number" name='rating' value={this.state.rating} onChange={this.getValue}></input><br/>

                    <input type="submit" className="submit" onClick={this.handleSubmit}></input>
                 </form>
            </div>   


            <div className='box'>
                { this.state.items.map((value, index)=>{
                    return(
                        <div className='child-box' key={index}>Name: {value.name} | Department: {value.department} | Rating: {value.rating}</div>
                    )
                })}
            </div>
        </>
        )
    }
}
export default Form