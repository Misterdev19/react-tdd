
import { FaTrashCan } from "react-icons/fa6";
export function ItemsElement  ({ text, habdleClick }) {

    return (
        <li >{text}
            <button type="button" onClick={habdleClick}>
                <FaTrashCan />
            </button>
        </li>
    )

}

