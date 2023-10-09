function PageNation({ isPagination, currentPage, noOfPage,previousClick, nextClick, rightArrow,leftArrow ,paginationNumberClick,children}) {

console.log(isPagination, currentPage, noOfPage)

    const GetPaginatorSet = ({ currentPage, totalPages,leftArrow=false ,rightArrow=false}) => {
  
  
      if (currentPage && totalPages) {
        const children = [];
        if (currentPage && noOfPage) {
  
  
          let current_page = currentPage;
          let total_pages = noOfPage;
  
          let page_range = 5
          let page_range_start = current_page - Math.floor(page_range / 2)
          let page_range_end = current_page + Math.floor(page_range / 2)
  
          if (page_range_start <= 0) {
            let adjust = Math.abs(page_range_start)
            page_range_start = page_range_start + adjust + 1
            page_range_end = page_range_end + adjust + 1
  
          }
  
          if (total_pages < page_range_end) {
            let adjust = page_range_end - total_pages
            page_range_end = total_pages
            page_range_start = page_range_start - adjust
            if (page_range_start <= 0)
              page_range_start = 1
          }


          const ChildComponent = ({ text }) => {
            return (<li className={`${currentPage + "" === text + "" ? 'active' : ''} page-item `} onClick={() => { if (paginationNumberClick) paginationNumberClick(text) }}  ><a className="page-link mx-1" style={{borderRadius:"17px"}}>{text}</a></li>);
          }
  
  
          for (var i = page_range_start; i <= page_range_end; i++) {
            children?.push(<ChildComponent text={i} />)
          }



        }

        
  
        return (


    //       <div className="">
    //         <ul className="pagination col justify-content-end mb-0">
    //       {leftArrow &&
    //          <li className={`${currentPage === 1 ? 'disabled' : ''} page-item `} onClick={currentPage === 1 ? undefined : previousClick}>
    //             <a className="">
    //               <i className="fas fa-angle-left"></i>
    //               <span className="sr-only">Previous</span>
    //             </a>
    //           </li>
    //   }
    //         {rightArrow &&  <li className={`${currentPage >= totalPages ? 'disabled' : ''} page-item `} onClick={currentPage >= totalPages ? undefined : nextClick} >
    //             <a className="">
    //               <i className="fas fa-angle-right"></i>
    //               <span className="sr-only">Next</span>
    //             </a>
    //           </li>
    //   }
    //         </ul>
  
    //       </div >
<nav aria-label="...">
  <ul class="pagination justify-content-end">
  {leftArrow &&
    <li className={`${currentPage === 1 ? 'disabled' : ''} page-item px-1 `} onClick={currentPage === 1 ? undefined : previousClick} >
      <a class="page-link " href="#" tabindex="-1"  style={{borderRadius:"17px"}}>Previous</a>
    </li>
      }
    <div className='row pointer mx-1'>{children}</div>

    {rightArrow && <li className={`${currentPage >= totalPages ? 'disabled' : ''} page-item  px-1`} onClick={currentPage >= totalPages ? undefined : nextClick}>
      <a class="page-link" href="#" style={{borderRadius:"17px"}}>Next</a>
    </li>
      }
  </ul>
</nav>



        )
      } else {
        return <></>
      }
  
    }
    return (
     <>
        { <GetPaginatorSet currentPage={currentPage} totalPages={noOfPage}leftArrow={leftArrow} rightArrow={rightArrow} />}
        </>
    
  
    );
  }
  
  export { PageNation }