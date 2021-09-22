import React, {useState,useEffect} from 'react'
import { connect } from 'react-redux'
import * as actions from "../actions/location";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateCity = (props) => {


    const initialValues = {
        name:'',
        code:''
    }

    const [city, setCity] = useState(initialValues)

    const handleInputChange = (e => {
        const {name, value} = e.target
        const fieldValue =   {[name]: value}
        setCity({
            ...city,
            ...fieldValue
        })
    })

    const resetForms = () => {
        setCity({
            ...initialValues
        })
    }

    useEffect(() => {
        if(props.cityId !==null){
            setCity({
                id:props.cityId,
                ...props.cityList.find(x => x.id === props.cityId)
            })
        }else{
            resetForms()
        }
    },[props.cityId])

    const handleSubmit = e => {
        e.preventDefault()
        const onSuccess = () => {
            resetForms()
        }
        if(typeof(props.cityId) !== "undefined"){
            props.updateCity("cities",props.cityId,city,onSuccess)
        }else{
            props.createCity("cities",city,onSuccess())
        }
    }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>{props.title} City</ModalHeader>
            <ModalBody>
                <div className = "form-group">
                    <label>Name</label>
                    <input type="text" className = "form-control" value = {city.name} onChange = {handleInputChange} name = "name"/>
                </div>
                <div className = "form-group">
                    <label>Code</label>
                    <input type="text" className = "form-control" value = {city.code} onChange = {handleInputChange} name = "code"></input>
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
    cityList: state.location.list
})

const mapDispatchToProps = {
    createCity: actions.create,
    updateCity: actions.update
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCity)