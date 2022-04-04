const INITIAL_STATE = {
  userName: "",
  id:null,

};/** este objeto es el estado global de la store de redux
la función reducer recibe un getState() y un action, la action es la única que puede 
modificar dicho estado.
Quien ejecuta la acción es Dispatch(action).
Dispatch ejecuta (Despacha) una acción, las acciones son la unica forma de enviar 
datos al store y de cambiar el estado las acciones deben tener un campo type
que indique el tipo de acción que se esta ejecutando. La estructura de objetos 
de acciones son controladas por ti 
Dispatch regresa la acción despachada y modifica el estado global*/
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USERNAME":
      return {
        ...state,
        userName: action.payload
      };
    case "GET_ID":
      return {
        ...state, 
        id: action.payload
      }

    default:
      return state;
  }
};

export default reducer;