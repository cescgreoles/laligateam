'use client';

interface Props {
    query: string;
    setQuery: (query: string) => void;
}

const Filters = ({ query, setQuery }: Props) => {
    return (
        <form className="w-full" onSubmit={(event) => event.preventDefault()}>
            <input
                type="text"
                name="query"
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                placeholder="Cerca un jugador"
                className="w-full p-2 border border-stone-300 dark:border-stone-600 rounded-md dark:bg-stone-800 dark:text-stone-100"
            />
        </form>
    );
};

export default Filters;
