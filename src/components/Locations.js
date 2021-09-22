import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actions from "../actions/location";
import { makeStyles } from '@material-ui/core/styles';
import image1 from "../assets/images/img01.jpg" 
import CreateCity from './CreateCity';
import SingleLocationCard from './SingleLocationCard';
import CreateLocation from './CreateLocation';
import NavBar from './NavBar';
import Particles from 'react-particles-js';


const Locations = ({...props}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    const [filteredData, setFilteredData] = useState([])

    const handleCodeChange = (e => {
        const searchCode = e.target.value
        const newFilter = props.locationList.filter((value)=>{
            return value.name.includes(searchCode)
        });
        setFilteredData(newFilter)
    })

    useEffect(() => {
        props.fetchAllCities("locations")
    })
    return (
        <>
            <Particles 
            params={{
                particles:{
                    number:{
                        value:10,
                        density:{
                            enable:true,
                            value_area:50
                        }
                    }
                }
            }}
            height="250px"
            />
            <NavBar />
           <div className="header text-center">
               <h3>Dino Location</h3>
               <div className="cbtn">
                    <button className="btn btn-primary mt-2" onClick = {() => setModal(true)}>Create Location</button>
               </div>
               <div className="search-area">
                <form>
                    <input type="text" placeholder="Search" onChange={handleCodeChange}/> 
                </form>
               </div>
           </div>
           <div className="location-container">
                {filteredData.length !== 0 ? filteredData.map((v,k) => <SingleLocationCard locationObj={v} index={k} id={v.id}/>) : props.locationList.map((obj, index) => <SingleLocationCard locationObj={obj} index={index} id={obj.id} />)}
           </div>
           <CreateLocation toggle = {toggle} modal = {modal} title="Create"/>
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

