import { Card, Avatar, Text, Badge, Title, Space, createStyles } from '@mantine/core'
import React, { FC } from "react";
import { Advisor } from './services/advisors';
import AvatarSvg from "./avatar.svg";
import { FiMapPin } from 'react-icons/fi'

const useStyles = createStyles({
    card: { width: '310px', height: '310px', padding: '30px' },
    badgeIcon: { marginRight: '5px' }
})

const AdvisorCard: FC<{ advisor: Advisor }> = ({ advisor }) => {
    const { classes } = useStyles();
    return <Card withBorder className={classes.card}>
        <Avatar src={AvatarSvg}></Avatar>
        <div>
            <Title order={2}>{advisor.name || '(Advisor)'}</Title>
            <Text>{advisor.certification}</Text>
            <Badge color={'green'}><FiMapPin className={classes.badgeIcon}/>{advisor.location}</Badge>
        </div>
        <Space h="md" />
        <Title order={4}>Specialty</Title>
        <Text>{advisor.specialties?.join(', ')}</Text>
    </Card>
}

export default AdvisorCard;