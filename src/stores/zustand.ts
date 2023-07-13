import {create} from "zustand"
import { Meal } from "../interfaces/mealInterface"

interface store{
    meals: Meal[],
    setMeals: (meals: Meal[])=>void
    removeMeal: (mealId: string)=>void
    addMeal: (meal: Meal)=>void
}

const useMealStore = create<store>((set)=>({
    meals: [],
    setMeals: (meals: Meal[])=>set(()=>({meals:meals})),
    removeMeal: (mealId: string)=>set((state)=>({
        meals: state.meals.filter((meal: Meal)=>{
            if(meal.idMeal!=mealId) return meal
        })
    })),
    addMeal: (meal: Meal)=>set((state)=>({
        meals: [...state.meals, meal].sort((a,b)=>{
            if(a.strMeal > b.strMeal) return 1
            else return 0
        })
    }))
}))

export default useMealStore;