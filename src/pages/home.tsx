import { Box, Button, Center, HStack, Heading, Input, InputGroup, InputLeftElement, SimpleGrid, Spinner, VStack, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import useSwr, { Fetcher } from "swr"
import Meal from "../components/meal";
import { MealArray, Meal as MealType } from "../interfaces/mealInterface";
import { Search2Icon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import useMealStore from "../stores/zustand";
import AddModal from "../components/addRecetteModal";


const fetcher = ()=>axios.get("https://themealdb.com/api/json/v1/1/search.php?f=a").then(res=>res.data);

export default function Home(){
    //const {data, isLoading} = useSwr("all", fetcher);
    const [isLoading, setIsLoading] = useState(false);
    const [filter, setFilter] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const meals = useMealStore((state)=>state.meals);
    const setMeals = useMealStore((state)=>state.setMeals);
    // const fetchData = async()=>{
    //     const res = await axios.get("https://themealdb.com/api/json/v1/1/search.php?f=a")
    //     setMeals(res.data.meals)
    //     setIsLoading(false)
    // }
    // useEffect(()=>{
    //  fetchData();   
    // }, []);
    //console.log("from use effect",meals)
    let mealsGridElem;
    if(meals.length != 0){
        mealsGridElem = meals.sort((a, b)=>{
            if(a.strMeal > b.strMeal) return 1
            else return 0
        }).filter((meal: MealType)=>{
            if(filter=="") return meal;
            if(meal.strMeal.toLowerCase().includes(filter.toLowerCase())) return meal;
        }).map((meal: MealType)=>{
            return(
            <Meal key={meal.idMeal} title={meal.strMeal} thumbLink={meal.strMealThumb} description={meal.strInstructions} id={meal.idMeal} ing1={meal.strIngredient1} ing2={meal.strIngredient2} ing3={meal.strIngredient3} />
            )
        })
    }
    return(
        <Box bgColor="" mt="6" w="full">
            {isLoading && <Center w="64" h="100vh"><Spinner/></Center>}
            <Center>
                <HStack>
                <InputGroup w="md">
                    <InputLeftElement>
                    <Search2Icon color="gray.300"/>
                    </InputLeftElement>
                    <Input placeholder="Filter..." onChange={(e)=>{setFilter(e.target.value)}}/>
                </InputGroup>
                <Button onClick={onOpen}>Ajouter Recette +</Button>
                </HStack>
            </Center>
            <Center mt="3">
            <SimpleGrid columns={3} spacing={3}>
            {!isLoading ? mealsGridElem : "Error"}
            </SimpleGrid>
            </Center>
            <AddModal onClose={onClose} isOpen={isOpen}/>
        </Box>
    )
}