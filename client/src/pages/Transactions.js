import React from 'react';
import MUIDataTable from "mui-datatables";

const Transactions = (props) => {

    const options = {
        filter: false,
        selectableRows: "none",
        print: false,
        download: false,
        expandableRows: false,
        rowHover:true,
        pagination:true,
        search:false,
        sortOrder: {name: "Name", direction: "asc"}
    };
    
    let col = ["trans num", "date", "ammount", "balance", "description"];

    let Tabledata = [["1", "2019-11-04", "", "3000", "deposit"], ["2", "2019-11-08", "45", "3955", "Walmart"]]

    return (
        <div>
            <MUIDataTable
            title={"Transactions"}
            data={Tabledata}
            columns={col}
            options={options}
          />
        </div>
    )
}

export default Transactions;