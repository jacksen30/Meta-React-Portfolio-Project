import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg='white' borderRadius='10px' >
      <Image src={imageSrc} borderRadius='10px' />
      <VStack padding='10px' align='flexstart'>
        <Heading as='h4' size='md' color='black' >{title}</Heading>
        <Text as='h5' fontSize='md' color='grey' >{description}</Text>
        <HStack>
          <Text as='' fontSize='' color='black'>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} as='' size='' color='black' />
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
