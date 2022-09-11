#Question 3
function incremental(list,base_number){
    // gets a list of numbers and return a list of numbers in incremental based
    // on the numbers in the original list as increment, starting from the
    // base_number
    return is_null(list)
        ? null
        : pair(head(list) + base_number,incremental(tail(list),head(list) + base_number));
}


function generate_list_of_note(letter_name, list_of_interval) {
    const tonic = letter_name_to_midi_note(letter_name);
    return append(list(tonic),incremental(list_of_interval,tonic));
}

function creating_sine(number,duration){
    // this function takes a list of frequencies and return a list of sinesounds
    return map(x => sine_sound(x,duration),number);
}

function list_to_sound(list_of_midi_note, duration, instrument) {
    return consecutively(map(x => instrument(x,duration),list_of_midi_note));
}

const major_arpeggio_interval = list(4, 3, 5, 4, 3, 5);
const minor_arpeggio_interval = list(3, 4, 5, 3, 4, 5);

function generate_arpeggio(letter_name, list_of_interval) {
    return generate_list_of_note(letter_name, list_of_interval);
}

function arpeggiator_up(arpeggio, duration_each, instrument) {
    // calls sawtooth to get list of lists of sequence, joined them
    // using accumulate and append and use list to sound
    return length(arpeggio) < 4
        ? silence_sound(0)
        : list_to_sound(accumulate((x,y) => append(x,y),null,sawtooth(arpeggio)), duration_each, instrument);
}

function sawtooth(outer){
    // this function takes a list of number, use recursion to create
    // a new list, whose element is a list of the sawtooth. 
    // So it returns a list of lists of the sequence.
    function inner(lst,number){
        return number > 0
            ? pair(head(lst),inner(tail(lst),number-1))
            : null;
    }
    return length(outer) < 4
        ? null
        : pair(inner(outer,4),sawtooth(tail(outer)));
}

// Test
const arg = generate_arpeggio("C4", major_arpeggio_interval);

play(arpeggiator_up(generate_arpeggio("C4", major_arpeggio_interval), 0.1, cello));









#Question 5


const drum_envelope = adsr(0.05, 0.95, 0, 0); // function from sound to sound

function snare_drum(note, duration) {
    /* your answer here */
    return drum_envelope(noise_sound(duration));
}

function is_prime(num1){
    // takes a number and return true if prime
    function inner(num2){
        return num2 === 1
            ? true
            : num1 % num2 === 0
            ? false
            : inner(num2 - 1);
    } 
    return inner(num1-1);
}

function prime_only() {
    // uses enum list to generate a list of number 75 to 150
    // then it filters for prime number and return a list of prime numbers
    return filter(is_prime,enum_list(75,150));
}


function creating_sine(number,duration){
    // this function takes a list of frequencies and return a list of sinesounds
    return map(x => sine_sound(x,duration),number);
}

function bass_drum(note, duration) {
    /* your answer here */
    return drum_envelope(simultaneously(creating_sine(prime_only(),1)));
}

function mute(note, duration) {
    /* your answer here */
    return silence_sound(duration);
}

// play(drum_envelope(simultaneously(creating_sine(prime_only(),1))));

// Test
// play(snare_drum(50, 0.2));
// play(bass_drum(50, 0.2));

play(consecutively(list(snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2),
                        mute(0, 0.2),
                        snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2))));
