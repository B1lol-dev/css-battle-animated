document.addEventListener('DOMContentLoaded', () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Helper function to play a note
    function playNote(note) {
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(note, audioContext.currentTime);
        oscillator.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5); // Note duration
    }

    // Note frequencies (in Hz)
    const notes = {
        'key_do': 261.63, // C
        'key_re': 293.66, // D
        'key_mi': 329.63, // E
        'key_fa': 349.23, // F
        'key_sol': 392.00, // G
        'key_la': 440.00, // A
        'key_si': 493.88  // B
    };

    const blackKeyNotes = {
        'black_key_1': 277.18, // C#
        'black_key_2': 311.13, // D#
        'black_key_3': 369.99, // F#
        'black_key_4': 415.30, // G#
        'black_key_5': 466.16, // A#
    };

    function setupKeyClickEvents() {
        // Add click event listeners for white keys
        document.querySelectorAll('.piano_white_key').forEach(key => {
            key.addEventListener('click', () => {
                playNote(notes[key.id]);
            });
        });

        // Add click event listeners for black keys
        document.querySelectorAll('.piano_black_key').forEach(key => {
            key.addEventListener('click', () => {
                playNote(blackKeyNotes[key.id]);
            });
        });
    }

    setupKeyClickEvents();
});