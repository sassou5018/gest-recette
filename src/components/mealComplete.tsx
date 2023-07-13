import { Box, Card, CardBody, Image, Heading, Text, Stack, Divider, CardFooter, ButtonGroup, Button, Center, IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useMealStore from '../stores/zustand'
import ReactPlayer from 'react-player'
import { CloseIcon } from '@chakra-ui/icons'

interface Props {
    title: string,
    thumbLink: string,
    description: string,
    ing1?: string,
    ing2?:string,
    ing3?:string,
    id: string,
    disableDelete?: boolean,
    youtube?: string
}

export default function MealComplete({youtube ,title, thumbLink, description, ing1, ing2, ing3, id, disableDelete=false}: Props) {
    const removeMeal= useMealStore((state)=>state.removeMeal)
    return (
        <Card maxW='2xl' bgColor='white'>
            <CardBody>
                <Center>
                <Image
                    src={thumbLink}
                    alt='meal'
                    borderRadius='lg'
                    w="128"
                />
                </Center>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                        {description}
                    </Text>
                    <Text color='blue.200' fontSize=''>
                        {ing1}, {ing2}, {ing3}
                    </Text>
                    {youtube != null && youtube.length !=0 ? <ReactPlayer url={youtube}/> : null}
                </Stack>
            </CardBody>
            <Divider/>
            <CardFooter>
                <Link to="/"><Button aria-label='home' colorScheme='red' variant="solid" leftIcon={<CloseIcon/>}>Home</Button></Link>
            </CardFooter>
        </Card>
    )
}
