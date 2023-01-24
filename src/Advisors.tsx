import React, { FC, Fragment } from "react";
import AdvisorCard from "./AdvisorCard";
import {useGetAdvisorsQuery} from './services/advisors';

const Advisors: FC = () => {
    const { data } = useGetAdvisorsQuery();
    if (!data) {
        return <Fragment></Fragment>
    }
    return <div>
        <AdvisorCard advisor={data[0]}></AdvisorCard>
    </div>
}

export default Advisors;