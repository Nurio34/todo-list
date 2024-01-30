import { FaAngleLeft } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import { BsThreeDotsVertical } from "react-icons/bs";

function Header({ updateTitleFn, title }) {
    return (
        <div className="header-container flex gap-2 items-center p-2 border-b-[1px] border-gray-300  ">
            <button>
                <FaAngleLeft className=" pointer-events-none" />
            </button>
            <input
                type="text"
                name="title"
                id="titleInput"
                placeholder="TITLE..."
                value={title}
                className=" border-b-[1px] border-black grow px-2 
                    placeholder:text-black 
                    focus:outline-none"
                onChange={(e) => updateTitleFn(e.target.value)}
            />
            <button>
                <FaBookOpen className=" ml-auto pointer-events-none" />
            </button>
            <button>
                <GrAttachment className=" pointer-events-none" />
            </button>
            <button>
                <BsThreeDotsVertical className=" pointer-events-none" />
            </button>
        </div>
    );
}

export default Header;
