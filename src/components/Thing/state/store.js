//WordPress apis
import {thingReducer} from "./reducer";
import {setThing} from "./actions";
import {getThing} from "./selectors";
const { data, apiRequest } = wp;
const { registerStore, dispatch } = data;
export const THING_STORE_SLUG = 'CALDERA_GRID/THING';


registerStore(
    THING_STORE_SLUG,{
        thingReducer,
        actions: {
            getThing
        },
        selectors: {
            setThing
        }
    }

)
