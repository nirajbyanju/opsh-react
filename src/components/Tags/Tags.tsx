import { useState, KeyboardEvent, ChangeEvent, FC } from 'react';
interface Tag {
    id: number;
    name: string;
}
interface TagsProps {
  
}

const Tags: FC<TagsProps> = ({}) => {
    const [tags, setTags] = useState<Tag[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Tag[]>([]);
    const [isSuggestionsVisible, setIsSuggestionsVisible] = useState<boolean>(false);

    const availableSuggestions: Tag[] = [
        { id: 1, name: 'Tag1' },
        { id: 2, name: 'Tag2' },
        { id: 3, name: 'Tag3' },
        // Add more suggestions here
    ];

    const handleAddTag = (tag: Tag) => {
        setTags([...tags, tag]);
        setInputValue('');
        setSuggestions([]);
        setIsSuggestionsVisible(false);
    };

    const handleDeleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        if (value.trim()) {
            const filteredSuggestions = availableSuggestions.filter(suggestion =>
                suggestion.name.toLowerCase().includes(value.toLowerCase()) &&
                !tags.some(tag => tag.name.toLowerCase() === suggestion.name.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
            setIsSuggestionsVisible(filteredSuggestions.length > 0);
        } else {
            setSuggestions([]);
            setIsSuggestionsVisible(false);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            const newTag = { id: Date.now(), name: inputValue };
            if (!tags.some(tag => tag.name.toLowerCase() === inputValue.toLowerCase())) {
                handleAddTag(newTag);
            }
        }
    };

    const handleSuggestionClick = (suggestion: Tag) => {
        handleAddTag(suggestion);
    };

    const handleInputClick = () => {
        if (inputValue.trim()) {
            const filteredSuggestions = availableSuggestions.filter(suggestion =>
                suggestion.name.toLowerCase().includes(inputValue.toLowerCase()) &&
                !tags.some(tag => tag.name.toLowerCase() === suggestion.name.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
            setIsSuggestionsVisible(filteredSuggestions.length > 0);
        } else {
            setIsSuggestionsVisible(false);
        }
    };

  return <div>
    <div className="bg-white p-2 border rounded-lg shadow-sm relative custom-tag-input">
                <div className="flex flex-wrap items-center gap-2">
                    {tags.map(tag => (
                        <span key={tag.id} className="bg-opsh-primary text-white rounded-lg px-3 py-1 text-sm font-medium flex items-center">
                            {tag.name}
                            <button onClick={() => handleDeleteTag(tag.id)} className="ml-2 text-xs">&times;</button>
                        </span>
                    ))}
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onClick={handleInputClick}
                        className="rounded-lg flex-1 min-w-0 focus:outline-none"
                        placeholder="Type and press Enter..."
                    />
                </div>
                {isSuggestionsVisible && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10">
                        {suggestions.length > 0 ? (
                            suggestions.map(suggestion => (
                                <div
                                    key={suggestion.id}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                >
                                    {suggestion.name}
                                </div>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500">No suggestions</div>
                        )}
                    </div>
                )}
            </div>
  </div>
}

export default Tags