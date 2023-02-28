import React, { useState } from "react";
import styles from "./DataPicker.module.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DataPicker = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [selectedDate, setselectedDate] = useState(null);

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
                        <ReactDatePicker
                            selected={selectedDate}
                            onChange={(date) => setselectedDate(date)}
                            dateFormat="yyyy/mm/dd"
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                            placeholderText="Birthday"
                        />
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
