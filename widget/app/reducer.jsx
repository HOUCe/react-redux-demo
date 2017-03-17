import { Redux } from 'redux';
import ReduxThunk from 'redux-thunk';
import * as actionType from 'action.es';


var initialLikeBlockState = F.context('likedList');
function likeBlockReducer (state = initialLikeBlockState, action) {
    switch (action.type) {
        case actionType.ADD_LIKE_ITEM: {
            var addIndex = action.obj.index;
            var newLikedList = Object.assign({}, state, {
                [addIndex]: action.obj.item
            })
            return newLikedList;
        }
        case actionType.DELETE_LIKE_ITEM: {
            var newLikedList =  {};
            for (var key in state) {  
                var val = state[key];  
                newLikedList[key] = val;  
            }  
            var index = action.index;
            delete newLikedList[index];
            return newLikedList;
        }
        default: {
            return state;
        }
    }
}


var initialSelectBlockState = F.context('selectList');
function selectListReducer (state = initialSelectBlockState, action) {
    switch (action.type) {
        default: {
            return state;
        } 
    }
}

export const demoReducer = Redux.combineReducers({
    likeBlockReducer,
    selectListReducer
});