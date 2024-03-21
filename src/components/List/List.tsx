import {Component, For} from "solid-js";

type TProps = {
    sortedItems: string[]
}

const List:Component<TProps> = (props) => {
    return (
        <ul>
            <For each={props.sortedItems}>{(item, index) => (
                <li key={index}>{item}</li>
            )
            }
            </For>
        </ul>
    );
};

export default List;