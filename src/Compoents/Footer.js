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

function Footer({ handleCheckVisibilty,setAlignLeft,setAlignCenter,setAlignRight,handleBold,handleItalic,handleTextDecoration,handleSelect}) {
    return (
        <div className="footer-container flex justify-between fixed bottom-0 w-full py-2 bg-black text-white text-lg">
            <div className="list-style-group flex justify-center gap-2 grow border-r-[1px] border-white">
                <button onClick={handleCheckVisibilty}>
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
                <button onClick={setAlignLeft}>
                    <CiTextAlignLeft className=" pointer-events-none" />
                </button>
                <button onClick={setAlignCenter}>
                    <CiTextAlignCenter className=" pointer-events-none" />
                </button>
                <button onClick={setAlignRight}>
                    <CiTextAlignRight className=" pointer-events-none" />
                </button>
            </div>
            <div className="text-style-group flex justify-center gap-2 grow border-r-[1px] border-white">
                <button onClick={handleBold}>
                    <FaBold className=" pointer-events-none" />
                </button>
                <button onClick={handleItalic}>
                    <FaItalic className=" pointer-events-none" />
                </button>
                <button onClick={()=> handleTextDecoration("underline")}>
                    <PiTextAUnderline className=" pointer-events-none" />
                </button>
                <button onClick={()=> handleTextDecoration("line-through")}>
                    <MdOutlineFormatStrikethrough className=" pointer-events-none" />
                </button>
            </div>
            <div className="text-clr-group flex justify-center gap-2 grow">
                <select name="Size" id="sizeSelect" 
                    className="text-black w-10 text-sm"
                    onChange={e=>handleSelect(e.target.value)}
                    >
                    {Array(99).fill("").map((item,index)=>{
                        return <option key={index+1} value={index + 1}>{index+1}</option>
                    })}
                </select>
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
