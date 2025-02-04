export default function Selection({ selectMood }) {
    const moods = [
        { emoji: '😊', text: 'Happy' },
        { emoji: '😢', text: 'Sad' },
        { emoji: '😠', text: 'angry' },
        { emoji: '😒', text: 'tired' }
    ];

    return (
        <select onChange={(e) => selectMood(e.target.value)} className="p-2">
            <option value="">Choose a mood</option>
            {moods.map(({ emoji, text }) => (
                <option key={emoji} value={emoji}>{emoji} {text}</option>
            ))}
        </select>
    );
}
