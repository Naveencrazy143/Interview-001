
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { contractData } from '../../../Redux/Action';


function KabanDetails() {
    const dispatch=useDispatch()
  
    const projectData ={
        to_do_list:'24',
        onProcess:'2',
        to_do_list_details :[{
            designation:'Graphic Designer',
            title:'Visual Graphic for presentation to client',
            users_profile:[
                'data:image/png;base64,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',
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAZlBMVEX///8WFhgAAAD8/PwSEhRXV1gLCw7Z2dlRUVIYGBrf39/39/ezs7QAAAYmJiabm5xjY2Rvb2+UlJQ2Njbr6+uOjo6qqqpLS0yBgYJdXV7l5eVAQEF4eHjMzMwuLi/GxsYeHiC9vb2/Dj+0AAAGA0lEQVR4nO1aC7OqKhS2BZIl+S7LtmX//09eHlaKgIm2z74zfjPnzE5BP9ebBZ63YsWKFStWrFixYsUKO9D7L4Q0V38NYU3jc5pwpOeY1uGvE9jSNAeOg4T4O0/p9teohPtjgAEI3vSBCQAOjvvfIIJOvoZBl4l/+rZ5VBmj0HkpJhK4Q4sRyapvEWAfWMQR4M5XQ5NfS9/3y2veQEdCGKK4+JbHPPInB8zM8fZD7/si5FYQhsX+Tn9uzFifAyB/fIVDdXnqgkCT0kIzpKBp8x50WVotTLY0Avl4gEBL4UkkgOfAiC6qFfaoc6uMAyQ8PCH90/nlsE7g0KrlvCiNIoD2uX79wfDabzlDYJbaNLDv214lCbhR9MHHsTH01s7Itya5TWThbW8HKYi06OUuM2/kFakUB0TbJZTCSDREGj2Vvz+Zw0Clt5BmARqMRMSftoN8P3xX9ciSoAyS7FEN+e1z2HEa86XBRJsfBAm/6j8LeeEjucmsyv6/JY9QHVD5gsYhL2ZLQ3gHIxH2Khv2714CvLMHS7Ll3VPGhJIGBDM5sDghbMzvX2WCSLtZrY2Waah+tC+nn+eRoC0J9fFVDpq8Dnk/aCMuDXGDulNgmhWWSXI1I2wjHQnpl31UuXhCVM0wjQtsMFN53zs4uYOWBLPEwev2wnjg4szBe8BmJ8SphKpSGJ0OOyj7jNFTqc6JPrxyaUKqXj/p1dEq5aQOT/lwcnUtR2Mx/aYmpGJnqjo58G4w/iY+JnYjUUVYa95nmyh0bil0giO3oifjdkX8vknwYGoTBXvdIFQin/CwlrmQQNK4azVBPGCEhWKIbHYthAEuvipskHmYmsp/7Aphc36Uz0Hc43V2O45QivE+uHFTI7cKchvMuUvlTneTvXCQYDAxNK7LXiohw0mBcBO1NhjHUQhxGP/3YwrRvk24CRynUUCSPW6Gxasbi6LBUrLTLHTLV57DsOnKQgRQjNVcZ0cb/XkGUW9VH7AYxCfL86wQwR80q4kQj1on1vhCIZ6nka0VvCwguemOFeZp+jtmFNzB1fAjMZJGTPUdD3ZYJ1wLaoOfMtxHZTGMdN7TVz9ZX/bn6AKnx6uOkTyiryTu5u8ygpcWONLFOiTLDotCYq0j7HnEmFhkCC3mei2GVvskuT5biIJAb2lGpAdLkfawVnyGAlOUj4dprppwFqUpByZmGpAY5oQlZ2G6qwUSLAwLO+Shi6EI38HF2OAIBIspsRMlPMb4prtecTGsii7mhTGvV8hEFhZZyJSrqfsw2JLmdFmM2AV/VUwUHhhIbGmyONiF3UckqnTTWbYT2KTWUt/FR2zx4oVt1sATTTZSO7jEC3PsbNGKqXrE2TGLH9X7qkEn+2h67LTkEe4ip7LJ47B/0QvjvClPJicRZfjEPGLJqR6iORBM4Eq7PEJ6FVdzqmfhklP19YVodtbX1igJQEprbjtFTVN4Xb3WnqYt6lJfGEojFiiyjmNgbpeE8J2SjtsSyDRhw6XW0tedoqk2iFXDQlTTZnOpO/U1MyNRjlfggkYZKjPdanDNeoQ3DT4jwbt9ihjd1iPDtRlCYWLsZ6nYQRJ2DdRxbTZcp6Lx6rsnjXP3jU7rVE+3ZqdTSPS/wHnNPuhfFJuxRVkfePNWp3P/4t3LaX8fp4mio4AZvZx3X0ta2XaknaURBgiXYNNn9LWUHt9oO0sjjDYDIP/g3OPr9zvlj4nCaFucs/qdvd6vtetsFIawhHm9314ffLRfoIPMXjP74O89AZmMHIRRSH3sZuwJdPZHJkasFwsq9kfwnP2R915RMTlYtCyOxQJ7Ra99s2C6h3DgYP6+GYfMYMTFNtuJu/l7iO1+6jzM3k997i3PwQJ7y899dncssM/eOXPgSmKJMwdSGu5KOSxz/kKcRfm46lWx2FkUYaKOnsLP5Sx2PKhzRmkKlj6j1D2v9bkgFj6vJfA+u/YRvnB2TeJ9ju8DZeQzU4cByplGO4cvnmn0Buc7Dbr44vnOFn/hrCvHXzj3K4n8+zPQLyr/+jz4Hzobv2LFihUrVqxYsWLF/wz/AdmNSWuzlyc/AAAAAElFTkSuQmCC',
                'data:image/png;base64,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',
                'data:image/png;base64,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'
            ],
            progress:'24',
            color:"#3db755"

        },
        {
            designation:'Digital Marketing',
            title:'Build Database Design For Fasto Admin v2 ',
            users_profile:[
                'data:image/png;base64,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',
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAZlBMVEX///8WFhgAAAD8/PwSEhRXV1gLCw7Z2dlRUVIYGBrf39/39/ezs7QAAAYmJiabm5xjY2Rvb2+UlJQ2Njbr6+uOjo6qqqpLS0yBgYJdXV7l5eVAQEF4eHjMzMwuLi/GxsYeHiC9vb2/Dj+0AAAGA0lEQVR4nO1aC7OqKhS2BZIl+S7LtmX//09eHlaKgIm2z74zfjPnzE5BP9ebBZ63YsWKFStWrFixYsUKO9D7L4Q0V38NYU3jc5pwpOeY1uGvE9jSNAeOg4T4O0/p9teohPtjgAEI3vSBCQAOjvvfIIJOvoZBl4l/+rZ5VBmj0HkpJhK4Q4sRyapvEWAfWMQR4M5XQ5NfS9/3y2veQEdCGKK4+JbHPPInB8zM8fZD7/si5FYQhsX+Tn9uzFifAyB/fIVDdXnqgkCT0kIzpKBp8x50WVotTLY0Avl4gEBL4UkkgOfAiC6qFfaoc6uMAyQ8PCH90/nlsE7g0KrlvCiNIoD2uX79wfDabzlDYJbaNLDv214lCbhR9MHHsTH01s7Itya5TWThbW8HKYi06OUuM2/kFakUB0TbJZTCSDREGj2Vvz+Zw0Clt5BmARqMRMSftoN8P3xX9ciSoAyS7FEN+e1z2HEa86XBRJsfBAm/6j8LeeEjucmsyv6/JY9QHVD5gsYhL2ZLQ3gHIxH2Khv2714CvLMHS7Ll3VPGhJIGBDM5sDghbMzvX2WCSLtZrY2Waah+tC+nn+eRoC0J9fFVDpq8Dnk/aCMuDXGDulNgmhWWSXI1I2wjHQnpl31UuXhCVM0wjQtsMFN53zs4uYOWBLPEwev2wnjg4szBe8BmJ8SphKpSGJ0OOyj7jNFTqc6JPrxyaUKqXj/p1dEq5aQOT/lwcnUtR2Mx/aYmpGJnqjo58G4w/iY+JnYjUUVYa95nmyh0bil0giO3oifjdkX8vknwYGoTBXvdIFQin/CwlrmQQNK4azVBPGCEhWKIbHYthAEuvipskHmYmsp/7Aphc36Uz0Hc43V2O45QivE+uHFTI7cKchvMuUvlTneTvXCQYDAxNK7LXiohw0mBcBO1NhjHUQhxGP/3YwrRvk24CRynUUCSPW6Gxasbi6LBUrLTLHTLV57DsOnKQgRQjNVcZ0cb/XkGUW9VH7AYxCfL86wQwR80q4kQj1on1vhCIZ6nka0VvCwguemOFeZp+jtmFNzB1fAjMZJGTPUdD3ZYJ1wLaoOfMtxHZTGMdN7TVz9ZX/bn6AKnx6uOkTyiryTu5u8ygpcWONLFOiTLDotCYq0j7HnEmFhkCC3mei2GVvskuT5biIJAb2lGpAdLkfawVnyGAlOUj4dprppwFqUpByZmGpAY5oQlZ2G6qwUSLAwLO+Shi6EI38HF2OAIBIspsRMlPMb4prtecTGsii7mhTGvV8hEFhZZyJSrqfsw2JLmdFmM2AV/VUwUHhhIbGmyONiF3UckqnTTWbYT2KTWUt/FR2zx4oVt1sATTTZSO7jEC3PsbNGKqXrE2TGLH9X7qkEn+2h67LTkEe4ip7LJ47B/0QvjvClPJicRZfjEPGLJqR6iORBM4Eq7PEJ6FVdzqmfhklP19YVodtbX1igJQEprbjtFTVN4Xb3WnqYt6lJfGEojFiiyjmNgbpeE8J2SjtsSyDRhw6XW0tedoqk2iFXDQlTTZnOpO/U1MyNRjlfggkYZKjPdanDNeoQ3DT4jwbt9ihjd1iPDtRlCYWLsZ6nYQRJ2DdRxbTZcp6Lx6rsnjXP3jU7rVE+3ZqdTSPS/wHnNPuhfFJuxRVkfePNWp3P/4t3LaX8fp4mio4AZvZx3X0ta2XaknaURBgiXYNNn9LWUHt9oO0sjjDYDIP/g3OPr9zvlj4nCaFucs/qdvd6vtetsFIawhHm9314ffLRfoIPMXjP74O89AZmMHIRRSH3sZuwJdPZHJkasFwsq9kfwnP2R915RMTlYtCyOxQJ7Ra99s2C6h3DgYP6+GYfMYMTFNtuJu/l7iO1+6jzM3k997i3PwQJ7y899dncssM/eOXPgSmKJMwdSGu5KOSxz/kKcRfm46lWx2FkUYaKOnsLP5Sx2PKhzRmkKlj6j1D2v9bkgFj6vJfA+u/YRvnB2TeJ9ju8DZeQzU4cByplGO4cvnmn0Buc7Dbr44vnOFn/hrCvHXzj3K4n8+zPQLyr/+jz4Hzobv2LFihUrVqxYsWLF/wz/AdmNSWuzlyc/AAAAAElFTkSuQmCC',
                'data:image/png;base64,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',
                'data:image/png;base64,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'
            ],
            progress:'79',
            color:"#5c3697"

        }
    
    ],
        onProcess_details:[{
            designation:'Ux Writer',
            title:'Caption description for on bording screens',
            users_profile:[
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAZlBMVEX///8WFhgAAAD8/PwSEhRXV1gLCw7Z2dlRUVIYGBrf39/39/ezs7QAAAYmJiabm5xjY2Rvb2+UlJQ2Njbr6+uOjo6qqqpLS0yBgYJdXV7l5eVAQEF4eHjMzMwuLi/GxsYeHiC9vb2/Dj+0AAAGA0lEQVR4nO1aC7OqKhS2BZIl+S7LtmX//09eHlaKgIm2z74zfjPnzE5BP9ebBZ63YsWKFStWrFixYsUKO9D7L4Q0V38NYU3jc5pwpOeY1uGvE9jSNAeOg4T4O0/p9teohPtjgAEI3vSBCQAOjvvfIIJOvoZBl4l/+rZ5VBmj0HkpJhK4Q4sRyapvEWAfWMQR4M5XQ5NfS9/3y2veQEdCGKK4+JbHPPInB8zM8fZD7/si5FYQhsX+Tn9uzFifAyB/fIVDdXnqgkCT0kIzpKBp8x50WVotTLY0Avl4gEBL4UkkgOfAiC6qFfaoc6uMAyQ8PCH90/nlsE7g0KrlvCiNIoD2uX79wfDabzlDYJbaNLDv214lCbhR9MHHsTH01s7Itya5TWThbW8HKYi06OUuM2/kFakUB0TbJZTCSDREGj2Vvz+Zw0Clt5BmARqMRMSftoN8P3xX9ciSoAyS7FEN+e1z2HEa86XBRJsfBAm/6j8LeeEjucmsyv6/JY9QHVD5gsYhL2ZLQ3gHIxH2Khv2714CvLMHS7Ll3VPGhJIGBDM5sDghbMzvX2WCSLtZrY2Waah+tC+nn+eRoC0J9fFVDpq8Dnk/aCMuDXGDulNgmhWWSXI1I2wjHQnpl31UuXhCVM0wjQtsMFN53zs4uYOWBLPEwev2wnjg4szBe8BmJ8SphKpSGJ0OOyj7jNFTqc6JPrxyaUKqXj/p1dEq5aQOT/lwcnUtR2Mx/aYmpGJnqjo58G4w/iY+JnYjUUVYa95nmyh0bil0giO3oifjdkX8vknwYGoTBXvdIFQin/CwlrmQQNK4azVBPGCEhWKIbHYthAEuvipskHmYmsp/7Aphc36Uz0Hc43V2O45QivE+uHFTI7cKchvMuUvlTneTvXCQYDAxNK7LXiohw0mBcBO1NhjHUQhxGP/3YwrRvk24CRynUUCSPW6Gxasbi6LBUrLTLHTLV57DsOnKQgRQjNVcZ0cb/XkGUW9VH7AYxCfL86wQwR80q4kQj1on1vhCIZ6nka0VvCwguemOFeZp+jtmFNzB1fAjMZJGTPUdD3ZYJ1wLaoOfMtxHZTGMdN7TVz9ZX/bn6AKnx6uOkTyiryTu5u8ygpcWONLFOiTLDotCYq0j7HnEmFhkCC3mei2GVvskuT5biIJAb2lGpAdLkfawVnyGAlOUj4dprppwFqUpByZmGpAY5oQlZ2G6qwUSLAwLO+Shi6EI38HF2OAIBIspsRMlPMb4prtecTGsii7mhTGvV8hEFhZZyJSrqfsw2JLmdFmM2AV/VUwUHhhIbGmyONiF3UckqnTTWbYT2KTWUt/FR2zx4oVt1sATTTZSO7jEC3PsbNGKqXrE2TGLH9X7qkEn+2h67LTkEe4ip7LJ47B/0QvjvClPJicRZfjEPGLJqR6iORBM4Eq7PEJ6FVdzqmfhklP19YVodtbX1igJQEprbjtFTVN4Xb3WnqYt6lJfGEojFiiyjmNgbpeE8J2SjtsSyDRhw6XW0tedoqk2iFXDQlTTZnOpO/U1MyNRjlfggkYZKjPdanDNeoQ3DT4jwbt9ihjd1iPDtRlCYWLsZ6nYQRJ2DdRxbTZcp6Lx6rsnjXP3jU7rVE+3ZqdTSPS/wHnNPuhfFJuxRVkfePNWp3P/4t3LaX8fp4mio4AZvZx3X0ta2XaknaURBgiXYNNn9LWUHt9oO0sjjDYDIP/g3OPr9zvlj4nCaFucs/qdvd6vtetsFIawhHm9314ffLRfoIPMXjP74O89AZmMHIRRSH3sZuwJdPZHJkasFwsq9kfwnP2R915RMTlYtCyOxQJ7Ra99s2C6h3DgYP6+GYfMYMTFNtuJu/l7iO1+6jzM3k997i3PwQJ7y899dncssM/eOXPgSmKJMwdSGu5KOSxz/kKcRfm46lWx2FkUYaKOnsLP5Sx2PKhzRmkKlj6j1D2v9bkgFj6vJfA+u/YRvnB2TeJ9ju8DZeQzU4cByplGO4cvnmn0Buc7Dbr44vnOFn/hrCvHXzj3K4n8+zPQLyr/+jz4Hzobv2LFihUrVqxYsWLF/wz/AdmNSWuzlyc/AAAAAElFTkSuQmCC',
                'data:image/png;base64,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',
                'data:image/png;base64,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',
                'data:image/png;base64,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'
            ],
            progress:'24',
            color:'#2eb1ff'

        },
       
    
    ],

     
   
      }


      useEffect(()=>{
     dispatch(
        contractData(projectData)
     )

      },[])
      const {contractDetails}=useSelector((state)=>state)

       const {onProcess,onProcess_details,to_do_list,to_do_list_details}=(contractDetails?contractDetails:'')
  
  return (
     
    <div className='mx-2 mt-2 '>
        <div className='card border-top-0 '>
            <div className='row container'>

            <div className='col-6 text-muted mb-3 mt-2  ml-2' style={{fontSize:"14px"}}>
            Documentation and examples for displaying inline and multiline blocks of code with Bootstrap.
            </div>
            <div className='col-5 '>
                <div className='row mt-2'>
<div className='col-6 ml-4'>
<span type="button" className="btn text-white btn-sm" style={{borderRadius:"30px" ,backgroundColor:"#2a4fec"}}> <i className="bi bi-person-fill mr-1 "></i>
  New contact

</span>
</div>
         <div className='col-3'>
         <span type="button" className="btn text-black btn-sm" style={{borderRadius:"30px" ,backgroundColor:"#f4f5fa"}}> <i class="bi bi-pencil-square"></i>
Edit

</span>
            </div>     

<div>

<span type="button" className="btn text-black btn-sm" style={{borderRadius:"30px" ,backgroundColor:"#f4f5fa"}}> <i class="bi bi-file-lock2-fill"></i>
Private

</span>
</div>




</div>  

            </div>
 

            </div>
     
        </div>


    <div className='row'>

  
    <div className="card col-4 m-3" style={{borderTopColor:'#57399e',borderTopWidth:"4px",borderRadius:"10px"}}>
    <div className="card-body ">
<div className='row'>

<div>


      <p className="card-title " style={{fontSize:"15px",fontWeight:"bold"}}>To-Do List ({to_do_list})</p>
      <p className="card-subtitle mb-2  text-muted  " style={{marginTop:"-13px",fontSize:"11px",fontWeight:"normal"}}>Lorem ipsum dora sit amet </p>
      </div>
      <div className='col-3'>

      </div>
      <div className='col '> 
     <span className='rounded-circle  px-2  text-primary font-weight-bolder'style={{backgroundColor:"#d2ddf2", fontSize:"26px"}} >+</span>
      </div>
      </div>

<hr className='bg-light border ' style={{width:"300px" ,marginLeft:"-15px"}}></hr>

{to_do_list_details?.map((el)=>{
    return(
        <div>
            <div className='row'>
<span class=" badge badge-pill  p-2 mb-2 font-weight-normal text-white" style={{backgroundColor:`${el.color}`}}>
{el?.designation} 
</span>
</div>
<div className='row '>
    <div className='h6'>

{el?.title}
</div>
</div>
<div className='row'>
    
    <div className='col-6 row mt-3'>
    {el.users_profile.map((el)=>{
        return(
            <div >
                <img  style={{marginRight:"-10px"}} src={el} width={'35px'} className='rounder-circle'/>
                </div>

        )
    })}    
       
    </div>
    <div className='col-6 container-fluid '>
      
        
<div style={{fontSize:"15px"}} className=' text-muted '>progress <span className='pl-4  font-weigth-bold'>{el?.progress}%</span></div>



<input type="range" min="1" max="100" value={el.progress} ></input>
</div>
    <div>
    
    </div>

</div>
<hr className='bg-light border ' style={{width:"300px" ,marginLeft:"-15px"}}></hr>
          </div>
    )
})}
    </div>


    <button type="button" class="btn btn-primary btn-sm border-0 mb-3 " style={{borderRadius:"20px",backgroundColor:"#e2e7fd",marginTop:"-12px",color:'#8a93d6'}}>
    <span class="badge badge-light mr-3" style={{backgroundColor:"#e2e7fd",color:'#8a93d6'}}>{to_do_list}</span>
Task more 

</button>


  </div>

  {/* two */}
  <div className="card col-4 m-3" style={{borderTopColor:'orange',borderTopWidth:"4px",borderRadius:"10px"}}>
    <div className="card-body ">
<div className='row'>

<div>


      <p className="card-title " style={{fontSize:"15px",fontWeight:"bold"}}>OnProgrees({onProcess})</p>
      <p className="card-subtitle mb-2  text-muted  " style={{marginTop:"-13px",fontSize:"11px",fontWeight:"normal"}}>Lorem ipsum dora sit amet </p>
      </div>
      <div className='col-3'>

</div>
      <div className='col-auto '> 
     <span className='rounded-circle  px-2 text-primary font-weight-bolder'style={{backgroundColor:"#d2ddf2", fontSize:"26px"}} >+</span>
      </div>
      </div>

<hr className='bg-light border ' style={{width:"300px" ,marginLeft:"-15px"}}></hr>

{onProcess_details?.map((el)=>{
    return(
        <div>
            <div className='row'>
<span class=" badge badge-pill  p-2 mb-2 font-weight-normal text-white" style={{backgroundColor:`${el.color}`}}>
{el?.designation} 
</span>
</div>
<div className='row '>
    <div className='h6'>

{el?.title}
</div>
</div>
<div className='row'>
    
    <div className='col-6 row mt-3'>
    {el.users_profile.map((el)=>{
        return(
            <div >
                <img  style={{marginRight:"-10px"}} src={el} width={'35px'} className='rounder-circle'/>
                </div>

        )
    })}    
       
    </div>
    <div className='col-6 container-fluid '>
      
        
<div style={{fontSize:"15px"}} className=' text-muted '>progress <span className='pl-4  font-weigth-bold'>{el?.progress}%</span></div>



<input type="range" min="1" max="100" value={el.progress} ></input>
</div>
    <div>
    
    </div>

</div>
<hr className='bg-light border ' style={{width:"300px" ,marginLeft:"-15px"}}></hr>
          </div>
    )
})}
    </div>
  </div>

  </div>
  </div>
  )
}

export { KabanDetails}