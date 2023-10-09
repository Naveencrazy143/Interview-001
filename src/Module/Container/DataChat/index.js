import React from 'react'

function DataChat(buttonData) {
  return (
    <div>
      <div className='row '>
        <div className='col-8'>

      
        '   <div class="btn-group p-1 ml-3" role="group" aria-label="Basic example" style={{backgroundColor:'#e1e1e1',borderRadius:'20px'}}>
  <button type="button" class="btn btn-sm text-muted" style={{backgroundColor:'white',borderRadius:'20px'}}><span className='text-primary '>62</span>All Contact</button>
  <button type="button" class="btn btn-sm text-muted" style={{backgroundColor:'#e1e1e1',borderRadius:'20px'}}><span>2</span> Pending Invitation  </button>
 
  
</div>
</div>
<div className='col-4'>
  <div className='row'>

  <div className='col-6'>

<button type="button" class="btn btn-sm  bg-primary text-white px-3" style={{backgroundColor:'white',borderRadius:'16px'}}> <i class="bi bi-person-fill"></i>+New Project</button>


</div>
<div className='col h5'>

<i class="bi bi-border-width pr-3"></i>
<i class="bi bi-grid-fill text-primary pl-2"></i>
</div>
</div>

</div>

      </div>
 
    </div>
  )
}

export {DataChat}