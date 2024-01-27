import React from 'react'
const Search = () => {
        const message = "Search Project"
        return (
         <>
         <div className=" flex items-center mt-10 md:w-2/4 gap-3 px-2 md:px-28 ">
              <input
                className=" input-block input input-ghost-primary  "
                placeholder={message}
              />
              <div className="btn btn-outline-primary ">
              <span class="material-symbols-outlined">
search
</span></div>

            </div>
            </>
          );
          
        }
export default Search