import {Container} from "./styles";
import {BiPlus} from "react-icons/bi";
import {MdClose} from "react-icons/md";


export function NoteItem({isNew, value, onClick, ...rest }){
return(
<Container isNew = {isNew}>

<input 
type="text"
value = {value}
readOnly = {!isNew}
{...rest}
/>

<button 
type="button"
onClick={onClick}
className={ isNew ? "button-add" : "button-delete"}
>

{isNew ? <BiPlus /> : <MdClose />}
</button>
</Container>
)
}
