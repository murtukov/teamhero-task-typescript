import React from 'react';
import './App.css';
import ImageField from "./components/table/fields/ImageField";
import StringField from "./components/table/fields/StringField";
import EmailField from "./components/table/fields/EmailField";
import TagsField from "./components/table/fields/TagsField";
import IconsField from "./components/table/fields/IconsField";
import TableProvider from "./components/table/TableProvider";
import testData from "./test-data";
import FilterPanel from "./components/filter-panel/FilterPanel";
import Table from "./components/table/Table";
import Icon, {IconName} from "./components/icon/Icon";

function App() {
    // This callback is defined by users to configure icons rendering.
    const iconRenderer = (iconName: IconName, i: number) => (
        <Icon key={i} name={iconName} />
    );

    return (
        <TableProvider data={testData}>
            <div className='container'>
                <div className='left-column'>
                    <FilterPanel column='skills'/>
                </div>
                <div className='right-column'>
                    <Table>
                        <ImageField source='avatar' title={null} width={35}/>
                        <StringField source='firstName' bold width={105}/>
                        <StringField source='lastName' bold/>
                        <EmailField source='email' title='E-Mail'/>
                        <TagsField source='skills'/>
                        <IconsField source='todos' renderer={iconRenderer} width={85}/>
                        <StringField source='location' title='City'/>
                    </Table>
                </div>
            </div>
        </TableProvider>
    );
}

export default App;
