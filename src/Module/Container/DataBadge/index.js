import React from 'react'

function DataBadge(buttonData) {
  return (
    <div>
      <div className='row'>
        <div className='col-8'>

      
        '   <div class="btn-group p-1" role="group" aria-label="Basic example" style={{backgroundColor:'#e1e1e1',borderRadius:'20px'}}>
  <button type="button" class="btn btn-sm text-muted" style={{backgroundColor:'white',borderRadius:'20px'}}><span className='text-primary '>13</span> AllProjects</button>
  <button type="button" class="btn btn-sm text-muted" style={{backgroundColor:'#e1e1e1',borderRadius:'20px'}}><span>2</span> On Process</button>
  <button type="button" class="btn btn-sm text-muted" style={{backgroundColor:'#e1e1e1',borderRadius:'20px'}}><span>4</span> pending</button>
  <button type="button" class="btn btn-sm text-muted" style={{backgroundColor:'#e1e1e1',borderRadius:'20px'}}><span>7</span> Closed</button>
  
</div>
</div>
<div className='col-4'>
  <div className='row'>

  <div className='col-5'>

<button type="button" class="btn btn-sm  bg-primary text-white px-3" style={{backgroundColor:'white',borderRadius:'16px'}}>New Project</button>


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

export {DataBadge}