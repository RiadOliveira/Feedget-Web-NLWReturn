import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChange: (type: FeedbackType) => void;
}

export const FeedbackTypeStep: React.FC<FeedbackTypeStepProps> = ({
    onFeedbackTypeChange
}) => {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, {img, title}]) => (
                    <button
                        key={key}
                        onClick={() => onFeedbackTypeChange(key as FeedbackType)}
                        type="button"
                        className={
                            "bg-zinc-800 rounded-lg py-5 w-24 " + 
                            "flex flex-col flex-1 items-center gap-2 border-2 " +
                            "border-transparent transition-colors ease-linear " +
                            "hover:border-brand-500 focus:border-brand-500 " +
                            "focus:outline-none"
                        }
                    >
                        <img src={img.source} alt={img.alt} />
                        <span>{title}</span>
                    </button>
                ))}
            </div>
        </>
    );
};