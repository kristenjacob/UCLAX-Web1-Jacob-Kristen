import styled from 'styled-components';

/* Components ------------*/
import Tab from './Tab'

const TabList = ({curTab, curTabUpdate, tabs}) => {
    return (
        <TabListStyled className='TabList'>
            {tabs.map((tab) => {
                    return (
                    <Tab
                    key={ tab.id }
                    tab={ tab }
                    curTab={ curTab }
                    curTabUpdate={ curTabUpdate }
                    />
                );
            })}
        </TabListStyled>
    );
}

export default TabList;

const TabListStyled = styled.div`

`;