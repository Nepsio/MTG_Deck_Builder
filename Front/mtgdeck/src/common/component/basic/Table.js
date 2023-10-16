import React from "react";


function Table(props) {
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
       
        <tbody>
            <TableHeader elements={props.elements}/>
            {
                props.rows.map((row) => {
                    return (
                        <TableRow elements={row.ObjectToRow}/>
                    )
                })
            }
        </tbody>
    </table>
</div>

}


function TableHeader(props) {
    return (
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {
                    props.elements.map((element) => {
                        return (
                            <th class="px-6 py-3 font-semibold text-center">
                                {element}
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

function TableRow(props) {
    return (
        <tr class="bg-white dark:bg-gray-800">
            {
                props.elements.map((element) => {
                    return (
                        <td class="px-6 py-4">
                            {element}
                        </td>
                    )
                })
            }
        </tr>
    );
}