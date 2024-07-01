import { createSignal, type Component, type JSX } from 'solid-js'
interface  Props{
    initialValue: number,
    children?: JSX.Element
}
export const Counter: Component  <Props> = (props) => {
    const [ counter , setCounter ] = createSignal(props.initialValue)
    
    return (
        <div>
            {props.children}
            <h1>Value: { counter()} </h1>
            <button onClick={()=> setCounter( counter() + 1 )} class="bg-blue-500 p-2 mr-2 rounded">+1</button>
            <button onClick={()=> setCounter( counter() - 1 )} class="bg-blue-500 p-2 mr-2 rounded">-1</button>
        </div>
    )
}