import { CiSquareCheck } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { CiTextAlignLeft } from "react-icons/ci";
import { CiTextAlignCenter } from "react-icons/ci";
import { CiTextAlignRight } from "react-icons/ci";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { PiTextAUnderline } from "react-icons/pi";
import { MdOutlineFormatStrikethrough } from "react-icons/md";

function Footer({ handleCheckVisibilty, currentId }) {
    return (
        <div className="footer-container flex justify-between fixed bottom-0 w-full py-2 bg-black text-white text-lg">
            <div className="list-style-group flex justify-center gap-2 grow border-r-[1px] border-white">
                <button onClick={() => handleCheckVisibilty(currentId)}>
                    <CiSquareCheck className=" pointer-events-none" />
                </button>
                <button>
                    <FaListUl className=" pointer-events-none" />
                </button>
                <button>
                    <FaListOl className=" pointer-events-none" />
                </button>
            </div>
            <div className="text-align-group flex justify-center gap-2 grow border-r-[1px] border-white">
                <button>
                    <CiTextAlignLeft className=" pointer-events-none" />
                </button>
                <button>
                    <CiTextAlignCenter className=" pointer-events-none" />
                </button>
                <button>
                    <CiTextAlignRight className=" pointer-events-none" />
                </button>
            </div>
            <div className="text-style-group flex justify-center gap-2 grow border-r-[1px] border-white">
                <button>
                    <FaBold className=" pointer-events-none" />
                </button>
                <button>
                    <FaItalic className=" pointer-events-none" />
                </button>
                <button>
                    <PiTextAUnderline className=" pointer-events-none" />
                </button>
                <button>
                    <MdOutlineFormatStrikethrough className=" pointer-events-none" />
                </button>
            </div>
            <div className="text-clr-group flex justify-center gap-2 grow">
                <button>
                    <CiSquareCheck className=" pointer-events-none" />
                </button>
                <button>
                    <CiSquareCheck className=" pointer-events-none" />
                </button>
                <button>
                    <CiSquareCheck className=" pointer-events-none" />
                </button>
            </div>
        </div>
    );
}

export default Footer;
