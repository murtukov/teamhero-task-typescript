import img from './assets/img/avatar.jpeg';
import {IconName} from "@blueprintjs/icons";

type DataEntry = {
    avatar:     string,
    firstName:  string,
    lastName:   string,
    email:      string,
    skills:     string[],
    todos:      IconName[],
    location:   string,
}

const testData: DataEntry[] = [
    {
        avatar: img,
        firstName: 'Alfred',
        lastName: 'Hitchcock',
        email: 'a.hitchcock@hollywood.com',
        skills: ['English', 'Directing'],
        todos: ['time', "flash", "document", "link"],
        location: 'New York'
    },
    {
        avatar: img,
        firstName: 'Albert',
        lastName: 'Einstein',
        email: 'einstein@gmx.de',
        skills: ['Violin', 'Physics'],
        todos: ['time', "flash", "document", "link"],
        location: 'Berlin'
    },
    {
        avatar: img,
        firstName: 'Timur',
        lastName: 'Murtukov',
        email: 'murtukov@gmail.com',
        skills: ['React', 'Symfony'],
        todos: ['time', "flash", "document", "link"],
        location: 'Berlin'
    },
    {
        avatar: img,
        firstName: 'John',
        lastName: 'Wick',
        email: 'killer@doglover.com',
        skills: ['English', 'Russian', 'Assassination'],
        todos: ['time', "flash", "document", "link"],
        location: 'Berlin'
    },
    {
        avatar: img,
        firstName: 'Timur',
        lastName: 'Murtukov',
        email: 'murtukov@gmail.com',
        skills: ['English', 'Table Service'],
        todos: ['time', "flash", "document", "link"],
        location: 'Berlin'
    },
    {
        avatar: img,
        firstName: 'Mia',
        lastName: 'Wasikowska',
        email: 'wasikowska.mia@mail.uk',
        skills: ['Acting', 'Music'],
        todos: ['time', "flash", "document", "link"],
        location: 'Warsaw'
    },
    {
        avatar: img,
        firstName: 'Martin',
        lastName: 'Scorsese',
        email: 'shutter.island@thriller.com',
        skills: ['Directing', 'Acting', 'Russian'],
        location: 'San Paulo',
        todos: ['time', "flash", "document", "link"]
    }
];

export default testData;