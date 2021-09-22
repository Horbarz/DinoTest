import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actions from "../actions/location";
import axios from "axios"


const CreateLocation = (props) => {

    const [cities, setCities] = useState([])

    const getAllCities = () => {
        var cityUrl = "https://api.photodino.com/locations/cities"
          axios.get(cityUrl)
              .then(res => {
                setCities(res.data)
                // console.log(res.data)
              })
              .catch(e => {
                  console.log(e)
          })
    }

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

    const resetForms = () => {
        setLocation({
            ...initialValues
        })
    }

    useEffect(() => {
        getAllCities()
        if(props.LocationId !==null){
            setLocation({
                id:props.LocationId,
                ...props.listOfLocation.find(x => x.id === props.LocationId)
            })
            //console.log(props.classList)
        }else{
            resetForms()
        }

       
    },[props.LocationId])

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
        const onSuccess = () => {
            resetForms()
        }
        if(typeof(props.LocationId) !== "undefined"){
            //console.log(props.cityId)
            props.updateLocation("locations",props.LocationId,location,onSuccess)
        }else{
            props.createLocation("locations",location,onSuccess())
        }
        
    }



    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>{props.title} Location</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group mb-2">
                        <input placeholder="Name" type="text" className = "form-control" value = {location.name} onChange = {handleInputChange} name = "name"/>
                    </div>
                    <div className = "form-group mb-2">
                        <input placeholder="Email" type="email" className = "form-control" value = {location.email} onChange = {handleInputChange} name = "email"></input>
                    </div>
                    <div className = "form-group mb-2">
                        <input placeholder="Phone" type="phone" className = "form-control" value = {location.phone} onChange = {handleInputChange} name = "phone"></input>
                    </div>
                    <div className = "form-group mb-2">
                        <input placeholder="Rent" type="text" className = "form-control" value = {location.rent} onChange = {handleInputChange} name = "rent"></input>
                    </div>
                    <div className = "form-group mb-2">
                        <input placeholder="Coordinates" type="text" className = "form-control" value = {location.coordinates} onChange = {handleInputChange} name = "coordinates"></input>
                    </div>
                    <div className = "form-group mb-2">
                        <input placeholder="Street Name" type="text" className = "form-control" value = {location.street_name} onChange = {handleInputChange} name = "street_name"></input>
                    </div>
                    <div className = "form-group mb-2">
                        <input placeholder="Street Number" type="tel" className = "form-control" value = {location.street_number} onChange = {handleInputChange} name = "street_number"></input>
                    </div>
                    <div className = "form-group mb-2">
                        <input placeholder="Postal Code" type="tel" className = "form-control" value = {location.postal_code} onChange = {handleInputChange} name = "postal_code"></input>
                    </div>
                    <div className = "form-group mb-2">
                        <select className = "form-control select2" value = {location.status} onChange = {handleInputChange} name = "status">
                            <option>Select Status</option>
                            <option>Available</option>
                            <option>Unavailable</option>
                            <option>Active</option>
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <select  className="form-control" name="city" value={location.city} onChange={handleInputChange}>
                            <option>Select City</option>
                            {cities.map((city,i) => 
                                <option key={i} value={city.id}>{city.name}</option>
                            )}
                        </select>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>{props.title}</Button>{' '}
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    )
}

const mapStateToProps = (state) => ({
    listOfLocation : state.location.list
})

const mapDispatchToProps = {
    createLocation: actions.create,
    updateLocation: actions.update
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLocation)
