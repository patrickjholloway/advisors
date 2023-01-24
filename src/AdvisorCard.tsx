import React, { FC } from "react";
import { Advisor } from './services/advisors';

const AdvisorCard: FC<{ advisor: Advisor }> = ({ advisor }) => {
    return <div>
        {advisor.name}
    </div>
}

export default AdvisorCard;