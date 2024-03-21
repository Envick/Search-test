import { BsSortDownAlt, BsSortDown } from 'solid-icons/bs';
import {Component} from "solid-js";

type TProps = {
    sortedAsc: boolean,
    handleSort: () => void
}

const Button:Component<TProps> = (props) => (
        <button onClick={props.handleSort}>
          {props.sortedAsc ? <BsSortDownAlt /> : <BsSortDown />}
        </button>
  );

export default Button;