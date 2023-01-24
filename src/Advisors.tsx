import React, { FC, useState } from "react";
import { Flex, Title, Group, Button, Space, Loader, Center } from '@mantine/core';

import AdvisorCard from "./AdvisorCard";
import { Advisor, useGetAdvisorsQuery } from './services/advisors';
import { useMemo } from "react";

import AdvisorFilter from "./AdvisorFilter";

const getOptions = (advisors: Advisor[] | undefined, fieldName: string): string[] => {
    if (!advisors) return [];
    return Object.keys(advisors.reduce((accumulator: Record<string, string>, advisor: any) => {
        const option: string = advisor[fieldName];
        if (Array.isArray(option)) {
            option.forEach((o) => {
                accumulator[o] = o;
            })
        } else if (option) {
            accumulator[option] = option;
        }
        return accumulator;
    }, {}));
};

const Advisors: FC = () => {
    const { data: advisors, isLoading } = useGetAdvisorsQuery();
    const [filterLocations, setFilterLocations] = useState<string[]>([]);
    const [filterSpecialties, setFilterSpecialties] = useState<string[]>([]);
    const [filterCertifications, setFilterCertifications] = useState<string[]>([]);

    const hasActiveFilters = useMemo<boolean>(() => {
        return !!(filterLocations.length || filterSpecialties.length || filterCertifications.length);
    }, [filterLocations, filterSpecialties, filterCertifications])

    const certificationOptions = useMemo<string[]>(() => {
        return getOptions(advisors, 'certification');
    }, [advisors])

    const locationOptions = useMemo<string[]>(() => {
        return getOptions(advisors, 'location');
    }, [advisors])

    const specialtyOptions = useMemo<string[]>(() => {
        return getOptions(advisors, 'specialties');
    }, [advisors])

    const filteredAdvisors = useMemo(() => {
        if (!advisors) return [] as Advisor[];
        return advisors.filter((advisor) => {
            if (advisor.location && filterLocations.length && !filterLocations.includes(advisor.location)) return false;
            if (advisor.specialties && filterSpecialties.length && !filterSpecialties.some((specialty) => {
                return advisor.specialties?.includes(specialty);
            })) return false;
            if (advisor.certification && filterCertifications.length && !filterCertifications.includes(advisor.certification)) return false;
            return true;
        });
    }, [filterLocations, filterSpecialties, filterCertifications, advisors]);

    if (isLoading) {
        return <Center h="100%"><Loader /></Center>
    }
    return <div style={{ padding: '30px', backgroundColor: '#F1F6F6' }}>
        <Title>List of advisors</Title>
        <Space h="md" />
        <Group>
            <AdvisorFilter options={certificationOptions} title="Certifications" activeFilters={filterCertifications} onChange={(filters: string[]) => {
                setFilterCertifications(filters);
            }}></AdvisorFilter>
            <AdvisorFilter options={specialtyOptions} title="Specialties" activeFilters={filterSpecialties}  onChange={(filters: string[]) => {
                setFilterSpecialties(filters);
            }}></AdvisorFilter>
            <AdvisorFilter options={locationOptions} title="Location" activeFilters={filterLocations} onChange={(filters: string[]) => {
                setFilterLocations(filters);
            }}></AdvisorFilter>
            {hasActiveFilters && `${filteredAdvisors.length} matching advisor${filteredAdvisors.length > 1 ? 's' : ''}`}
            {hasActiveFilters && <Button variant={'subtle'} onClick={() => {
                setFilterCertifications([]);
                setFilterLocations([]);
                setFilterSpecialties([]);
            }}>Reset filters</Button>}

        </Group>
        <Space h="md" />
        <Flex wrap={'wrap'} gap={'20px'}>
            {filteredAdvisors.map((advisor) =>
                (<AdvisorCard key={advisor.id} advisor={advisor}></AdvisorCard>)
            )}
        </Flex>
    </div>
}

export default Advisors;
