import { useState } from "react";
import DisplayMood from "./DisplayMood";
import Selection from "./Selection";
import Tab2 from "./Tab2";

export default function Tab1() {
    const [list, setList] = useState([]);
    const [deleted, setDeleted] = useState([]);
    const [tab, setTab] = useState('tab1');

    const emojis = [
        { emoji: '😊', text: 'Happy' },
        { emoji: '😢', text: 'Sad' },
        { emoji: '😠', text: 'angry' },
        { emoji: '😒', text: 'tired' }
    ];

    const add = (value) => {
        const emji = emojis.find(mood => mood.emoji === value);
        const newMood = { id: Date.now(), time: new Date(), ...emji };
        setList(prev => [...prev, newMood]);
    };

    const remove = (id) => {
        const emji = list.find(mood => mood.id === id);
        setDeleted(prev => [emji, ...prev]);
        setList(prev => prev.filter(mood => mood.id !== id));
    };

    const clear = () => {
        setDeleted(prev => [...list, ...prev]);
        setList([]);
    };

    const undo = () => {
        if (deleted.length > 0) {
            const [last, ...other] = deleted;
            setList(prev => [...prev, last]);
            setDeleted(other);
        }
    };

    return (
        <div className="p-4">
            <div className="flex mb-4">
                <button onClick={() => setTab('tab1')} className={`${tab === 'tab1' ? 'font-semibold' : ''}`}>tab1</button>
                <button onClick={() => setTab('tab2')} className={`${tab === 'tab2' ? 'font-semibold' : '', 'ml-4'}`}>tab2</button>
            </div>

            <div className="mb-4">
                <Selection selectMood={add} />
                <div className="flex space-x-2">
                    {deleted.length > 0 && <button onClick={undo} className="p-2">Undo</button>}
                    {list.length > 0 && <button onClick={clear} className="p-2">Clear All</button>}
                </div>
            </div>
            {tab === 'tab1' && <DisplayMood moods={list} deleteMood={remove} />}
            {tab === 'tab2' && <Tab2 />}
        </div>
    );
}
