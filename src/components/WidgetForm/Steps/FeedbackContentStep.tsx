import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../../ScreenshotButton";

interface FeedbackContentStepProps {
    choosedFeedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

export const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({
    choosedFeedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent
}) => {
    const { title, img } = feedbackTypes[choosedFeedbackType];

    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');

    const handleSubmitFeedback = (
        event: FormEvent
    ) => {
        event.preventDefault();
        console.log(screenshot, comment);
        onFeedbackSent();
    };

    return (
        <>
            <header>
                <button
                    onClick={onFeedbackRestartRequested}
                    type="button" 
                    className={
                        "absolute top-5 left-5 " + 
                        "text-zinc-400 hover:text-zinc-100"
                    }
                >
                    <ArrowLeft />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={img.source} alt={img.alt} className="w-6 h-6"/>
                    {title}
                </span>
                <CloseButton />
            </header>

            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
                <textarea
                    onChange={({target: {value}}) => setComment(value)}
                    placeholder="Conte com detalhes o que está acontecendo..."
                    className={
                        "min-w-[304px] min-h-[112px] text-sm " + 
                        "placeholder-zinc-400 text-zinc-100 " + 
                        "border-zinc-600 bg-transparent rounded-md " +
                        "focus:border-brand-500 focus:ring-brand-500 " +
                        "focus:ring-1 resize-none focus:outline-none " +
                        "scrollbar scrollbar-thumb-zinc-700 " +
                        "scrollbar-track-transparent scrollbar-thin"
                    }
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton 
                        setScreenshotTook={setScreenshot}
                        screenshot={screenshot}
                    />

                    <button
                        type="submit" 
                        disabled={!comment}
                        className={
                            "p-2 bg-brand-500 rounded-md border-transparent " +
                            "flex flex-1 justify-center items-center text-sm " +
                            "hover:bg-brand-300 focus:outline-none focus:ring-2 " +
                            "focus:ring-offset-2 focus:ring-offset-zinc-900 " +
                            "focus:ring-brand-500 transition-colors disabled:opacity-50 " +
                            "disabled:hover:bg-brand-500"
                        }
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    );
};