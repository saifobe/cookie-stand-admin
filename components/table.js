import React from 'react'
import { hours } from '@/data'



function total(arr){
    let totalHours = 0
    for(let i = 0; i<arr.length;i++){
        totalHours += arr[i] 

    } 
    return totalHours
}
function totals(arr){
    let totalsData = []
    for(let i = 0; i<arr.length;i++){
        for(let j = 0; j<arr[i].hourly_sales.length;j++){
            if(totalsData[j] === undefined){
                totalsData[j] = arr[i].hourly_sales[j]
            }
            else{
                totalsData[j]  += arr[i].hourly_sales[j]
            }

             
        }}
        return totalsData
}

const Table = (props) => {
    
    return (

        <table className="w-full">
            <thead className='border border-black bg-green-500'>
                <tr>
                    <th className='border border-black'>Location</th>
                    {hours.map(hour => <th className='border border-black' key={hour}>{hour}</th>)}
                    <th className='border border-black'>Totals</th>
                </tr>
            </thead>
            <tbody className='border border-black bg-green-300'>
                {props.formData.map(index => (
                    <tr className='border border-black' key={index.length}>
                        <td className='border border-black'>{index.location}</td>
                        {index.hourly_sales.map(hour => <td className='border border-black' key={hour}>{hour}</td>)}
                        <td className='border border-black'>{total(index.hourly_sales)}</td>
                    </tr>
                ))}
            </tbody>

            <tfoot>
                <tr className='border border-black bg-green-500'>
                <th className='border border-black'>Totals</th>
                {totals(props.formData).map(totals =>(
                        <td className='border border-black'>{totals}</td>
                        
                ))}
                <td className='border border-black'>{total(totals(props.formData))}</td>
                </tr>
                
            </tfoot>


        </table>

    )
}

export default Table