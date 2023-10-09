import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Task1() {

  return (
    <div>
      <div className="bg-white fixed-top pt-3">
        <div className='d-flex justify-content-center'>
          <h1 className='text-muted'>
            <i className="bi bi-clouds text-primary"></i>
            <i>Sky <span className='font-weight-normal ' style={{marginLeft:"-10px"}}>niche</span> <small className='position-absolute  mt-2' style={{fontSize:"12px"}}>Tm</small></i>
          </h1>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-white pt-3">
          <div className='container-fluid'>
            <div className='col-12 row'>
              <div className='col-md-3 col-12 row'>
                <div className='mr-2 ml-4'>
                  <img src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAB1CAMAAABH2l6OAAAAdVBMVEX/ZgD6+vr/ZwT6////YgD+jmb6/P3/XgD73NH/WgD/VwD/UgD6/Pv8u6T74df77ej+hlf+iFz8taH+e0v9pof69PH+bi39l3X8zb39oIH+ekb71cf9qY79m3z8ybj8vqn+ej/9rpX+czr/aB7/RwD9oIr+k2/CPceaAAADbElEQVRoge2a7VrbMAxGDXHtOglNC6SUAuVr4/4vcXR8leTIlgPPxg/rbzWd6I2sSGbm+H+YOTb/3gq1UAu1UAu1UAu1UAu1UNVUyyYGyvKXqHY5I1tJWLtC/yX7S1R/WqGdcRh7xu6nPotqHqsjsOqcw/hzdn/k4CI1zB2EcfMGvRvBO2RS/TU+fb9G73WPqV6zMpGTY1mzC3qx9oKdpdqTqSxxtanBt94QVRQ4QvWXGKkn0XyPT3gpCBzrTQFVc7OxbHZG0KNKSjVG5bqsTsaxwgkLzPUep1qUuO3GsZquRYHF/hnr/ixxux0Gs1uCRgSOUusrlHh0CPlouyuq9jTV3mC0xVDiZoFPdyN/oKLf15qVG/6LY34TcqoJKh7+YZVw1XE70VC50Q3jCc+GrVNDNQGbevv5xTb4Hnq5glPUeodpfGpPdoY+u4jACap9woi3h2fH36LPU0Tg1IyIbd31hxI37CI1fg1VkHj9kYhd5wucogov7WAIex7ryAO+THqq8dTY3eIjk5oak+uiAiepgWvlQGGut9i5SVPtktvTWy48cVTC9K2lChJv3qkbELhNCJym8pzQvlPxew7zRh71eZeguK8Lj13hr8JeoqcaT0Va7V6yCXSe3SIhsIIa6EC67jXXjh7pNCGwgmq3KOLdHmvv8LfRZJVPFST+mw/rkBRYQw33Ymh+oPuUwBqqfUAZH2zkl69TjaclYL8/467s5kmBdVSad91VMIEGZnFpzaTybUG/trgrS7cC2VSWeBbo46sRWEml91dtftFIKt2X5FPxI+q6R2xMyQJWUz2WzW8sMkWqWirtWY6Gw+rm+6jG4wIFVmmgWiqeTLD9Kf4+qnChNE41tlNlU02tpEaH73wqTWVjgWNL6wQq71mjVKM7VT5V2FIH1oo3TBOpvGcNUo3vVBOoGom1Amf8jaNRKKwUOIOKo+9AYFWLyKLyKvuJGl9aJ1FNjZfAH+Z6ZS1lUXmVPUg1sbROo9pVIlfxT0xfoZqA18Bv1nbqVPOouMq+C5xaWidS7TKaa+JWYCo1KnGOwJlUvFt6FTi5tE6l2rOIwqlbgclUE/CufW9ukZFqLpVW2ReB00vrZKrdVo4tfSswnWr8bs62U83BE6nGS5YV5Yf9z4VCLdRCLdRCLdRCLdRC/RnU/2F/AMoLKqfjEW37AAAAAElFTkSuQmCC'} width={'38px'} height={'38px'} className='rounded ' />
                </div>
                <div>
                  <h3>Vegas</h3>
                </div>
              </div>
              <div className='col-md-3 col-12'>
                <div className='row'>
                  <h2 className='text-muted'>
                    <i className="bi bi-text-right  " style={{color:"#2e52d2"}}></i>
                  </h2>
                  <h5 className='pl-2 pt-1'>
                    Project
                  </h5>
                </div>
              </div>
              <div className='col-md-3 col-12'>
              
                <form className="form-inline my-2 my-lg-0">
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span
        className="input-group-text"
        id="basic-addon1"
        style={{
          position: 'relative',
          marginRight: '-10px',
          borderRadius: '15px 0 0 15px',
          backgroundColor: '#ffffff',
          border: '1px solid #ced4da', // Add a border
          borderRight: '0', // Remove the right border
        }}
      >
        <i className="bi bi-search text-muted pl-3"></i>
      </span>
    </div>
    <input
      type="search"
      className="form-control text-muted "
      placeholder="Search here"
      style={{
        borderRadius: '0 15px 15px 0',
        
        borderLeft:"0px",
        borderRight: '1px solid #ced4da', 
        borderTop: '1px solid #ced4da',
        borderBottom: '1px solid #ced4da',// Add a border
      }}
    />
  </div>
</form>

              </div>
              <div className='col-md-3 col-12'>
                <div className='row'>
                  <div className='col-6 text-left pt-2'>
                    <h5>
                      <i className="bi bi-envelope-fill px-3 text-muted "> <span className='badge badge-pill bg-primary text-white position-absolute ' style={{fontSize:"8px",marginLeft:"-10px"}}>6</span></i>
                      <i className="bi bi-bell-fill text-muted"><span className='badge badge-pill bg-primary text-white border border-white position-absolute' style={{fontSize:"8px",marginLeft:"-8px", marginTop:"-2px"}}>4</span></i>
                    </h5>
                  </div>
                  <div className='row'>
                    <img src={'https://media.istockphoto.com/id/482166286/photo/growing-up.jpg?s=612x612&w=0&k=20&c=ptyxW-f7VMp0jFyAJ4uUV0zOPQ54WFJObn2UeT-tYDA='} alt='user not found' width={'40px'} height={'40px'} className='rounded-circle' />
                    <div className='pl-2'>
                      <div className='font-weight-bold ' style={{marginBottom:"-8px"}}>peter parkur</div>
                      <small className='font-weight-light ' >super Admin</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
 
      
        </div>
    </div>
  );
}

export { Task1 };
