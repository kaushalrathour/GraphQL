import { StackParamList } from "./StackParamList";

export interface ActiveScreen {
    screenName: keyof StackParamList
}