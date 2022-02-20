import { ReactElement, createElement } from "react";
import { GameOfLife } from "./components/GameOfLife";
import { GoLWASMContainerProps } from "../typings/GoLWASMProps";

import "./ui/GoLWASM.css";

export function GoLWASM({ CellSize, GridColour, DeadColour, AliveColour }: GoLWASMContainerProps): ReactElement {
    return <GameOfLife CellSize={CellSize} GridColour={GridColour} DeadColour={DeadColour} AliveColour={AliveColour}  />;
}
