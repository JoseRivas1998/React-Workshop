// https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns/#updating-nested-objects
export const updateObject = (object, updatedValues) => {
    return {
        ...object,
        ...updatedValues
    };
};
