import { useParams } from "react-router-dom"
import useMealStore from "../stores/zustand";
import axios from "axios";
import useSwr from "swr"
import { Box, Center, Spinner } from "@chakra-ui/react";
import MealComplete from "../components/mealComplete";

const fetcher = (id:string)=> axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(res=>res.data)

export default function Recette(){
    const {id} = useParams();
    const {data, isLoading, error} = useSwr(id, fetcher);
    //const data.meals[0] = data.data.meals[0]
    return(
        <Box w="full" mt="6">
            {isLoading && <Spinner/>}
            {data && <Center><MealComplete youtube={data.meals[0].strYoutube} title={data.meals[0].strMeal} thumbLink={data.meals[0].strMealThumb} description={data.meals[0].strInstructions} id={data.meals[0].idMeal} ing1="aaa" ing2="bbb" ing3="cccc"/></Center>}
            {error && "Error"}
        </Box>
    )
}