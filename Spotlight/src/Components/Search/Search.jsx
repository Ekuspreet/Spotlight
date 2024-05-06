import React from 'react'
const Search = () => {
        const message = "Search Project"
        return (
         <>
         <div className=" flex  gap-3  min-w-1/2   ">
              <input
                className=" input-block input input-ghost-primary  "
                placeholder={message}
              />
              <div className="btn btn-outline-primary ">
              <span className="material-symbols-outlined">
search
</span></div>

            </div>
            </>
          );
          
        }
export default Search