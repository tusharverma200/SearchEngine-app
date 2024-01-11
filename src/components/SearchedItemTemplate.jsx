const SearchedItemTemplate = ({data}) => {
    if (!data) {
        // If no data is provided, display a message
       console.log("No data found")
    }
     function createMarkup(html){
        return {__html:html};
     }

    return (
        
    <div className="flex flex-col py-3 max-w-[700px]">
        <div className="group cursor-pointer "
         onClick={()=>window.open(data.link)}>
       <div className="text-sm truncate text-[#202124] ">
        {data.formattedUrl}
       </div>
       <div className=" group-hover:underline text-xl text-[#0d57ab] pt-2">
        {data.title}
       </div>
        </div>
        <div className="text-sm text-[#4d5156] leading-6 pt-1 " dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)} />
           
    </div>
    );
};

export default SearchedItemTemplate;
