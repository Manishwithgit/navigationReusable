function Table ({data, config, keyFn}) {
    const renderedHeaders = config.map((column)=>{
        return <th className="p-2" key={column.label}>{column.label}</th>

    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return (
            <td className="p-2" key={column.label}>
                {column.render(rowData)}
            </td>
            );
        });

        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
                {/* <td className="p-3">{config[0].render(fruit)}</td> */}
                {/* <td className="p-3"> */}
                    {/* <div className={`p-3 m-2 ${fruit.color}`}></div> */}
                    {/* {config[1].render(fruit)} */}
                {/* </td> */}
                {/* <td className="p-3">{config[2].render(fruit)}</td> */}
            </tr>

        );

    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-4">
                    {/* <th>Fruits</th>
                    <th>Color</th>
                    <th>Score</th> */}
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>{renderedRows}
                {/* <tr>
                    <td>Orange</td>
                    <td>*color orange*</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Apple</td>
                    <td>*color red*</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Banana</td>
                    <td>*color yellow*</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Tomato</td>
                    <td>*color green*</td>
                    <td>7</td>
                </tr> */}

            </tbody>
        </table>

    );
}
export default Table;