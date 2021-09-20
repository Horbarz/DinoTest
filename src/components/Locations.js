import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actions from "../actions/location";
import { makeStyles } from '@material-ui/core/styles';
import image1 from "../assets/images/img01.jpg" 
import CreateCity from './CreateCity';
import SingleCard from './SingleCard';

const Locations = ({...props}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    // const classes = useStyles();
    // const [page, setPage] = useState(0);
    // const [rowsPerPage, setRowsPerPage] = useState(5);
    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };
    
    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };

    useEffect(() => {
        props.fetchAllCities("locations")
    })
    return (
        <>
           <div className="header text-center">
               <h3>Dino Cities</h3>
               <button className="btn btn-primary mt-2" onClick = {() => setModal(true)}>Create Location</button>
           </div>
           <div className="location-container">
                {props.locationList && props.locationList.map((obj, index) => <SingleCard locationObj={obj} index={index} />)}
           </div>
           <CreateCity toggle = {toggle} modal = {modal} />
        </>
    )
}

const mapStateToProps = state => ({
    locationList: state.location.list
})

const mapActionsToProps = {
    fetchAllCities: actions.fetchAll,
}

export default connect(mapStateToProps,mapActionsToProps)(Locations);

