import speechBubble from "../assets/speech-bubble.png";

type SpeechBubbleProps = {
  text: string;
};

const SpeechBubble = ({text}:SpeechBubbleProps) => {
  return (
    <div className="flex justify-center items-center shadow-lg rounded-2xl overflow-hidden bg-color-orange ">
      <p className="bg-color-orange p-6 flex items-center justify-center">
        <img src={speechBubble} alt="Speech Bubble" className="h-full min-w-[45px]" />
      </p>
      <p className="bg-white font-base text-[22px] pl-6 py-3 flex items-center">
        {text}	
      </p>
    </div>
  );
};

export default SpeechBubble;
