
    //                       /▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\
    // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ START OF GITHUB COPY/PASTE (show GUI) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    // August 13, 7:33 PM 2025
    let sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

    function SHOW_GUI(text, GUI, color, extra_xpos, ypos, fontsize, time){
        // message.SHOW_GUI("hello", "GUI_v1", "green", 0, "y80", 16, 3000)
        message.SHOW_GUI(text, GUI, color, extra_xpos, ypos, fontsize, time)
    }

    function hide_GUI(GUI){
        SHOW_GUI("hide GUI", GUI, "green", 0, 180, 16, 100)
    }

    class DYNAMIC_MESSAGE {
        constructor() {
            this.messageElements = {}; // Store references to active message elements
            this.fadeTimers = {}; // Store references to fade timers
        }

        SHOW_GUI(text, category, bgColor = 'green', extra_xpos = 0, ypos = "y10", fontSize = 10, duration = 2000) {
            // Remove existing message with this category if it exists
            this.hideMessage(category);
            
            // Create message element
            const messageElement = document.createElement('div');
            messageElement.innerText = text;
            messageElement.style.position = 'fixed';
            messageElement.style.zIndex = '9999';
            messageElement.style.padding = '10px 15px 10px 15px'; // top right bot left
            messageElement.style.borderRadius = '4px';
            messageElement.style.color = 'white';
            messageElement.style.fontFamily = "Consolas";
            messageElement.style.fontSize = `${fontSize}px`;
            messageElement.style.backgroundColor = bgColor;
            messageElement.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
            messageElement.style.transition = 'opacity 1s ease-in-out';
            messageElement.style.opacity = '1'; // Start fully visible
            // messageElement.style.opacity = '.8'; // Start fully visible
            
            // ▬▬▬ CENTERING ▬▬▬▬▬▬▬▬▬▬▬▬▬
            // higher num = text goes left more (for text_length * 5.1)
            // lower num = text goes right more (for text_length * 5.1)
    
            const text_length = text.length
            let xpos_percent = 0

            // pinVSCODE
            // ─── FONT SIZE 17 ─────────────
            if (fontSize == 17){
                const percent_per_char = text_length * 0.31 // 0.31 (ok for short)
                // const percent_per_char = text_length * 0.37 // .3 (bit ok for long)
                xpos_percent = 49.2 - percent_per_char + extra_xpos // 49.2 (ok for 0.31 perc)
            } 

            // ─── FONT SIZE 15 ─────────────
            else if (fontSize == 15){
                const percent_per_char = text_length * 0.28 // 0.31 (ok for short)
                // const percent_per_char = text_length * 0.37 // .3 (bit ok for long)
                xpos_percent = 49.3 - percent_per_char + extra_xpos // 49.2 (ok for 0.31 perc)
            } 
            
            // ─── FONT SIZE NOT SET ─────────────
            else {
                const percent_per_char = text_length * 0.31 // 0.31 (ok for short)
                xpos_percent = 49.2 - percent_per_char + extra_xpos // 49.2 (ok for 0.31 perc)
            }

            // ▬▬▬ X POSITION ▬▬▬▬▬▬▬▬▬▬▬▬▬
            messageElement.style.left = `${xpos_percent}%`

            // ▬▬▬ Y POSITION ▬▬▬▬▬▬▬▬▬▬▬▬▬
            const numeric_part_ypos = ypos.replace(/[^0-9]/g, '');
            const integer_ypos_percent = parseInt(numeric_part_ypos, 10)
            messageElement.style.top = `${integer_ypos_percent}%`

            // ─── Add to DOM ─────────────
            document.body.appendChild(messageElement);
            this.messageElements[category] = messageElement;
            
            // ─── Set timeout to start fade ─────────────
            const fadeDelay = 1000; // Start fading 1000ms before removal
            const fadeStartTime = duration - fadeDelay;
            
            // ─── Clear any existing timers for this category ─────────────
            if (this.fadeTimers[category]) {
                clearTimeout(this.fadeTimers[category]);
            }
            
            // ─── Set timer to start the fadeout ─────────────
            this.fadeTimers[category] = setTimeout(() => {
                if (this.messageElements[category] === messageElement) {
                    messageElement.style.opacity = '0';
                    
                    // Set another timeout for actual removal after fade completes
                    setTimeout(() => {
                        // Only remove if this element is still the active one for this category
                        if (this.messageElements[category] === messageElement) {
                            this.hideMessage(category);
                        }
                    }, fadeDelay);
                }
            }, fadeStartTime);
            
            return messageElement;
        }
        
        // Hide/remove a specific message
        hideMessage(category) {
            if (this.messageElements[category]) {
                document.body.removeChild(this.messageElements[category]);
                delete this.messageElements[category];
                
                // Clear any pending fade timers
                if (this.fadeTimers[category]) {
                    clearTimeout(this.fadeTimers[category]);
                    delete this.fadeTimers[category];
                }
            }
        }
        
        // Hide all active messages
        hideAllMessages() {
            for (const category in this.messageElements) {
                if (this.messageElements.hasOwnProperty(category)) {
                    this.hideMessage(category);
                }
            }
        }
    }

    // Create a global instance of the message system
    const message = new DYNAMIC_MESSAGE();

    // Make it available globally
    window.message = message;

    // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ END OF GITHUB COPY/PASTE ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
    //                       \▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬/
