import {useState}from 'react'
import { Table } from '../Table'
import { PageNation } from '../../Container'
import { DataBadge } from '../../Container'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment } from '../../../Redux/Action';


function DetailsScreen() {
    const dispatch=useDispatch()
 
     const  paginationHandler=(type, position)=> {
        let page = type === 'next' ? position + 1 : type === 'prev' ? position - 1 : position;
        return page;
      }
      const [numberData,setNumberdata]=useState(0)
const [pagData,setPageData]=useState(1)
      const getTaskHandler =(el)=>{
       
        setPageData(el)
        if(el===2){
        setNumberdata(el)
        }
        if(el===1){
            setNumberdata(0)
            }


      }
 
    const projectData = {
        totalProject: '14',
        onProcess: '12',
        pending: '4',
        clpose: '7',
        details: [
            {
                orderId: "#P-00000444",
                brand: "Build Branding person for Etza.id",
                date: " sep 22 20023",
                deadlineDate: 'Monday,Dec 28th 2020',
                clintName: 'kevin',
                customerName: 'praveen',
                action: 'pending',
                user_profile: 'data:image/png;base64,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',
                clint_profile: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAYFBMVEX///8AAADw8PA0NDTCwsLGxsb4+Pj19fXW1tZ7e3ucnJwpKSkxMTHJycm6urqvr69ra2tgYGAgICCHh4c5OTmoqKjj4+NMTEzQ0NA/Pz8SEhJVVVUZGRnc3NyTk5NlZWXEd9MwAAACwElEQVRoge2aW7aiMBBFSZSXIE8BxavOf5a30+CCVhpSlQN+mD0A9xKSk6IqjmOKTPLCM/4VFr6btUI8PuK+lSehcLdX+2kueoKt3UEpBo6bqmUViTHxhqsuCFvxSiI3UXtu/qZW7MKkXtvtV82kuyMvj/6K8sOMuidcawVWy+6/pCu467ln/i/NDS0/v6/zGcCP/0hx/2GPlN+Icmj4+jHZHuH2Xrlse6NEySVDLgQq+jRCZoIDyE5/64odRu6x5EJgjt2Aacdsuj3Tjkkca7d2a/8eu2vt1k4A01Owdmv/NnvCtCcQ+4NpzwBueWHKhbiYN7LubLkQd2M77yOuw/xTjltbKMzPmdrAbv4RLXdseQxon3I3nBC5uZzVNulANE+4UYdpWvKXHaJlyW1dgJoXV6a8QcjZyw7TsUuZdkyn/LM9K2d6ErMEImsUvIMGU9o4jv/DkP/AmtSc8uaCkn+2Q8568bjZCH0wggn5HnrYXnFyRmmJmg0oauqea6EjYeqqx614hU8aRYoWPIumDSPh10BCgjxEyx2p/+zbFa5BRMvanggvdwpte4GXS/0tv8KTp2Q9/O6BcybYz3A75YMKVVQNUOpq/K0TyjGHPOA6Ppt1lBYGaPQ+QKsvsI9e6sdsR4QMHMpL7wC++lo/458UuNKK07rBJQ6newErqQmFxQDsoOP1zECP3md2DxB1rVfRF3xHURn3TlJqzoyJzA67hLPexrT8t+/yRzIDF96XRcDtUb5ypV+4qjOQW5HRYlfSj5V5Qv3sgbsJfmkygZvjvuz3DyYbfJ7osBB/Ke8OpS7xXPwkp1XditP/4me/7v9+Ek/1Ec/6N9RNaV6/8wL+zI/DYxx/0GDTY4g/6uV4DP0Nf2+7Nz6m6WoPgymzCTtp7dZu7db+Pfb1K5opTn2Ruf35qnhev5Of0Gfqr/8C4o8vCddFVegAAAAASUVORK5CYII="

            },
            {
                orderId: "#P-0076576444",
                brand: "Build Branding person foe checking",
                date: " sep 22 20023",
                deadlineDate: 'Monday,Dec 29th 2020',
                clintName: 'Naruto',
                customerName: 'selvem',
                action: 'process',
                user_profile: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAMAAABmx5rNAAAA/1BMVEX///9rgJv/zrVPYHQAAADo6OgAvNXTqpbFzdZfd5S7wccCq8I+U2n/0bdMXXDs7OxZcpFjd5BecYngtZ7Q0NA2NjZGWG1XaX/EyM3Z2dn39/f/1rzl4N0Apr8AuNOEhIRzc3NISEi4uLgvLy8QEBDuwKnYuqvP09iKlKAzSmJue4p3g5GLmqy0vcp2iaJmc4Shrbza8vfI6/JpaXlKa39TWGwul67e4ug5XXOtra1ZWVkhISGioqKVlZVoaGh9Z1o0KSWlhnaUeGliT0VwWk9IOzS2lILCoo4iGxdTPTPm0Mb/9O3On4f649f82slWuMp+xNKm0dlWy9581OSo4u0bMlvhAAAGH0lEQVR4nO2be1vaPBjG6YlSoC0HpdjCdCjgHCq6TabbXs+4ORXn9v0/y5KWtknaQEATd11v7z+8RmmSH3eeQ4oul8uUKVOmTJkyZfq/ydXWVjrHnU5zZc19XZDjjZPVLTXQl5ONzuuBnKgJra+9BsnXzSQJ0NaGJhpl5W0qiU8jeKe+UUmg/hMYxfZsFFV9KwymszUHRRzMPFMCGCEoHRYUVf0mgoUNRVUFZNMxK8uqzZ1lnZVFXefOsvHvsKwwo5zwRlnAFv6JFLSh07P5LNwrjLsKlzn3uhevz2JDlktPNj3z/JICcaWb0DbuOa3BQ4tuykCeWb+4/o5jbJ1djrum6Y3Bvzd5n2Mgy7UnBzI9r35zfvrjDBJ9v766GOuy5/mgW+DIyfuEZwOWsSlHMoHA8qbs/zTDd7xT4NEKbxYQL3WEhSJTF8AC8uisOxdFNrtnQlgu56MAmCv+LKDWXc3fIhAwF0JYLrz5KDBguOdR7kS9YWGRTfVLizfLutpl2SPZu97kfpb6qjLZAgJmlTdKrvODjcUc82cZnzNtkWzeXP7kjHI/vmFkqZ/ecmbp6QxVN9CNzplF11lRzPod30Ry7xZh4VtgfrKzyLrON2AAC2u8dHmz5BZhubvny6LrdXYWzt/B3Os6W32R67y3CBSYOzYUU+ddXoBuGQOmJ+JbsnsmlAcBJCCvmQKGd2Oc6oEBxRODwrRJYrYI6N/ZIhZjRG0RiN65LJyrP6q50SvwdxPzjBFoyzxjxEUL1GxjhCVRoFmpJKy2TNWa0SF7glluqV9OmXXhLDrtEb+ri2ehwejCWR50Cgy4LuBAh0nrpcGYXYjSEvt3DZrmw+DPBKYcoGiaSBgbsGhwXfC0ZIYKSCCKSBgfJXAGmhMoeBGgaML+pMHVNAwG1RRF4/97T1+2plFhWtFbQmBcTaPCtJC3BMDsbtsoDEpyh6FsD/mC9LffNd41MZgexZUmuHO7z42kuNNoKIr1XtNSYVrY5feWojQaO0UeIFph0ADTA5VxY0IYDMVulv17rcag8ML5PdrdM4yqEsjax1kCGNwVe9+a3l01jL3d0UuBuIWBYUiSFLIojWIShkApNsKbq2CkYQwKL1GJR8MKBAGqWZExGqEeeSGyxaoFg43K8LnmaANpSiJJTji/UiaMGU0OsQt2sRzeajnhcEMaPCtyhkZEAliUaIEdfEcm7fYIg9mJsBUnnsAwli85fQkhkSQlFh4xk1KpNEFgkGgBQqcwpCUrzq6EK/6swHlk5cd2CcIgPjnorcQsu8ugDCvELI4SLxFHzBSl1J5EV+JoASMcYpbKEvs0NKSEqlHIRBFj/wpQAMxjMlqcanKSxYOmmIICVSOM6ZcitX8RttTSpzAW7AsjcoPijQojJlg499iOYA6C40QULeT2RNu0WKUZUKapRvb7qQTOKO4kRHn0j1lIElkpO+RrsAhKgbJDaI2BXQne+5Sf6ncOwsSdiG6MUViAhTJH3AaCiIE9xn0TsjzBkS6SRFEDSIodhRotSAkDqeS3uwOCBSm5RKFDtEDEDClTVLF1yk1475+YBbKhtsyIGOa8dvdo1jrYQg68OQqXfP4AvHQwXFrASHusRwibFrnxESY2JmZ5c5jLNTFbFJotksH6lNCnhQtpzL6bO8ijLO4+my1ShbVH0mouFBkxh29ilj+ELWRbRH1hrb1prSgyBoWx9pHQhQUGs8Wi28LelGhF1xcWD43m7xgl/9RsYO/Omoa19M5kwY35kEf1gdUWdpaUlEYSAvvon44QlKNPFFtS0mlveRakmNewBT8isfsRe6eWOvr5LFXUb5oxVFuklCMVI4ub/BRVdGbcGCViwS+jXqTVPLbCm8aClQpsTSs05ggrPVgSpbUlNhY7ObCGzVbDV02zBTstVNPODmxNYJTGgs2GdYJpxODR4swYHYjt1JDC4uDFIiWV6EmUGP1cFqLNJY2ZYUti9AIs/eRAIhaJs4OSSKLqzNG+2Bp1KgvRc0ljZtkCe/uyLIWKQahSLpedxJVYn9ufsdf4BE7iCpyA7VFAKyRULBabiSuIyJeYmokrUML/42GmTJkyZcqUKdPL6y/IoK76hALKrgAAAABJRU5ErkJggg==',
                clint_profile: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            },
            {
                orderId: "#P-00000444",
                brand: "Build Branding person for Eta.id",
                date: " sep 22 20023",
                deadlineDate: 'Monday,Dec 30th 2020',
                clintName: 'vender',
                customerName: 'suman',
                action: 'process',
                user_profile: 'data:image/png;base64,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',
                clint_profile: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAYFBMVEX///8AAADw8PA0NDTCwsLGxsb4+Pj19fXW1tZ7e3ucnJwpKSkxMTHJycm6urqvr69ra2tgYGAgICCHh4c5OTmoqKjj4+NMTEzQ0NA/Pz8SEhJVVVUZGRnc3NyTk5NlZWXEd9MwAAACwElEQVRoge2aW7aiMBBFSZSXIE8BxavOf5a30+CCVhpSlQN+mD0A9xKSk6IqjmOKTPLCM/4VFr6btUI8PuK+lSehcLdX+2kueoKt3UEpBo6bqmUViTHxhqsuCFvxSiI3UXtu/qZW7MKkXtvtV82kuyMvj/6K8sOMuidcawVWy+6/pCu467ln/i/NDS0/v6/zGcCP/0hx/2GPlN+Icmj4+jHZHuH2Xrlse6NEySVDLgQq+jRCZoIDyE5/64odRu6x5EJgjt2Aacdsuj3Tjkkca7d2a/8eu2vt1k4A01Owdmv/NnvCtCcQ+4NpzwBueWHKhbiYN7LubLkQd2M77yOuw/xTjltbKMzPmdrAbv4RLXdseQxon3I3nBC5uZzVNulANE+4UYdpWvKXHaJlyW1dgJoXV6a8QcjZyw7TsUuZdkyn/LM9K2d6ErMEImsUvIMGU9o4jv/DkP/AmtSc8uaCkn+2Q8568bjZCH0wggn5HnrYXnFyRmmJmg0oauqea6EjYeqqx614hU8aRYoWPIumDSPh10BCgjxEyx2p/+zbFa5BRMvanggvdwpte4GXS/0tv8KTp2Q9/O6BcybYz3A75YMKVVQNUOpq/K0TyjGHPOA6Ppt1lBYGaPQ+QKsvsI9e6sdsR4QMHMpL7wC++lo/458UuNKK07rBJQ6newErqQmFxQDsoOP1zECP3md2DxB1rVfRF3xHURn3TlJqzoyJzA67hLPexrT8t+/yRzIDF96XRcDtUb5ypV+4qjOQW5HRYlfSj5V5Qv3sgbsJfmkygZvjvuz3DyYbfJ7osBB/Ke8OpS7xXPwkp1XditP/4me/7v9+Ek/1Ec/6N9RNaV6/8wL+zI/DYxx/0GDTY4g/6uV4DP0Nf2+7Nz6m6WoPgymzCTtp7dZu7db+Pfb1K5opTn2Ruf35qnhev5Of0Gfqr/8C4o8vCddFVegAAAAASUVORK5CYII="



            },
            {
                orderId: "#P-00000444",
                brand: "Build Branding person for Eta.id",
                date: " sep 22 20023",
                deadlineDate: 'Monday,Dec 31th 2020',
                clintName: 'kevin',
                customerName: 'thanas',
                action: 'pending',
                user_profile: 'data:image/png;base64,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',
                clint_profile: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAYFBMVEX///8AAADw8PA0NDTCwsLGxsb4+Pj19fXW1tZ7e3ucnJwpKSkxMTHJycm6urqvr69ra2tgYGAgICCHh4c5OTmoqKjj4+NMTEzQ0NA/Pz8SEhJVVVUZGRnc3NyTk5NlZWXEd9MwAAACwElEQVRoge2aW7aiMBBFSZSXIE8BxavOf5a30+CCVhpSlQN+mD0A9xKSk6IqjmOKTPLCM/4VFr6btUI8PuK+lSehcLdX+2kueoKt3UEpBo6bqmUViTHxhqsuCFvxSiI3UXtu/qZW7MKkXtvtV82kuyMvj/6K8sOMuidcawVWy+6/pCu467ln/i/NDS0/v6/zGcCP/0hx/2GPlN+Icmj4+jHZHuH2Xrlse6NEySVDLgQq+jRCZoIDyE5/64odRu6x5EJgjt2Aacdsuj3Tjkkca7d2a/8eu2vt1k4A01Owdmv/NnvCtCcQ+4NpzwBueWHKhbiYN7LubLkQd2M77yOuw/xTjltbKMzPmdrAbv4RLXdseQxon3I3nBC5uZzVNulANE+4UYdpWvKXHaJlyW1dgJoXV6a8QcjZyw7TsUuZdkyn/LM9K2d6ErMEImsUvIMGU9o4jv/DkP/AmtSc8uaCkn+2Q8568bjZCH0wggn5HnrYXnFyRmmJmg0oauqea6EjYeqqx614hU8aRYoWPIumDSPh10BCgjxEyx2p/+zbFa5BRMvanggvdwpte4GXS/0tv8KTp2Q9/O6BcybYz3A75YMKVVQNUOpq/K0TyjGHPOA6Ppt1lBYGaPQ+QKsvsI9e6sdsR4QMHMpL7wC++lo/458UuNKK07rBJQ6newErqQmFxQDsoOP1zECP3md2DxB1rVfRF3xHURn3TlJqzoyJzA67hLPexrT8t+/yRzIDF96XRcDtUb5ypV+4qjOQW5HRYlfSj5V5Qv3sgbsJfmkygZvjvuz3DyYbfJ7osBB/Ke8OpS7xXPwkp1XditP/4me/7v9+Ek/1Ec/6N9RNaV6/8wL+zI/DYxx/0GDTY4g/6uV4DP0Nf2+7Nz6m6WoPgymzCTtp7dZu7db+Pfb1K5opTn2Ruf35qnhev5Of0Gfqr/8C4o8vCddFVegAAAAASUVORK5CYII="


            }
        ]
    }

    useEffect(()=>{
        dispatch(
            increment(projectData)
        )
   
         },[])
         const {message}=useSelector((state)=>state)

    let data = message?.details
    let dataStructure = data?.slice(numberData,numberData+2)

    const displayStructure = (data) => {

        if (data && data?.length > 0)
            return data?.map((el) => {
                const { action, orderId, brand, deadlineDate, date, clintName, customerName } = el
                return {
                    "OrderId":
                        <>
                            <div className="row ">
                                <div className='text-left  pl-3'>


                                    <p > <small><a className='' href='#'> {orderId}</a> </small></p>
                                    <h5>{brand}</h5>
                                    <small>
                                        <i class="bi bi-calendar-event"></i>
                                        <span className='text-muted pl-2 font-weight-bold ' style={{color:'#d0d0d0'}}> Created on{date}</span>

                                    </small>
                                </div>

                                <div>

                                </div>
                            </div>
                        </>,
                    "Deadline": <>
                        <div className='mt-4  ' >
                            <div className='row '>
                                <div>

                                    <div className='rounded-circle py-2 px-3 ' style={{backgroundColor:"#eaebfc"}}>


                                        <i className="bi bi-lightning-fill text-primary "></i>

                                    </div>

                                </div>

                                <div className='text-left'>

                                    <div className='text-muted ' style={{fontSize:'14px'}}>   Deadline</div>
                                    <div className='pl-2 font-weight-bold' style={{fontSize:'14px'}}> {deadlineDate}</div>
                                </div>



                            </div>
                        </div>

                    </>,

                    "Clien": <>
                        <div className='row mt-3 mx-1'>


                            <div>
                                <img src={el?.clint_profile} width={'40px'} className='rounded-circle' />

                            </div>
                            <div className='pl-1'>
                                <div className='text-muted text-left '>clinte</div>
                                <p>{clintName}</p>

                            </div>
                        </div>
                    </>,
                    "Custome": <>
                        <div className='row mt-3'>


                            <div className='col-3'>
                                <img src={el?.user_profile} width={'30px'} className='rounded-circle' />
                            </div>
                            <div className='col-8 text-left'>
                                <div className='text-muted '>person in change</div>
                                <div className=''>
                                    <p>{customerName}</p>
                                </div>

                            </div>
                        </div></>
                    ,
                    "Action": <>
                        <div className=' badge badge-pill  p-2 mt-3' style={{backgroundColor:`${action==='pending'?'#fdab33':'#29b3ff'}`,color:`${action==='pending'?'#a4742d':'#b2edff'}`}}>

                            {action}

                        </div></>



                };
            });

    }
    return (
        <div className='mt-4 mx-2'>
            
           <div className='mb-3 '>
           <DataBadge/>
            </div>
            <Table tableDataSet={dataStructure} displayDataSet={displayStructure(dataStructure)} />
            <PageNation isPagination={true} currentPage={pagData} noOfPage={2} leftArrow={true}rightArrow={true}
               paginationNumberClick={(currentPage) => {
                getTaskHandler(paginationHandler("current", currentPage));
              }} 

             />
          
        </div>
    )
}
export { DetailsScreen }