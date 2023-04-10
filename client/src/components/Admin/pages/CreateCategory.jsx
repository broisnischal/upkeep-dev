import { useState } from 'react';

const CreateCategory = ({ onSubmit }) => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(name);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm  ml-10   mt-12">
            <div className="mb-4">
                <label htmlFor="category-name" className="block text-gray-700 font-bold mb-2 text-1xl">
                    Category Name
                </label>
                <input
                    type="text"
                    id="category-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>

            <div className="flex items-center justify-start">
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Create
                </button>
            </div>
        </form>
    );
};

export default CreateCategory;
