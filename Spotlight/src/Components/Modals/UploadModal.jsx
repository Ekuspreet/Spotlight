import React from 'react'

const UploadModal = () => {
    return (
        <>
     <input class="modal-state" id="modal-3" type="checkbox" />
      <div class="modal ">
        <label class="modal-overlay"></label>
        <div class="modal-content flex flex-col gap-5">
          <label for="modal-3" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
          <h2 class="text-xl">Upload A New Project</h2>

        {/* Modal Content   */}
          

            <div class="flex flex-col">
                <label className='ml-3' for="project-name">Project Name</label>
                <input type="text" id="project-name" class="input " placeholder="Enter Project Name" />
            </div>
            <div class="flex flex-col">
                <label className='ml-3' for="project-desc">Project Description</label>
                <textarea id="project-desc" class="input " placeholder="Enter Project Description" />
            </div>
            <div class="flex flex-col">
                <label className='ml-3' for="project-thumbnail">Project Thumbnail</label>
                <input type="file" id="project-thumbnail" class="input-file " placeholder="Upload Project Thumbnail" />
            </div>
            
                    
            
        {/* Modal Conent Finish */}
          <div class="flex gap-3">
            <button class="btn btn-success btn-block">Confirm Upload</button>
            <button class="btn btn-error btn-block">Clear Form</button>
          </div>
        </div>
      </div>
        </>
    )
}

export default UploadModal