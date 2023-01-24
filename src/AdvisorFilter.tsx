import React, { FC, Fragment, useState } from "react";
import { Flex, Title, Group, Button, Space, Checkbox, SimpleGrid, Modal } from '@mantine/core';

import { useGetAdvisorsQuery } from './services/advisors';

interface FilterProps {
    onChange: (filters: string[]) => void;
    title: string;
    options: string[],
    activeFilters: string[]
}

const AdvisorFilter: FC<FilterProps> = ({ onChange, activeFilters, title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    return <Fragment>
        <Modal title={title} opened={isOpen} onClose={() => { setIsOpen(false) }}>
            <SimpleGrid cols={1}>
                {options.map((option) => {
                    return <Checkbox label={option.toUpperCase()} key={option} value={option} checked={activeFilters.includes(option)} onChange={(ev) => {
                        const checked = ev.target.checked;
                        const values = new Set([...activeFilters]);
                        checked ? values.add(option) : values.delete(option);
                        onChange(Array.from(values));
                    }}></Checkbox>
                })}
            </SimpleGrid>
        </Modal>
        <Button variant="outline" color="green" radius={'lg'} onClick={() => { setIsOpen(true) }}>{title}</Button>
    </Fragment>
}

export default AdvisorFilter;