import DataTable1 from "../Components/Table1"
import DataTable2 from "../Components/Table2"
import PieChartWithCenterLabel from "../Components/Chart";
import React from "react";

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
const Dashboard = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <>
        <div className="container mt-5 ">
            <div className="row">
                <div className="col shadow">
                    <div className=" col d-flex border mt-5">
                        <div className=" p-2"><h4>App Insigts</h4></div>
                        
                    </div>

                    <DataTable1 />
                </div>

                <div className="col mt-5 w-50">
                    <TabContext value={value} >

                        <TabPanel value="1"><PieChartWithCenterLabel /></TabPanel>
                        <div>
                            <TabPanel value="2"><DataTable2 /></TabPanel>
                        </div>


                        <TabList onChange={handleChange} aria-label="lab API tabs example" style={{marginLeft:"65%"}}>
                            <Tab label="Chart" value="1" />
                            <Tab label="Table" value="2" />

                        </TabList>


                    </TabContext></div>
            </div>
        </div>
    </>
}
export default Dashboard