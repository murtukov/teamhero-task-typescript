import React from 'react';
import './App.css';
import ImageField from "./components/Table/fields/ImageField";
import StringField from "./components/Table/fields/StringField";
import EmailField from "./components/Table/fields/EmailField";
import TagsField from "./components/Table/fields/TagsField";
import IconsField from "./components/Table/fields/IconsField";
import TableProvider from "./components/Table/TableProvider";
import testData from "./test-data";
import TagFilter from "./components/TagFilter/TagFilter";
import Table from "./components/Table/Table";

function App() {
    return (
        <TableProvider data={testData}>
            <div className='container'>
                <div className='left-column'>
                    <TagFilter/>
                </div>
                <div className='right-column'>
                    <Table>
                        <ImageField  title={null} source='avatar'/>
                        <StringField title='First Name' source='firstName' bold/>
                        <StringField title='Last Name' source='lastName' bold/>
                        <EmailField  title='Email' source='email'/>
                        <TagsField   title='Skills' source='skills'/>
                        <IconsField  title='Todos' source='todos'/>
                        <StringField title='Location' source='location'/>
                    </Table>
                </div>
            </div>
        </TableProvider>
    );
}

export default App;
