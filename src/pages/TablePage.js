// import { render } from "@testing-library/react";
import Table from "../components/Table";

function TablePage () {
    const data =[
        {name:'Orange', color:'bg-orange-500', score:5},
        {name:'Apple', color:'bg-red-500', score:8},
        {name:'Banana', color:'bg-yellow-500', score:3},
        {name:'Lemon', color:'bg-green-500', score:7},
    ];

    const config =[
        {
            label:'Name of fruits',
            render:(fruit)=>fruit.name, 
        },

        {
            label:'Color',
            render:(fruit)=> <div className={`p-3 m-2 ${fruit.color}`}></div>,
        },

        { 
            label:'Score',
            render:(fruit) => fruit.score,
        },
        {
            label:'Score Squared',
            render:(fruit)=>fruit.score**2,
        },

    ];

    const keyFunction =(fruit)=>{
        return fruit.name;
    }
    return (
        <div>
            <Table data={data} config={config} keyFn={keyFunction}/>
        </div>
    );

}
export default TablePage;