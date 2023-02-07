import { Routes, Route } from 'react-router-dom';

/* Layout: Pages --------------*/
import PagesLayout from './Common/PagesLayout/PagesLayout';

/* Pages: Primary -------------*/
import PrimaryLayout from './Pages/Primary/PrimaryLayout';
import Home from './Pages/Primary/Home';
import Staff from './Pages/Primary/Staff';
import Contact from './Pages/Primary/Contact';

/* Pages: Course Work ---------------------------*/
import CourseWorkLayout from './Pages/CourseWork/CourseWorkLayout';
import Essays from './Pages/CourseWork/Essays';
import SunAndMoon from './Pages/CourseWork/SunAndMoon/SunAndMoon';

const App = () => {
    return (
        <Routes>
            <Route element={ <PagesLayout />}>
                <Route element={ <PagesLayout /> } path="">
                    <Route element={ <Home/> } path=""/>
                    <Route element={ <Staff/> } path="staff"/>
                    <Route element={ <Contact/> } path="contact"/>
                </Route>

                <Route element={ <CourseWorkLayout /> } path="course-work">
                    <Route element={ <Essays /> } path=""/>
                    <Route element={ <SunAndMoon /> } path="sun-and-moon"/>
                </Route>
            </Route>
        </Routes>
    );
};

export default App;