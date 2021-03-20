import React from 'react';
import './App.css';
import ImageField from "./components/table/fields/ImageField";
import StringField from "./components/table/fields/StringField";
import EmailField from "./components/table/fields/EmailField";
import TagsField from "./components/table/fields/TagsField";
import IconsField from "./components/table/fields/IconsField";
import TableProvider from "./components/table/TableProvider";
import testData from "./test-data";
import FilterPanel from "./components/filter-component/FilterPanel";
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
                        <ImageField  title={null} source='avatar' width={35}/>
                        <StringField title='First Name' source='firstName' bold width={105}/>
                        <StringField title='Last Name' source='lastName' bold />
                        <EmailField  title='Email' source='email'/>
                        <TagsField   title='Skills' source='skills'/>
                        <IconsField  title='Todos' source='todos' renderer={iconRenderer} width={85}/>
                        <StringField title='City' source='location' />
                    </Table>
                </div>
            </div>
        </TableProvider>
    );
}

export default App;
