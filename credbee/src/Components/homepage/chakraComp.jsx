import React from "react";
import "./body.css"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SubOne from "./subscription";
import SubTwo from "./sub2";
import SubThree from "./sub3";
import SubFour from "./sub4";
import SubFive from "./sub5";

import below from "./images/below.png"
import Footerfun from "./Footer";

export function Comp() {
    return (
        <div className="second_homepage">
            <div className="TabsWithChakra">
                <Tabs variant='enclosed' align="center">
                    <TabList className="Tablist_chakra">
                        <Tab>Subscription Automation</Tab>
                        <Tab>Billing Experiments</Tab>
                        <Tab>Revenue Intelligence</Tab>
                        <Tab>Extensible Platform</Tab>
                        <Tab>Enterprise-Grade Security</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <>
                                <SubOne />
                            </>
                        </TabPanel>
                        <TabPanel>
                            <>
                                <SubTwo/>
                            </>
                        </TabPanel>
                        <TabPanel>
                            <>
                                <SubThree/>
                            </>
                        </TabPanel>
                        <TabPanel>
                            <>
                                <SubFour/>
                            </>
                        </TabPanel>
                        <TabPanel>
                            <>
                                <SubFive/>
                            </>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
            <div className="Below_Img">
                <img src={below} />
            </div>
            <div className="Footer">
                {/* <Footerfun/> */}
            </div>
        </div>

    )
}