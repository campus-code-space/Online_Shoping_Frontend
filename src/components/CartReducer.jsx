const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add": {
      const existingItemIndex = state.findIndex(item => item.id === action.item.id);
      if (existingItemIndex !== -1) {
        const updatedState = [...state];
        updatedState[existingItemIndex] = {
          ...updatedState[existingItemIndex],
          quantity: updatedState[existingItemIndex].quantity + 1
        };
        return updatedState;
      } else {
        return [...state, { ...action.item, quantity: 1 }];
      }
    }

    case "Remove":
      return state.filter(item => item.id !== action.id);

    case "Increase": {
      return state.map(item =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    case "Decrease": {
      return state.map(item =>
        item.id === action.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }

    default:
      return state;
  }
};

export default CartReducer;