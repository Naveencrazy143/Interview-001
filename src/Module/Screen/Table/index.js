import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { increment } from '../../../Redux/Action';

function Table({ tableDataSet, displayDataSet, tableOnClick }) {
    const renderTableHeader = () => {
      if (displayDataSet) {
   
        const header = Object.keys(displayDataSet[0])
        return header?.map(key => {
          return <th scope="col" className='bg-white text-muted' key={key}>{key}</th>
        })
      }
    }
  
    function renderTableValue(eachObject) {
      return Object.keys(eachObject)?.map((key) => {
        let value = eachObject[key ]
        return <td style={{ whiteSpace: 'pre-wrap' }} key={key}  ><span >{value}</span></td>
      })
    }
  
    return (
  
      <table className="table align-items-center table-flush ">
        <thead className="thead-light ">
          <tr >
            {
              renderTableHeader()
            }
          </tr>
        </thead>
        <tbody className='bg-white'>
          {displayDataSet && displayDataSet.length > 0 &&
            displayDataSet.map((each_table_obj, idx) => {
              return (
                <tr key={idx} onClick={(e) => {
                  let selected = {};
                  if (tableDataSet) {
                    selected = tableDataSet[idx]
                  } else {
                    selected = each_table_obj
                  }
  
                  if (tableOnClick) {
                    e.preventDefault();
                    e.stopPropagation();
                    tableOnClick(e, idx, selected)
                  }
  
                }}>
                  {renderTableValue(each_table_obj)}
                </tr>)
            })
          }
        </tbody>
      </table>
  
    )
  
  }
  
  export { Table }