export default function fireAction(reducer: any, currentState: any, type: any, payload = {}) {
    return reducer(currentState, {
        type,
        payload
    });
}