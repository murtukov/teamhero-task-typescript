import img from './assets/img/avatar.jpeg';
import {IconName} from "./components/Icon/Icon";

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
        skills: ['React', 'Symfony', 'Redux'],
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
        skills: ['English', 'Russian', 'Redux'],
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
        todos: ['time', "flash", "document", "link"],
    },
    {
        avatar: img,
        firstName: 'Barack',
        lastName: 'Obama',
        email: 'b.obama@white-house.com',
        skills: ['Presidency', 'Speech'],
        todos: ['time', "flash", "document", "link"],
        location: 'Washington'
    },
    {
        avatar: img,
        firstName: 'Dan',
        lastName: 'Abramov',
        email: 'abramovic@facebook.com',
        skills: ['React', 'Redux', 'JavaScript'],
        todos: ['time', "flash", "document", "link"],
        location: 'Los Angeles'
    }
];

export default testData;