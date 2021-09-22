import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import * as actions from "../actions/location";
import CreateCity from './CreateCity';
import SingleCard from './SingleCard';
import NavBar from './NavBar';
import Skeleton from 'react-loading-skeleton';
import Particles from 'react-particles-js';

const Cities = ({...props}) => {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    const [filteredData, setFilteredData] = useState([])
    const [ loader, setLoader ] = useState(true);
    let componentMounted = true; 

    const handleCodeChange = (e => {
        const searchCode = e.target.value
        const newFilter = props.cityList.filter((value)=>{
            return value.code.includes(searchCode)
        });
        setFilteredData(newFilter)
    })

    const handleNameChange = (e => {
        const searchName = e.target.value
        const newFilter = props.cityList.filter((value)=>{
            return value.name.includes(searchName)
        });
        setFilteredData(newFilter)
    })


    useEffect(() => {
        if (componentMounted){ 
            props.fetchAllCities("cities")
            //setLoader(false)
            setTimeout(() => setLoader(false), 3000)
        }
        return () => { 
            componentMounted = false;
        }
    },[])

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
               <h3>Dino Cities</h3>
               <div className="cbtn">
                    <button className="btn btn-primary mt-2" onClick = {() => setModal(true)}>Create City</button>
               </div>
                <div className="search-area">
                <form>
                    <input type="text" placeholder="Code" onChange={handleCodeChange}/>
                    <input style={{marginLeft:"10px"}} type="text" placeholder="Name" onChange={handleNameChange}/>
                </form>
               </div>
           </div>
           <div className="location-container">
                { 
                loader ? <Skeleton height={250} width={300} count = {3}/> : 
                    filteredData.length !== 0 ? 
                    filteredData.map((v,k) => <SingleCard locationObj={v} index={k} id={v.id}/>) :  
                    props.cityList.reverse().map((obj, index) => <SingleCard locationObj={obj} index={index} id={obj.id} />)
                }
                
           </div>
           <CreateCity toggle = {toggle} modal = {modal} title="Create" />
        </>
    )
}

const mapStateToProps = state => ({
    cityList: state.location.list
})

const mapActionsToProps = {
    fetchAllCities: actions.fetchAll,
    deleteCity: actions.Delete,
    fetchCityByName: actions.fetchByName,
    fetchCityByCode: actions.fetchByCode
}

export default connect(mapStateToProps,mapActionsToProps)(Cities);

