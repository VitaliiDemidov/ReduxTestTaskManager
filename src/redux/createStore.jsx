import rootReducer from "./rootReducer";

export function createStore(rootReducer, innitialState) {
  let store = rootReducer(innitialState, { type: "__INIT__" }); //створення стейта

  const subscribers = [];
  return {
    dispatch(action) {
      //відправка екшина// зміна стора dispatch( {type :INCRIMENT})
      state = rootReducer(state, action); //проганяємо через руут редюсер присвоємо в STATE
      subscribers.forEach(sub => sub());
    },
    subscribe(callback) {
      subscribe.push(callback); //вертає колбек
    },
    getState() {
      return state; ////вертає стейт
    }
  };
}
