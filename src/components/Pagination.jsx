import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import Logo from "../assets/google-pagination-logo.png";
import { pagination } from "../utils/Constants";

const Pagination = ({queries}) => {
    const {query}=useParams();
    const [page, setPage]=useState(pagination[0].startIndex);
    const navigate=useNavigate();

    useEffect(()=>{
        setPage(pagination[0].startIndex);
    },[query])

    const paginationClickHandler=(startIndex)=>{
        setPage(startIndex)
        navigate(`/${query}/${startIndex}`)
    }

    return <div className="flex flex-col items-center py-14 max-w-[700px]">
        <div className="relative text-[#4285f4]">
            {queries.previousPage && (<div className="absolute left-[-30px] md:left-[-40px] top-[10px]" onClick={()=>paginationClickHandler(queries.previousPage[0].startIndex)} >
              
                <div className="cursor-pointer absolute left-[-310px] top-[-5px] hidden md:block ">
                    Prev
                </div>
                </div> )}
             
                {queries.nextPage && (<div className="absolute right-[-30px] md:right-[-40px] top-[10px]" onClick={()=>paginationClickHandler(queries.nextPage[0].startIndex)} >
               
                <div className="cursor-pointer absolute left-[300px] top-[-5px] hidden md:block ">
                    Next
                </div>
                </div> )}
        </div>
        <div className="flex gap-3 text-[#4285f4] text-sm">
            {pagination.map((p)=>(
               <span
               key={p.page}
               className={`cursor-pointer inline-block py-2 px-4 mx-1 border border-gray-300 rounded transition-colors hover:bg-gray-200 ${
                 page === p.startIndex ? "bg-blue-500 text-white" : "text-black"
               }`}
               onClick={() => paginationClickHandler(p.startIndex)}
             >
               {p.page}
             </span>
             
            ))}
        </div>
    </div>;
};

export default Pagination;
