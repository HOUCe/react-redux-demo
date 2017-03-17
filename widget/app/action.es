 /*
 * action 创建函数，我们应该尽量减少在 action 中传递的数据
 */

export const ADD_LIKE_ITEM = 'ADD_LIKE_ITEM';
export const DELETE_LIKE_ITEM = 'DELETE_LIKE_ITEM';

export function addLikeItem (index, item) {
    return {
        type: ADD_LIKE_ITEM,
        obj: {
            index: index,
            item: item
        }
    }
}

export function deleteLikeItem (index) {
    return {
        type: DELETE_LIKE_ITEM,
        index
    }
}