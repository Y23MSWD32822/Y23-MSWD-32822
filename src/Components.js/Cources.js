import React from 'react'

const Courses = () => {
  return (
    <div allign = "center">
    <table border = "4" cellPadding="2" cellSpacing="2" width="100%" >
   <tr>
        <th> Course Name </th>
        <th> Course Cordinator</th>
        <th> Course Code </th>
        <th> L-T-P-S Structure </th>
        <th> Credits </th>
   </tr>
   <tr>
    <td> Computational thinking for object oriented design</td>
    <td> U Harita</td>
    <td> 23SC1101</td>
    <td> 2-2-1-1</td>
    <td> 5 Credits</td>
   </tr>
   <tr>
    <td> Fundamentals of Internet of Things</td>
    <td> V Subba Reddy </td>
    <td> 23EC1101</td>
    <td> 2-2-2-0 </td>
    <td>  4 Credits </td>
   </tr>
   <tr>
   <td> Object oriented Design & Programming </td>
   <td> C Zelan Basha</td>
    <td> 23SC2101A </td>
    <td>  2-2-2-2 </td>
    <td> 7 Credits </td>
   </tr>
   <tr>
   <td> Data Structures </td>
   <td> Hanumanthu Rao</td>
    <td> 23CS1102 </td>
    <td> 2-2-1-1 </td>
    <td> 5 Credits </td>
   </tr>
    </table>

    </div>
  )
}

export default Courses