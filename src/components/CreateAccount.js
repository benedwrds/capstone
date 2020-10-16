import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'

class CreateAccount extends Component {
    state = {
        open: false,
        name: '',
        mpg: '',
        cylinders: '',
        horsepower: '',
    }

    // toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

  //    handleSubmit = (e) => {
  //        e.preventDefault()
  //        const payload = { ...this.state }
  //        payload.id = this.props.businessTotal + 1
  //        delete payload.open
  //        console.log("BUSINESS", payload)
  //        // add this.props.addCar function here
  //        this.props.addBusiness(payload)
  //        // also add this.setState to close the dialog
  //        this.setState({open: false})
  // }
    

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: ''
            })
        }
    }

    render() {
        return (
          
            <Fragment>
              {/* <div>
                 <div style={{ textAlign: 'center' }}> 
                    {/* <h1>Add Car:</h1> 
                    <Button
                        // variant="contained"
                        // className="add-car"
                         //onClick={this.toggleDialog}
                    >
                        Add Listing
                    </Button>
                    </div> */}
                <div>
                    {/* <Dialog open={this.state.open} onClose={this.toggleDialog} > */}
                        {/* <DialogTitle>Add New Car</DialogTitle> */}
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px', marginLeft: '40%', marginTop: '5%' }}>
                                <TextField 
                                    id="firstName" 
                                    placeholder="First Name" 
                                    value={this.state.id} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="lastname" 
                                    placeholder="Last Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="Email" 
                                    placeholder="Email" 
                                    value={this.state.description} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="Username" 
                                    placeholder="Username" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="Password" 
                                    placeholder="Password" 
                                    value={this.state.hours} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Add Listing</Button>
                            </form>
                        </DialogContent>
                    {/* </Dialog> */}
                </div>
            </Fragment>
        )
    }
}

export default CreateAccount