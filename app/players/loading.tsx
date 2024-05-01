import { LuLoader2 } from 'react-icons/lu';

const Loading = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <LuLoader2 className="animate-spin h-8 w-8" />
        </div>
    );
};

export default Loading;
