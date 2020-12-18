import { createSelector } from 'reselect';

const selectResult = state => state["form"];

export const makeSelectFromOneVar = () =>
    createSelector(
        [selectResult],
        (result) => 
            result.get("oneVar") ? result.get("oneVar").toJS() : null
);