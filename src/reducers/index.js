import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

const initialState = 0;
export default((count = initialState, action) => {

  switch (action.type) {
    case INCREMENT:
    return count += 1;
    case DECREMENT:
    return count -= 1;
    default:
      return count;
  }
});

