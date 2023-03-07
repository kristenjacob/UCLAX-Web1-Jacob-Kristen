import { useState } from 'react';
import styled from 'styled-components';

/* Data ------------*/
import {tabbedData} from './tabbedData';


/* Components ------------*/
import TabList from './Tabs/TabList'
import TabContent from './TabContent';

const Tabbed = () => {

    const [curTab, curTabUpdate] = useState(tabbedData[0]);

    return (
        <TabbedStyled className='Tabbed'>
            <TabList curTab={ curTab } curTabUpdate={ curTabUpdate } tabs={ tabbedData }/>
            <TabContent curTab ={ curTab } />
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`

`;