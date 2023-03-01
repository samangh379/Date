import React, { useState } from "react";
import styles from "./DataPicker.module.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const DataPicker = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [selectedDate, setselectedDate] = useState(new Date());

    const nameChanger = (e) => {
        setName(([e.target.name] = e.target.value));
    };
    const passChanger = (e) => {
        setPassword(([e.target.name] = e.target.value));
    };

    const subimtHandler = (el) => {
        el.preventDefault();

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                password: password,
                date: selectedDate,
                userId: 1,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };

    return (
        <div className={styles.container}>
            <form>
                <h2> sign In</h2>
                <div className={styles.infoContainer}>
                    <div>
                        <input type="text" name="name" placeholder="Username" onChange={nameChanger} />
                    </div>
                    <div>
                        <input type="text" name="password" placeholder="password" onChange={passChanger} />
                    </div>
                    <div className="date">
                        <DatePicker value={selectedDate} onChange={setselectedDate} locale={persian_fa} calendar={persian} />
                    </div>
                </div>
                <button type="submit" onClick={subimtHandler}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default DataPicker;
