import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actions from "../actions/location";
import { makeStyles } from '@material-ui/core/styles';
import CreateCity from './CreateCity';
import SingleCard from './SingleCard';
import {useLocation} from 'react-router'
import axios from "axios"
import NavBar from './NavBar';
import Particles from 'react-particles-js';
import SingleLocationCard from './SingleLocationCard';
import Skeleton from 'react-loading-skeleton';

const SingleCity = ({...props}) => {
    const cityLocation = useLocation()
    const {cityId} = cityLocation.state
    const {index} = cityLocation.state
    const [modal, setModal] = useState(false);
    const [ loader, setLoader ] = useState(true);
    const [allLocations, setAllLocations] = useState([])
    let componentMounted = true

    useEffect(() => {
        props.fetchCityById("cities",cityId)
        if (componentMounted){
            getLocations()
            setTimeout(() => setLoader(false), 3000)
        }
        return () => { 
            componentMounted = false;
        }
      
    },[])

    const getLocations = () => {
        var locUrl = "https://api.photodino.com/locations/locations/"
        if(props.cityList[index].locations.length > 1){
            props.cityList[index].locations.map((locationId, key) =>{
                axios.get(locUrl+locationId+"/")
                    .then(res => {
                        setAllLocations(arr=>[...arr,res.data])
                    })
                    .catch(e => {
                        console.log(e)
                })                
                
            })
        }
    }
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
               <h3>{props.cityList[index].name}</h3>
               <p>{props.cityList[index].code}</p>
           </div>
           <div className="location-container">
                {
                loader ? <Skeleton height={250} width={300} count = {3}/> :
                allLocations.map((obj, index) => <SingleLocationCard locationObj={obj} index={index} id={obj.id} editDelete={false}/>)}
           </div>
           
        </>
    )
}
const mapStateToProps = state => ({
    cityList: state.location.list
})

const mapActionsToProps = {
    fetchCityById: actions.fetchById,
    fetchLocationById: actions.fetchById
}

export default connect(mapStateToProps,mapActionsToProps)(SingleCity);

