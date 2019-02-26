import React, { Component } from "react";
import AddCustomer from './add-customer.component';
import CustomerItem from './customer-item.component';
import Comments from './comments.component';

const customersList = [
    {'name': "Peter", 'business_name': "Developer", 'gst_number': "123456"},
    {'name': "Jury", 'business_name': "Marketing", 'gst_number': "456789"},
    {'name': "Jack", 'business_name': "Feild Officer", 'gst_number': "456789"},
]

const tableWidth = {
    width: '150px'
}

localStorage.setItem('customersList', JSON.stringify(customersList));

class Customers extends Component{   

    constructor(props){
        super(props);
        this.state = {
            customersList: JSON.parse(localStorage.getItem('customersList')),
            comments: []
        }
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    componentWillMount(){
        const customersList = this.getCustomers();
        this.setState({customersList});
    }

    getCustomers(){
        return this.state.customersList;
    }

    onDelete(name){
        const customersList = this.getCustomers();

        const filteredCustomer = customersList.filter(customer => {
            return customer.name !== name;
        })

        console.log(filteredCustomer);

        this.setState({customersList: filteredCustomer})

    }

    onAdd(newCustomer){
        console.log("name: "+newCustomer);
        const customersList = this.getCustomers();
        customersList.push(newCustomer);
        this.setState({customersList: customersList});
    }

    onEditSubmit(editCustomer){
        let customersList = this.getCustomers();

        customersList = customersList.map(customer => {
            if(customer.name === editCustomer.originalname){
                customer.name = editCustomer.name;
                customer.business_name = editCustomer.business_name;
                customer.gst_number = editCustomer.gst_number;
            }
            return customer;
        });

        this.setState({customersList: customersList});
    }


    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-4">
                        {/* <Link to="/create-customer" className="btn btn-primary">Creact Customer</Link> */}
                        <AddCustomer 
                            onAdd={this.onAdd}
                        />
                    </div>
                    <div className="col-sm-8">
                        <h4>Customers</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Business Name</th>
                                    <th>GST Number</th>
                                    <th style={tableWidth}>Actions</th>
                                </tr>
                            </thead>
                                {this.state.customersList.map((_row, _id) => {
                                    return(                        
                                        <CustomerItem 
                                            key={_row.name}
                                            {..._row}
                                            onDelete={this.onDelete}
                                            onEditSubmit={this.onEditSubmit}
                                        />
                                    )
                                })}
                        </table>

                        <h4 style={{marginTop: 20}}>Comments</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Comment</th>
                                    <th>Comment Id</th>
                                </tr>
                            </thead>
                                {this.state.comments.map((_row, _id) => {
                                    return(                        
                                        <Comments 
                                            key={_id}
                                            {..._row}
                                        />
                                    )
                                })}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Customers;