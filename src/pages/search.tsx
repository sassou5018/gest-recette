import { Box, Heading, Input, SimpleGrid, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useSwr from "swr"
import { Meal } from "../interfaces/mealInterface";
import MealElem from "../components/meal";
import { useState } from "react";

const fetcher = (url: string)=> axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${url}`).then(res=> res.data)

export default function Search(){
    const [filter, setFilter] = useState("");
    const {search} = useParams();
    const {data, isLoading, error} = useSwr(search, fetcher);
    let mealsGridElem;
    if(data && !isLoading){
        mealsGridElem = data.meals.sort((a:any, b:any)=>{
            if(a.strMeal > b.strMeal) return 1
            else return 0
        }).filter((meal: Meal)=>{
            if(filter=="") return meal;
            if(meal.strMeal.toLowerCase().includes(filter.toLowerCase())) return meal;
        }).map((meal: Meal)=>{
            return(
            <MealElem disableDelete={true} key={meal.idMeal} title={meal.strMeal} thumbLink={meal.strMealThumb} description={meal.strInstructions} id={meal.idMeal} ing1="aaa" ing2="bbb" ing3="cccc" />
            )
        })
    }
    return(
        <Box w="full" mt="6">
            <Input placeholder="filter..." onChange={(e)=>setFilter(e.target.value)} />
            {isLoading && <Spinner/>}
            {data && <SimpleGrid columns={3}>
                {mealsGridElem}
            </SimpleGrid>}
            
        </Box>
    )
}