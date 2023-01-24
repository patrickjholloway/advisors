import React, { FC, Fragment } from "react";
import { Flex, Title, Group, Button, Space, Loader, Center } from '@mantine/core';

import AdvisorCard from "./AdvisorCard";
import { useGetAdvisorsQuery } from './services/advisors';

const Advisors: FC = () => {
    const { data: advisors, isLoading } = useGetAdvisorsQuery();
    if (isLoading) {
        return <Center h="100%"><Loader/></Center>
    }
    if (!advisors) {
        return <Fragment></Fragment>
    }
    return <div style={{padding: '30px', backgroundColor: '#F1F6F6'}}>
        <Title>List of advisors</Title>
        <Space h="md"/>
        <Group>
            <Button variant="outline" color="green" radius={'lg'}>Certifications</Button>
            <Button variant="outline" color="green" radius={'lg'}>Specialties</Button>
            <Button variant="outline" color="green" radius={'lg'}>Location</Button>
        </Group>
        <Space h="md"/>
        <Flex wrap={'wrap'} gap={'20px'}>
            {advisors.map((advisor) =>
                (<AdvisorCard key={advisor.id} advisor={advisor}></AdvisorCard>)
            )}
        </Flex>
    </div>
}

export default Advisors;