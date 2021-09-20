import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actions from "../actions/location";
import { makeStyles } from '@material-ui/core/styles';
import image1 from "../assets/images/img01.jpg" 
import CreateCity from './CreateCity';
import SingleCard from './SingleCard';
import {useLocation} from 'react-router'

const SingleCity = ({...props}) => {
    const cityLocation = useLocation()
    const {cityId} = cityLocation.state
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
        props.fetchCityById("cities",6)
    })
    return (
        <>
           <div className="header text-center">
               <h3>Dino Cities</h3>
               <button className="btn btn-primary mt-2" onClick = {() => setModal(true)}>Create Location</button>
           </div>
           <div className="location-container">
                {/* {props.cityList && props.locationList.map((obj, index) => <SingleCard locationObj={obj} index={index} />)} */}
           </div>
           
        </>
    )
}

const mapStateToProps = state => ({
    cityList: state.location.list
})

const mapActionsToProps = {
    fetchCityById: actions.fetchById,
}

export default connect(mapStateToProps,mapActionsToProps)(SingleCity);
