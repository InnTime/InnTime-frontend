import React, {useEffect, useState} from 'react';
import cl from './AddSection.module.css';
import MyDropdownMenu, {MyDropdownOptionProps} from "../UI/MyDropdownMenu/MyDropdownMenu";
import MyButton from "../UI/MyButton/MyButton";
import MyIcon from "../UI/MyIcon/MyIcon";
import MyInput from "../UI/MyInput/MyInput";
import {CoreCourseInfo, fakeCoreCourseApi} from "../../API/fakeCoreCourseApi";
import {useFetching} from "../../hooks/useFetching";
import MyLoader from "../UI/MyLoader/MyLoader";
import {ElectiveInfo, fakeElectiveApi} from "../../API/fakeElectiveApi";

const AddSection = () => {

    const scheduleCardsTypes: MyDropdownOptionProps[] = [
        {
            name: "Core Courses",
            value: "core"
        },
        {
            name: "Electives",
            value: "elective"
        },
    ];

    const coreCoursesByYears: MyDropdownOptionProps[] = [
        {
            name: "All",
            value: "all"
        },
        {
            name: "BS - 1 year",
            value: "bs-1"
        },
        {
            name: "BS - 2 year",
            value: "bs-2"
        },
        {
            name: "BS - 3 year",
            value: "bs-3"
        },
        {
            name: "BS - 4 year",
            value: "bs-4"
        },
        {
            name: "MS - 1 year",
            value: "ms-1"
        }
    ]


    const electiveType: MyDropdownOptionProps[] = [
        {
            name: "BS Tech",
            value: "bs-tech"
        },
        {
            name: "MS Tech",
            value: "ms-tech"
        },
        {
            name: "BS/MS hum",
            value: "hum"
        }
    ]

    const [selectedScheduleCardsType, setSelectedScheduleCardsType] = useState(scheduleCardsTypes[0]);
    const [selectedCourseYear, setSelectedCourseYear] = useState(coreCoursesByYears[0]);
    const [selectedElectiveType, setSelectedElectiveType] = useState(electiveType[0]);

    const [courses, setCourses] = useState<CoreCourseInfo[]>([]);
    const [electives, setElectives] = useState<ElectiveInfo[]>([]);

    const [fetchCourses, isCoursesLoading, courseError] = useFetching(async () => {
        const response = await fakeCoreCourseApi.getCourses();
        setCourses(response);
    })

    const [fetchElectives, isElectivesLoading, electiveError] = useFetching(async () => {
        const response = await fakeElectiveApi.getCourses();
        setElectives(response);
    })

    useEffect(() => {
        // @ts-ignore
        fetchCourses();
        // @ts-ignore
        fetchElectives();
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
                <section className={cl.addSection__filtering}>
                    <MyDropdownMenu
                        options={scheduleCardsTypes}
                        value={selectedScheduleCardsType}
                        setValue={setSelectedScheduleCardsType}
                    />
                    {selectedScheduleCardsType.value === 'core' ?
                        <MyDropdownMenu
                            options={coreCoursesByYears}
                            value={selectedCourseYear}
                            setValue={setSelectedCourseYear}
                        />
                        :
                        <MyDropdownMenu
                            options={electiveType}
                            value={selectedElectiveType}
                            setValue={setSelectedElectiveType}
                        />
                    }
                    <MyInput/>
                </section>
                <section className={cl.addSection__scheduleCards}>
                    {selectedScheduleCardsType.value === 'core' ?
                        isCoursesLoading ?
                            <MyLoader/>
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
                            )
                        : electives.map(i =>
                            <MyButton
                                key={i.id}
                                backgroundColor="white"
                                color="black"
                                text={i.shortName}
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