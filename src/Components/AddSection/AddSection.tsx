import React, {useEffect, useState} from 'react';
import cl from './AddSection.module.css';
import MyDropdownMenu from "../UI/MyDropdownMenu/MyDropdownMenu";
import MyButton from "../UI/MyButton/MyButton";
import MyIcon from "../UI/MyIcon/MyIcon";
import MyInput from "../UI/MyInput/MyInput";
import {CoreCourseInfo, fakeCoreCourseApi} from "../../API/fakeCoreCourseApi";
import {useFetching} from "../../hooks/useFetching";
import MyLoader from "../UI/MyLoader/MyLoader";

const AddSection = () => {

    const [type, setType] = useState(['Core Courses', 'Electives'])

    const [courses, setCourses] = useState<CoreCourseInfo[]>([]);

    const [fetchCourses, isCoursesLoading, postCourses] = useFetching(async () => {
        const response = await fakeCoreCourseApi.getCourses();
        setCourses(response)
    })

    useEffect(() => {
        // @ts-ignore
        fetchCourses();
    }, [])


    return (
        <div className={cl.addSection}>
            <div className="container">
                <section className={cl.addSection__header}>
                    <h1 className={cl.addSection__title}>
                        InnTime
                    </h1>
                    <p className={cl.addSection__description}>
                        Create your schedule
                    </p>
                </section>
                <section className={cl.addSection__sorting}>
                    <MyDropdownMenu contentArray={type}/>
                    <MyDropdownMenu
                        contentArray={
                            ['Course', 'BS - 1 year', 'BS - 2 year', 'BS - 3 year', 'BS - 4 year', 'MS - 1 year']}
                    />
                    <MyInput/>
                </section>
                <section className={cl.addSection__scheduleCards}>
                    {isCoursesLoading ? <MyLoader/>
                        : courses.map(i =>
                            <MyButton
                                key={i.id}
                                backgroundColor="white"
                                color="black"
                                text={i.name}
                                icon={<MyIcon type="download" color="black"/>}
                                icon2={<MyIcon type="add" color="black"/>}
                                onClick={() => console.log('hello')}
                            />
                        )}
                </section>
            </div>
        </div>
    );
};

export default AddSection;