import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './tableCustom.scss'
import { Clear, ModeEdit, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function TableCustom({columns,datas,dataKey,editRouteAddress,actionKey,align}) {

  // **********************************about props*****************************************

  // 1. columns => It is an array of objects with 'id','label','minWidth' keys.
  // 2. datas => It is an array of objects of actual data(from api) to display.
  // 3. dataKey => It is an array of keys of actual data object.
  // 4. editRouteAddress => It is a route address for edit data (string type props).
  // 5. actionKey => It is an array of action type like 'edit','delete','view'. if you want no any action in your table, ignore this props
  // 6. align => You can align (horizontally) the table items to 'center,' 'left,' or 'right'(string type props).
  
  const navigate = useNavigate();
  return (
    <>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{fontWeight:600}} className='table-head-row'>
              {columns.map((column,index) => (
                <TableCell
                  key={index}
                  align={align}
                  style={{ minWidth: column.minWidth,borderRight:'1px solid rgba(224, 224, 224, 1)' }}
                >
                  {column.label}
                </TableCell>
              ))}
              {
              actionKey?.length?(  <TableCell
                align={align}
                style={{ minWidth: 170,borderRight:'1px solid rgba(224, 224, 224, 1)' }}
              >
                Action
              </TableCell>):null
              }
            </TableRow>
          </TableHead>
          <TableBody style={{backgroundColor:"white"}}>
            {datas
              ?.map((data , index) => {
                return (
                  <TableRow hover  role="checkbox" tabIndex={-1} key={index}>
                    {dataKey?.map((key,index)=>{
                      if(key in data){
                        if(key === "status"){
                          return (<TableCell align={align} style={{borderRight:"1px solid rgba(224, 224, 224, 1)"}} key={index+1000}>{data[key]?"ACTIVE":"INACTIVE"}</TableCell>)
                        }
                        else{
                          return (<TableCell align={align} style={{borderRight:"1px solid rgba(224, 224, 224, 1)"}} key={index+1000}>{data[key]?`${data[key]}`.length>14?`${data[key]}`.substring(0,14)+"...":`${data[key]}`:"N/A"}</TableCell>)
                        }
                      }
                      else{
                        return (<TableCell align={align} style={{borderRight:"1px solid rgba(224, 224, 224, 1)"}} key={index+1000}>N/A</TableCell>);
                      }

                    })
                    }
                    {
                      (actionKey?.length)?
                          (<TableCell align={align} style={{borderRight:"1px solid rgba(224, 224, 224, 1)", display:'flex', justifyContent:"center"}}>
                        <Grid style={{display:'flex', width:'70%',justifyContent:'space-around'}}>
                        {
                          actionKey.map((action)=>{
                            if(action === 'edit'){
                              return (<ModeEdit key={action} style={{cursor:'pointer'}} onClick={()=>navigate(editRouteAddress??'/',{ state: {data} })}/>)
                            }
                            else if(action === 'delete'){
                              return (<Clear key={action} style={{cursor:'pointer'}}/>)
                            }
                            else if(action === 'view'){
                              return (<Visibility key={action} style={{cursor:'pointer'}}/>)
                            }
                            else return null
                            
                          })
                        }
                        </Grid>
                        </TableCell>)
                      :null
                    }
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      
      </>
    
  );
}