import React, { Component } from 'react';

export default class AddCustomer extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const obj = {
            name: this.name.value,
            business_name: this.business_name.value,
            gst_number: this.gst_number.value
        }
        this.props.onAdd(obj);

        this.name.value = '';
        this.business_name.value = '';
        this.gst_number.value = '';
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add New Customer</h4>
                <div className="form-group">
                    <label>Name:  </label>
                    <input type="text" className="form-control" required 
                        ref={name => this.name = name}
                    />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" className="form-control" required 
                        ref={business_name => this.business_name = business_name}
                    />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" className="form-control" required 
                        ref={gst_number => this.gst_number = gst_number}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Customer" className="btn btn-primary"/>
                </div>
            </form>
        );
    }
}