import { Outlet } from "react-router-dom";
import Navbar from "../components/nav";
import { Box, VStack } from "@chakra-ui/react";
import useMealStore from "../stores/zustand";
import axios from "axios";
import { useEffect } from "react";

export default function RootRoute(){
    const meals = useMealStore((state)=>state.meals);
    const setMeals = useMealStore((state)=>state.setMeals);
    const fetchData = async()=>{
        const res = await axios.get("https://themealdb.com/api/json/v1/1/search.php?f=a")
        setMeals(res.data.meals)
    }
    useEffect(()=>{
     fetchData();   
    }, []);
    return(
        <Box display="flex" flexDir="column" justifyContent="center">
        <Navbar/>
        <Box>
            <Outlet/>
        </Box>
        </Box>
    )
}