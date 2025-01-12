import { ActionReducer, MetaReducer } from "@ngrx/store";

export function localStorageSyncReducer<T>(
  reducer: ActionReducer<T>
): ActionReducer<T> {
  return (state, action) => {
    const newState = state ?? JSON.parse(localStorage.getItem('appState') || '{}');
    const nextState = reducer(newState, action);
    localStorage.setItem('appState', JSON.stringify(nextState));
    return nextState;
  };
}

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];
