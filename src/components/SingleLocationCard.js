import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import CreateCity from './CreateCity';
import * as actions from "../actions/location";
import CreateLocation from './CreateLocation';


const SingleLocationCard = ({...props}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateLocation = () => {
        setModal(true)
    }

    const handleDelete = () => {
        props.deleteLocation("locations",props.id)
    }

    return (
        // <Link to={{pathname:"/city",state:{
        //             cityId:props.id
        //          }}} style={{ textDecoration: 'none' }}>
        <>
        <div class = "card-wrapper">
            <div class = "card-top" style={{"background-color": colors[props.index%5].primaryColor}}></div>
            <div class = "location-holder">
                {/* <span class = "card-header" style={{"background-color": colors[props.index%5].secondaryColor}}>{props.locationObj.name}</span> */}
                <i className = "fas fa-hotel">&nbsp; {props.locationObj.name}</i>
                <i className = "fas fa-envelope">&nbsp; {props.locationObj.email}</i>
                <i className = "fas fa-phone">&nbsp; {props.locationObj.phone}</i>
                <i className = "fas fa-map-marker">&nbsp; {props.locationObj.street_number} {props.locationObj.street_name}</i>
                <i className = "fas fa-dollar-sign">&nbsp; {props.locationObj.rent}</i>
                <i className = "fas fa-compass">&nbsp; {props.locationObj.postal_code}</i>
                <i className = "fas fa-star">&nbsp; {props.locationObj.status}</i>

                {props.editDelete &&  
                <div className="icons-location">
                    <i class = "far fa-edit" style={{"color" : colors[props.index%5].primaryColor, "cursor" : "pointer","marginRight":"8px"}} onClick = {updateLocation}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[props.index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
                }
            </div>
        {/* <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/> */}
        </div>
        <CreateLocation toggle = {toggle} modal = {modal} LocationId = {props.id} title="Edit"/>
        </>
        // </Link>
    );
};

const mapStateToProps = state => ({
    locationList: state.location.list
})

const mapActionsToProps = {
    deleteLocation: actions.Delete
}

export default connect(mapStateToProps,mapActionsToProps)(SingleLocationCard);