export default function DisplayMood({ moods, deleteMood }) {
    return (
        <div className="mt-4">
            <h3 className="font-semibold mb-2">List of the moods</h3>
            <ul>
                {moods.map((mood) => (
                    <li key={mood.id} className="flex justify-between items-center p-2">
                        <div className="flex items-center space-x-2">
                            <span>{mood.time.toLocaleString()}</span>
                            <span>{mood.emoji}</span>
                            <span>{mood.text}</span>
                        </div>
                        <button onClick={() => deleteMood(mood.id)} className="text-red-500 mr-225">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
