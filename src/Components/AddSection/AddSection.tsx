import React from 'react';
import cl from './AddSection.module.css';
import MyDropdownMenu from "../UI/MyDropdownMenu/MyDropdownMenu";
import MyButton from "../UI/MyButton/MyButton";
import MyIcon from "../UI/MyIcon/MyIcon";

const AddSection = () => {
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
                    <MyDropdownMenu contentArray={['Core Courses', 'Electives']}/>
                    <MyDropdownMenu
                        contentArray={
                        ['Course', 'BS - 1 year', 'BS - 2 year', 'BS - 3 year', 'BS - 4 year', 'MS - 1 year']}
                    />
                </section>
                <section className={cl.addSection__scheduleCards}>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                    <MyButton backgroundColor="yellow" color="black" text="B19-AI-01"
                              icon={<MyIcon type="download" color="black"/>}/>
                </section>
            </div>
        </div>
    );
};

export default AddSection;