import React, { Component } from "react";

class CustomerItem extends Component{

    constructor(props){
        super(props);   

        this.state = {
            isEdit: false
        }

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    onDelete(){
        const {onDelete, name} = this.props;
        onDelete(name);
    }

    onEdit(){
        this.setState({isEdit: true})
    }

    onEditSubmit(){
        const editedCustomer = {
            'name': this.name.value, 
            'business_name': this.business_name.value, 
            'gst_number': this.gst_number.value,
            'originalname': this.props.name
        }
        this.props.onEditSubmit(editedCustomer);
        this.setState({isEdit: false});
    }

    cancelEdit(){
        this.setState({isEdit: false});
    }

    render(){
        const {name, business_name, gst_number} = this.props;
        return(
            <tbody>
                {
                    this.state.isEdit ? (
                        <tr key={name}>
                            <td>
                                <div className="form-group">
                                    <input type="text" className="form-control" 
                                        ref={name => this.name = name} defaultValue={name}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="form-group">
                                    <input type="text" className="form-control" 
                                        ref={business_name => this.business_name = business_name}
                                        defaultValue={business_name}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="form-group">
                                    <input type="text" className="form-control" 
                                        ref={gst_number => this.gst_number = gst_number}
                                        defaultValue={gst_number}
                                    />
                                </div>
                            </td>
                            <td>
                                <input type="submit" value="Save" onClick={this.onEditSubmit} className="btn btn-primary btn-sm"/>&nbsp;&nbsp;
                                <input type="button" value="Cancel" onClick={this.cancelEdit} className="btn btn-secondary btn-sm"/>
                            </td>
                        </tr>
                    )

                    : (
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{business_name}</td>
                            <td>{gst_number}</td>
                            <td>
                            <button className="btn btn-secondary btn-sm" onClick={this.onEdit}>Edit</button>&nbsp;&nbsp;
                            <button className="btn btn-secondary btn-sm" onClick={this.onDelete}>Delete</button>
                            </td>
                        </tr>
                    )
                }
                
            </tbody>
        );
    }
}

export default CustomerItem;