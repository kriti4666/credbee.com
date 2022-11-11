import { Skeleton, VStack } from "@chakra-ui/react";

export const LoadSkeleton = ()=>{
    return (
      <>
        <VStack w="100%">
          <Skeleton w="100%" h="100px" />
          <Skeleton w="100%" h="100px" />
          <Skeleton w="100%" h="100px" />
          <Skeleton w="100%" h="100px" />
          <Skeleton w="100%" h="100px" />
          <Skeleton w="100%" h="100px" />
        </VStack>
      </>
    );
}