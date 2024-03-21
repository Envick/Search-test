import {Component} from "solid-js";

type TProps = {
    query: string,
    handleInputChange: () => void
}

const Input:Component<TProps> = (props) => {
    return (
        <input type="text" value={props.query} onInput={props.handleInputChange} />
    );
};

export default Input;