import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import CreateCity from './CreateCity';
import * as actions from "../actions/location";


const SingleCard = ({...props}) => {
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

    const updateCity = () => {
        setModal(true)
    }

    const handleDelete = () => {
        // var x = confirm("Are you sure you want to delete?");
        props.deleteCity("cities",props.id)

    }

    return (
       
        <>
        <div className = "card-wrapper">
            <div className = "card-top" style={{"background-color": colors[props.index%5].primaryColor}}></div>
            <div className = "location-holder">
           
                <span className = "card-header" style={{"background-color": colors[props.index%5].secondaryColor}}>{props.locationObj.name}</span>
                 <Link className="code" to={{pathname:"/city",state:{
                   cityId:props.id,
                   index:props.index
                  }}} style={{ textDecoration: 'none' }}>
                    <h2>{props.locationObj.code}</h2>
                </Link>
           
                <div className="icons-location">
                    <i className = "far fa-edit" style={{"color" : colors[props.index%5].primaryColor, "cursor" : "pointer","marginRight":"8px"}} onClick = {updateCity}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[props.index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
            </div>
        {/* <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/> */}
        </div>
        <CreateCity toggle = {toggle} modal = {modal} cityId = {props.id} title="Edit"/>
        </>
        // </Link>
    );
};

const mapStateToProps = state => ({
    cityList: state.location.list
})

const mapActionsToProps = {
    deleteCity: actions.Delete
}

export default connect(mapStateToProps,mapActionsToProps)(SingleCard);