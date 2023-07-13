import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
} from '@chakra-ui/react'
import { FormEvent } from 'react'
import useMealStore from '../stores/zustand';
import { Meal } from '../interfaces/mealInterface';

export default function AddModal({ onClose, isOpen }: any) {
    const addMeal = useMealStore((state)=>state.addMeal)
    const handleSubmit = (e:any)=>{
        e.preventDefault();
        const id: number = Math.random()*100
        const data: Meal = {
            "idMeal": id.toString(),
            "strMeal": e.target.titre.value,
            "strDrinkAlternate": null,
            "strCategory": "Chicken",
            "strArea": "Japanese",
            "strInstructions": e.target.inst.value,
            "strMealThumb": e.target.thumbLink.value.length != 0 ? e.target.thumbLink.value : "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",
            "strTags": "Meat,Casserole",
            "strYoutube": "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
            "strIngredient1": "soy sauce",
            "strIngredient2": "water",
            "strIngredient3": "brown sugar",
            "strIngredient4": "ground ginger",
            "strIngredient5": "minced garlic",
            "strIngredient6": "cornstarch",
            "strIngredient7": "chicken breasts",
            "strIngredient8": "stir-fry vegetables",
            "strIngredient9": "brown rice",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": null,
            "strIngredient17": null,
            "strIngredient18": null,
            "strIngredient19": null,
            "strIngredient20": null,
            "strMeasure1": "3/4 cup",
            "strMeasure2": "1/2 cup",
            "strMeasure3": "1/4 cup",
            "strMeasure4": "1/2 teaspoon",
            "strMeasure5": "1/2 teaspoon",
            "strMeasure6": "4 Tablespoons",
            "strMeasure7": "2",
            "strMeasure8": "1 (12 oz.)",
            "strMeasure9": "3 cups",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": null,
            "strMeasure17": null,
            "strMeasure18": null,
            "strMeasure19": null,
            "strMeasure20": null,
            "strSource": null,
            "strImageSource": null,
            "strCreativeCommonsConfirmed": null,
            "dateModified": null
          }
          addMeal(data);
          onClose();

    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Ajouter un recette</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <Input placeholder='Titre' name="titre" required />
                        <Textarea placeholder='Instructions' name="inst" required />
                        <Input placeholder='Lien photo' name="thumbLink" />
                        <Button type="submit">Save</Button>
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
