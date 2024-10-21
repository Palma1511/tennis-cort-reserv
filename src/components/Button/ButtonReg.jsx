import { useState } from "react"
import "./ButtonReg.css"
import Modal from "../Modal/Modal.jsx"

export function ButtonReg() {
    const [isHovered, setIsHovereed] = useState(false)

    return (
        <div
            className="hover-area"
            onMouseEnter={() => setIsHovereed(true)}
            onMouseLeave={() => setIsHovereed(false)}
        >
            <button className="element-button">
                <span className="element-button-text">Записаться онлайн</span>
                {isHovered && (
                    <Modal isHovered={isHovered} className="modals" />
                )}
            </button>
        </div>
    )
}