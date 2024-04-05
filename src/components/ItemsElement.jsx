
import { FaTrashCan } from "react-icons/fa6";
export function ItemsElement  ({ id, text, habdleClick }) {

    return (
        <li key={id}>{text}
            <button type="button" onClick={habdleClick}>
                <FaTrashCan />
            </button>
        </li>
    )

}

