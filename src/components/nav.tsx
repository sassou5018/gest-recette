import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, HStack, Heading, Input, InputGroup, InputLeftElement, VStack } from "@chakra-ui/react";
import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate();
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        navigate(`/search/${e.target.search.value}`)
    }
    return(
        <Box display="flex" justifyContent="space-between" bgColor="gray.100" h="" w="100vw" shadow="lg" p="3">
            <Heading mt=""><Link to="/">Mekla</Link></Heading>
            <form onSubmit={handleSubmit}>
            <InputGroup mt="">
                <InputLeftElement>
                    <SearchIcon color="black"/>
                </InputLeftElement>
                <Input placeholder="Search..." w="150px" name="search"/>
            </InputGroup>
            </form>
            <div></div>
        </Box>
    )
}