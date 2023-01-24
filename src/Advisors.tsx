import React, { FC, Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import {useGetAdvisorsQuery} from './services/advisors';

const Advisors: FC = () => {
    const { data, error, isLoading } = useGetAdvisorsQuery();
    if (!data) {
        return <Fragment></Fragment>
    }
    return <div>
        {JSON.stringify(data[0])}
    </div>
}

export default Advisors;