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
import Skeleton from 'react-loading-skeleton';



const Locations = ({...props}) => {
    const [modal, setModal] = useState(false);
    const [ loader, setLoader ] = useState(true);
    let componentMounted = true

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
      
        if (componentMounted){
            props.fetchAllCities("locations")
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
               <h3>Dino Hotels</h3>
               <div className="cbtn">
                    <button className="btn btn-primary mt-2" onClick = {() => setModal(true)}>Create Hotel</button>
               </div>
               <div className="search-area">
                <form>
                    <input type="text" placeholder="Search" onChange={handleCodeChange}/> 
                </form>
               </div>
           </div>
           <div className="location-container">
                {
                loader ? <Skeleton height={250} width={300} count = {3}/> :
                filteredData.length !== 0 ? 
                filteredData.map((v,k) => <SingleLocationCard locationObj={v} index={k} id={v.id}/>) : 
                props.locationList.reverse().map((obj, index) => <SingleLocationCard locationObj={obj} index={index} id={obj.id} editDelete={true} />)
                }
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

