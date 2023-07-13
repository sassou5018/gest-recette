import { Box, Card, CardBody, Image, Heading, Text, Stack, Divider, CardFooter, ButtonGroup, Button, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useMealStore from '../stores/zustand'

interface Props {
    title: string,
    thumbLink: string,
    description: string,
    ing1?: string,
    ing2?:string,
    ing3?:string,
    id: string,
    disableDelete?: boolean
}

export default function Meal({title, thumbLink, description, ing1, ing2, ing3, id, disableDelete=false}: Props) {
    const removeMeal= useMealStore((state)=>state.removeMeal)
    return (
        <Card maxW='sm' bgColor='white'>
            <CardBody>
                <Center>
                <Image
                    src={thumbLink}
                    alt='meal'
                    borderRadius='lg'
                    w="64"
                />
                </Center>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text noOfLines={3}>
                        {description}
                    </Text>
                    <Text color='blue.200' fontSize=''>
                        {ing1}, {ing2}, {ing3}
                    </Text>
                </Stack>
            </CardBody>
            <Divider/>
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Link to={"/recette/"+id}><Button variant="solid" colorScheme='blue'>View</Button></Link>
                    {!disableDelete && <Button variant="ghost" colorScheme='blue' onClick={()=>removeMeal(id)}>Delete</Button>}
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
