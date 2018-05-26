import React from 'react';
import {Thing} from "../components/Thing";

export const HiRoy = (props) => {
    return (
        <div>
            <Thing.Edit
                label={props.label}
                onChange={props.onChange}
                idAttr={props.idAttr}
                thing={props.thing}
            />
            <Thing.Display
                thing={props.thing}
            />
        </div>
    )
};

HiRoy.propTypes = Thing.propTypes;

