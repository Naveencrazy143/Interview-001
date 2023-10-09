import { NavLink } from 'react-router-dom';
import './style.css';

const Task2 = () => {
  return (
        <div style={{ marginTop: "140px" }}>
        <div className='col-md-2 col-2 pl-4 pt-2 '>
          <div className=" justify-content-start ">
            <ul className="nav flex-column">
              <li className="nav-item ">
              <NavLink className="nav-link  " activeClassName="active" to="/project">Project</NavLink>

              </li>
              <li className="nav-item">
              <NavLink className="nav-link " activeClassName="active" to="/contract">Contract</NavLink>

              </li>
              <li className="nav-item">
              <NavLink className="nav-link " activeClassName="active" to="/kanban">Kanban</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>   

  );
};

export {Task2}