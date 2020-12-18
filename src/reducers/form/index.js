import {fromJS} from "immutable";

const initialState = fromJS({
    oneVar: 0
});


const stockFormReducer = (state = initialState, action = {}) => {

    switch (action.type) {
    
        case 'SAVE_FORM_DATA':
          return state
            .set("oneVar",fromJS(action.payload));
    
        default:
          return state;

     }
  };

  export default stockFormReducer;
  

  