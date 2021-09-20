import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateCity = (props) => {


    const initialValues = {
        name:'',
        rent:'',
        email:'',
        phone:'',
        coordinates:'',
        street_number:0,
        street_name:'',
        postal_code:0,
        status:'',
        city:0
    }

    const [location, setLocation] = useState(initialValues)

    const handleInputChange = (e => {
        const {name, value} = e.target
        const fieldValue =   {[name]: value}
        setLocation({
            ...location,
            ...fieldValue
        })
    })

    const handleSubmit = e => {
        e.preventDefault()
        
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Create Location</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Name</label>
                        <input type="text" className = "form-control" value = {location.name} onChange = {handleInputChange} name = "name"/>
                    </div>
                    <div className = "form-group">
                        <label>Email</label>
                        <input type="email" className = "form-control" value = {location.email} onChange = {handleInputChange} name = "email"></input>
                    </div>
                    <div className = "form-group">
                        <label>Phone</label>
                        <input type="phone" className = "form-control" value = {location.phone} onChange = {handleInputChange} name = "phone"></input>
                    </div>
                    <div className = "form-group">
                        <label>Rent</label>
                        <input type="text" className = "form-control" value = {location.rent} onChange = {handleInputChange} name = "rent"></input>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>Create</Button>{' '}
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCity)
