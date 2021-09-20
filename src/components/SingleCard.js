import React, {useState} from 'react';


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

    const updateTask = (obj) => {
        props.updateListArray(obj, props.index)
    }

    const handleDelete = () => {
        props.deleteLocation(props.index)
    }

    return (
        <div class = "card-wrapper">
            <div class = "card-top" style={{"background-color": colors[props.index%5].primaryColor}}></div>
            <div class = "location-holder">
                <span class = "card-header" style={{"background-color": colors[props.index%5].secondaryColor}}>{props.locationObj.name}</span>
                <h2 className = "code">{props.locationObj.code}</h2>

                <div className="icons-location">
                    <i class = "far fa-edit" style={{"color" : colors[props.index%5].primaryColor, "cursor" : "pointer","marginRight":"8px"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[props.index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
            </div>
        {/* <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/> */}
        </div>
    );
};

export default SingleCard;