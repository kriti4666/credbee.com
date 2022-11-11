import { Skeleton, Stack } from "@chakra-ui/react";

export const LoadSkeleton = ()=>{
    return (
      <>
        <Stack w="100%">
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
        </Stack>
      </>
    );
}