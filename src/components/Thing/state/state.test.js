import {setThing,SET_THING } from "./actions";
import {
    thingReducer,
    intitalState
} from "./reducer";
import  {getThing} from "./selectors";

describe('actions', () => {
    it('should create an action to change thing', () => {
        const newValue = 'Mike!!';
        const expectedAction = {
            type: SET_THING,
            newValue
        };
        expect(setThing(newValue)).toEqual(expectedAction)
    })
});

describe( 'reducer', () => {
    it('should return the initial state', () => {
        expect(thingReducer(undefined, {})).toEqual(intitalState);
        expect(thingReducer(intitalState, {})).toEqual(intitalState);
    });


    it('should mutate thing', () => {
        const newValue = 'Roy Corkum';
        const action = setThing(newValue);
        expect(thingReducer({}, action)).toEqual({thing:newValue});
    });
});

describe( 'selectors', () => {
    const state = intitalState;
    it( 'Passes initial state', () => {
        expect(getThing(state)).toEqual(intitalState.thing);

    });

    it( 'Changes value', () => {
        expect(getThing({thing:'Roy!!'})).toEqual('Roy!!');
    });


    it( 'Ingores the rest of state', () => {
        expect(getThing({
            mike: 'Sivan',
            thing:'Roy!!'
        })).toEqual('Roy!!');
    });

});