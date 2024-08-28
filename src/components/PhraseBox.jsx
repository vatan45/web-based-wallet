/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../App.css';

const PhraseBox = ({ seedPhrase }) => {
    const [isPhraseHidden, setIsPhraseHidden] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        navigator.clipboard.writeText(seedPhrase);
        setTimeout(() => setCopied(false), 2000);
    };

    const words = seedPhrase.split(' ');

    return (
        <div className="phrase-container">
            {isPhraseHidden ? (
                <p>Seed phrase is hidden.</p>
            ) : (
                <div className="phrase-box">
                    {words.map((word, index) => (
                        <span key={index} className="word-block">
                            {word}
                        </span>
                    ))}
                </div>
            )}
            <div className="phrase-actions">
                <span className="hide-phrase" onClick={() => setIsPhraseHidden(true)}>Hide</span>
                <span className="copy-phrase" onClick={handleCopy}>{copied ? 'Copied' : 'Copy'}</span>
            </div>
        </div>
    );
};

export default PhraseBox;
