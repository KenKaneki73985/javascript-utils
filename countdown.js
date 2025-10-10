// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ START OF GITHUB COPY/PASTE (countdown ms) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    // reload_ID = "idddCW3PUA85" 
    // reload_TIME = October 10, 6:18 PM 2025

    // Global variables for countdown
    let countdownTimer = null;
    let countdownStartTime = 0;

    function countdown_with_ms(count, category, bgColor, xOffset, yPos, fontSize) {
        // Clear existing timer if running
        if (countdownTimer) {
            clearInterval(countdownTimer);
            countdownTimer = null;
        }
        
        // Initialize countdown
        countdownStartTime = Date.now();
        
        // Function to update the display
        function UPDATE_DISPLAY() {
            const elapsed = (Date.now() - countdownStartTime) / 1000;
            const remaining = count - elapsed;
            
            if (remaining <= 0) {
                // Stop the timer
                clearInterval(countdownTimer);
                countdownTimer = null;
                
                // Hide the countdown message
                window.message.hideMessage(category);
                
                return;
            }
            
            // Format the display text with one decimal place
            const displayText = remaining.toFixed(1);
            
            // pinVSCODE
            // Show the countdown message
            show_GUI(displayText, "countdown_GUI", "black", -0.1, "y75", 17, 100)
        }
        
        // Start the timer to update every 100ms for smoother countdown
        countdownTimer = setInterval(UPDATE_DISPLAY, 100);
        
        // Initial display update
        UPDATE_DISPLAY();
        
        // Return a function to cancel the countdown
        return function cancelCountdown() {
            if (countdownTimer) {
                clearInterval(countdownTimer);
                countdownTimer = null;
                window.message.hideMessage(category);
            }
        };
    }

    // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ END OF GITHUB COPY/PASTE ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
