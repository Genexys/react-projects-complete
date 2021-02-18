import React, {useEffect, useState} from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import useStateCallBack from "./useStateCallBack";

function App() {
    const [selectItem, setSelectItem] = useState([])
    const [menu, setMenu] = useState([]);
    const [categories, setCategories] = useState([]);

    const filterItems = (category) => {
        if (category === 'all') {
            setSelectItem(menu);
            return;
        }
        const newItems = menu.filter(item => item.category === category);
        setSelectItem(newItems);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(" http://localhost:3000/menu");
                const data = await res.json();

                return data;
            } catch (err) {
                console.error(err)
            }
        }

        fetchData().then((data) => {
            const allCategories = ['all', ...new Set(data.map(item => item.category))];
            setCategories(allCategories);
            setMenu(data)
            setSelectItem(data)
        }).catch(err => {
            console.error(err)
        })

    }, [])

    return (
        <menu>
            <div className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>

                <Categories filter={filterItems} categories={[...categories]}/>
                <Menu items={selectItem}/>
            </div>
        </menu>
    );
}

export default App;
