juggler.js->safe.js: Open Websockets connection
note right of safe.js: Calculate code (=random number [0..99])
loop Try all possible values
    juggler.js->safe.js: Send guess
    note right of safe.js: Check if guess is correct
    alt guess is correct
        safe.js->juggler.js: Send "Correct"
    else guess is not correct
        safe.js->juggler.js: Send "Wrong"
    end
    alt guess was correct
        note left of juggler.js: Print correct answer on console
        juggler.js->safe.js: Close Websockets connection
        note left of juggler.js: Exit program
    else guess was not correct
        note left of juggler.js: Make next guess (=next loop iteration)
    end
end
