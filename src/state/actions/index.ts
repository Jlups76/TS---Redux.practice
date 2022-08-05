import { ActionType } from "../action-types";

//SR = SearchRepositories

interface SRAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SRSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SRErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = SRAction | SRSuccessAction | SRErrorAction;

/** If you would like to add various action interfaces it would make more sense
 * to split the actions based on thier purpose. ie. these interfaces COULD go
 * into a file called search-repositories.ts and imported into the index
 */
