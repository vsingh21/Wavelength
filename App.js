const canvas = document.getElementById("semicircleCanvas");
        const ctx = canvas.getContext("2d");

        const centerX = canvas.width / 2;
        const centerY = canvas.height - 40;
        const radius = 300;
        const tickLength = 10; // Regular tick length
        const mediumTickLength = 15; // Longer tick length for every 5th tick
        const longTickLength = 20; // Longest tick length for every 10th tick
        const tickCount = 100;

        let highlightStart = -1;
        let highlightEnd = -1;
        let highlightVisible = true;

        const wordPairs = [['Good', 'Bad'],
    ['Highly addictive', 'Mildly addictive'],
    ['Cold', 'Hot'],
    ['Weird', 'Normal'],
    ['Colorful', 'Colorless'],
    ['High calorie', 'Low calorie'],
    ['Feels good', 'Feels bad'],
    ['Essential', 'Inessential'],
    ['Expensive', 'Cheap'],
    ['Overrated weapon', 'Underrated weapon'],
    ['Common', 'Rare'],
    ['Hard subject', 'Easy subject'],
    ['Famous', 'Unknown'],
    ['Easy to use', 'Difficult to use'],
    ['Wired', 'Normal'],
    ['Clean', 'Dirty'],
    ['Requires skill', 'Requires luck'],
    ['Flavorful', 'Flavorless'],
    ['Fascinating topic', 'Boring topic'],
    ['Good actors', 'Bad actor'],
    ['Hipster', 'Basic'],
    ['Safe job', 'Dangerous job'],
    ['Sci-Fi', 'Fantasy'],
    ['Formal', 'Casual'],
    ['Overpaid', 'Underpaid'],
    ['Wet', 'Dry'],
    ['Overrated skill', 'Underrated skill'],
    ['Encouraged', 'Forbidden'],
    ['Happy song', 'Sad song'],
    ['Durable', 'Fragile'],
    ['Dork', 'Geek'],
    ['Evil', 'Good'],
    ['Best day of the year', 'Worst day of the year'],
    ['Good habit', 'Bad habit'],
    ['Dog person', 'Cat person'],
    ['Openly love', 'Guilty pleasure'],
    ['Talented', 'Untalented'],
    ['Light', 'Dark'],
    ['Overrated actor', 'Underrated actor'],
    ['Easy to find', 'Hard to find'],
    ['Beautiful man', 'Ugly man'],
    ['Easy to remember', 'Hard to remember'],
    ['Highbrow', 'Lowbrow'],
    ['Healthy', 'Unhealthy'],
    ['Good man', 'Bad man'],
    ['Historically irrelevant', 'Historically important'],
    ['Hairy', 'Hairless'],
    ['Flexible', 'Inflexible'],
    ['Exotic pet', 'Normal pet'],
    ['Extrovert', 'Introvert'],
    ['Movie was better', 'Book was better'],
    ['Good movie', 'Bad movie'],
    ['Beautiful', 'Ugly'],
    ['Happens suddenly', 'Happens slowly'],
    ['Career', 'Job'],
    ['Hated', 'Loved'],
    ['The Dark Side of the Force', 'The Light Side of the Force'],
    ['Good pizza topping', 'Bad pizza topping'],
    ['Utopia', 'Dystopia'],
    ['Immature person', 'Mature person'],
    ['Overrated thing to own', 'Underrated thing to own'],
    ['Nice person', 'Mean person'],
    ['Adventure movie', 'Action movie'],
    ['Sexy', 'Unsexy'],
    ['Believable', 'Unbelievable'],
    ['Classy', 'Trashy'],
    ['Permanent', 'Temporary'],
    ['Doesn\'t look like a person', 'Looks like a person'],
    ['Tastes good', 'Tastes bad'],
    ['Game', 'Sport'],
    ['Cool', 'Uncool'],
    ['Greatest living person', 'Worst living person'],
    ['Overrated', 'Underrated'],
    ['Clean food', 'Messy food'],
    ['Ethical', 'Unethical'],
    ['Good gift', 'Bad gift'],
    ['Fashionable', 'Unfashionable'],
    ['Terrorist', 'Freedom fighter'],
    ['Forgiveable', 'Unforgiveable'],
    ['Harmful', 'Harmless'],
    ['Hygienic', 'Unhygienic'],
    ['Good music', 'Bad music'],
    ['Useful', 'Useless'],
    ['Important', 'Unimportant'],
    ['Hard to spell', 'Easy to spell'],
    ['Virtue', 'Vice'],
    ['Overrated musician', 'Underrated musician'],
    ['Popular activity', 'Unpopular activity'],
    ['Whole', 'Divided'],
    ['Reliable', 'Unreliable'],
    ['Hard to kill', 'Easy to kill'],
    ['Stable', 'Unstable'],
    ['Pointy animal', 'Round animal'],
    ['Good TV show', 'Bad TV show'],
    ['Traditionally feminine', 'Traditionally masculine'],
    ['Useful body part', 'Useless body part'],
    ['Classic', 'Fad'],
    ['Brilliant', 'Stupid'],
    ['Strong', 'Weak'],
    ['Useful invention', 'Useless invention'],
    ['Conservative', 'Liberal'],
    ['Popular', 'Unpopular'],
    ['Enemy', 'Friend'],
    ['Exciting', 'Boring'],
    ['Smelly in a good way', 'Smelly in a bad way'],
    ['Hero', 'Villain'],
    ['Overrated thing to do', 'Underrated thing to do'],
    ['Useful in an emergency', 'Useless in an emergency'],
    ['For adults', 'For kids'],
    ['Hard to do', 'Easy to do'],
    ['Priceless', 'Worthless'],
    ['Nurture', 'Nature'],
    ['Democracy', 'Dictatorship'],
    ['Weird greeting', 'Normal greeting'],
    ['Cat name', 'Dog name'],
    ['Partisan', 'Non-partisan'],
    ['Infinite', 'Limited'],
    ['Formal event', 'Casual event'],
    ['Good investment', 'Bad investment'],
    ['Heavy topic', 'Small talk'],
    ['Spicy', 'Mild'],
    ['Sacrilegious', 'Religious'],
    ['Art', 'Not art'],
    ['Prohibited', 'Illegal'],
    ['Elitist', 'Popular'],
    ['In control', 'Out of control'],
    ['Loud', 'Quiet'],
    ['Public knowledge', 'Secret'],
    ['Too big', 'Too small'],
    ['Long', 'Short'],
    ['Best year in history', 'Worst year in history'],
    ['Capitalist', 'Socialist'],
    ['Well known fact', 'Little known fact'],
    ['Mobile', 'Stationary'],
    ['Global issue', 'Local issue'],
    ['Skill', 'Talent'],
    ['Best era to time travel', 'Worst era to time travel'],
    ['The best', 'The worst'],
    ['Large number', 'Small number'],
    ['False', 'True'],
    ['Avant garde', 'Old fashioned'],
    ['Beautiful word', 'Ugly word'],
    ['Tiny', 'Small'],
    ['Natural', 'Unnatural'],
    ['Phony person', 'Genuine person'],
    ['Original', 'Derivative'],
    ['Sexy color', 'Unsexy color'],
    ['Benefits everyone', 'Benefits you'],
    ['Powerful', 'Powerless'],
    ['Vapes', 'Doesn’t vape'],
    ['Vegetable', 'Fruit'],
    ['Pseudoscience', 'Science'],
    ['Serious topic', 'Funny topic'],
    ['Firm', 'Limp'],
    ['News', 'Gossip'],
    ['Easy to sit on', 'Hard to sit on'],
    ['Too much', 'Not enough'],
    ['Vertical', 'Horizontal'],
    ['Scented', 'Unscented'],
    ['Not huggable', 'Huggable'],
    ['Homogenous', 'Heterogeneous'],
    ['Exclusive', 'Inclusive'],
    ['Good dog breed', 'Bad dog breed'],
    ['Commerce', 'Art'],
    ['Pop icon', 'One hit wonder'],
    ['Good advice', 'Bad advice'],
    ['Good candy', 'Bad candy'],
    ['Radical', 'Traditional'],
    ['Good mouthfeel', 'Bad mouthfeel'],
    ['Legal', 'Illegal'],
    ['Shallow thought', 'Deep thought'],
    ['Good school', 'Bad school'],
    ['Always on time', 'Never on time'],
    ['Will live to 100', 'Won\'t live to 100'],
    ['Good Disney character', 'Bad Disney character'],
    ['Good president', 'Bad president'],
    ['Strange', 'Weird'],
    ['Infamous', 'Famous'],
    ['Most powerful god', 'Least powerful god'],
    ['Fun person', 'Boring person'],
    ['Overrated book', 'Underrated book'],
    ['Best chore', 'Worst chore'],
    ['Overpopulated species', 'Endangered species'],
    ['Terrifying', 'Thrilling'],
    ['Unexpected', 'Expected'],
    ['Person who’d beat you up', 'Person you could beat up'],
    ['Overrated game', 'Underrated game'],
    ['You don’t want your parents to watch you do it', 'You want your parents to watch you do it'],
    ['Evil people', 'Good people'],
    ['Jock', 'Nerd']];

    function drawBoard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI);
        ctx.fillStyle = "rgba(195,153,97,0.7)";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();
    
        for (let i = 0; i <= tickCount; i++) {
            const angle = Math.PI + (i / tickCount) * Math.PI;
            let currentTickLength = tickLength;
    
            if (i % 10 === 0) {
                currentTickLength = longTickLength;
            } else if (i % 5 === 0) {
                currentTickLength = mediumTickLength;
            }
    
            const startX = centerX + radius * Math.cos(angle);
            const startY = centerY + radius * Math.sin(angle);
            const endX = centerX + (radius - currentTickLength) * Math.cos(angle);
            const endY = centerY + (radius - currentTickLength) * Math.sin(angle);
    
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 1;
            ctx.stroke();
    
            if (i % 10 === 0) {
                const labelX = centerX + (radius - longTickLength - 20) * Math.cos(angle);
                const labelY = centerY + (radius - longTickLength - 20) * Math.sin(angle) - 7;
    
                ctx.font = "20px sans-serif"; // Changed to sans-serif
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(i.toString(), labelX, labelY);
            }
        }
    
        const leftX = centerX - 10 + (radius + 40) * Math.cos(Math.PI);
        const leftY = centerY + 30 + (radius + 40) * Math.sin(Math.PI);
        const rightX = centerX + 10 + (radius + 40) * Math.cos(2 * Math.PI);
        const rightY = centerY + 30 + (radius + 40) * Math.sin(2 * Math.PI);
    
        // Left Label
        const leftTextWidth = ctx.measureText(leftWord).width;
        const leftBoxWidth = leftTextWidth + 60; // Increased padding for larger text
        const leftBoxHeight = 40; // Increased height for larger text
        ctx.fillStyle = "rgba(195,153,97,0.7)";
        ctx.fillRect(leftX - leftBoxWidth / 2, leftY - leftBoxHeight / 2, leftBoxWidth, leftBoxHeight);
        ctx.strokeStyle = "black";
        ctx.strokeRect(leftX - leftBoxWidth / 2, leftY - leftBoxHeight / 2, leftBoxWidth, leftBoxHeight);
    
        ctx.font = "24px sans-serif"; // Larger and sans-serif font
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(leftWord, leftX, leftY);
    
        // Right Label
        const rightTextWidth = ctx.measureText(rightWord).width;
        const rightBoxWidth = rightTextWidth + 60; // Increased padding for larger text
        const rightBoxHeight = 40; // Increased height for larger text
        ctx.fillStyle = "rgba(195,153,97,0.7)";
        ctx.fillRect(rightX - rightBoxWidth / 2, rightY - rightBoxHeight / 2, rightBoxWidth, rightBoxHeight);
        ctx.strokeStyle = "black";
        ctx.strokeRect(rightX - rightBoxWidth / 2, rightY - rightBoxHeight / 2, rightBoxWidth, rightBoxHeight);
    
        ctx.font = "24px sans-serif"; // Larger and sans-serif font
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(rightWord, rightX, rightY);
    }
    
    function drawRange(start) {
        drawBoard();
        if (highlightVisible) {
            draw(start, start + 4, "rgba(240,176,62, 0.5)");
            draw(start + 4, start + 8, "rgba(235, 89, 41, 0.5)");
            draw(start + 8, start + 12, "rgba(83, 136, 167, 0.5)");
            draw(start + 12, start + 16, "rgba(235, 89, 41, 0.5)");
            draw(start + 16, start + 20, "rgba(240,176,62, 0.5)");
    
            const textPositions = [
                { angle: (start * 2 + 4) / 2, text: "2" },
                { angle: (start * 2 + 12) / 2, text: "3" },
                { angle: (start * 2 + 20) / 2, text: "4" },
                { angle: (start * 2 + 28) / 2, text: "3" },
                { angle: (start * 2 + 36) / 2, text: "2" }
            ];
    
            ctx.font = "bold 24px sans-serif"; // Changed to sans-serif
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
    
            textPositions.forEach(({ angle, text }) => {
                const radians = Math.PI + (angle / tickCount) * Math.PI;
                const textRadius = radius - 65;
                const textX = centerX + textRadius * Math.cos(radians);
                const textY = centerY + textRadius * Math.sin(radians);
    
                ctx.save();
                ctx.translate(textX, textY);
                ctx.rotate(radians + Math.PI / 2);
    
                ctx.fillText(text, 0, 0);
                ctx.restore();
            });
        }
    }

        function draw(start, end, color) {
            ctx.beginPath();
            const startAngle = Math.PI + (start / tickCount) * Math.PI;
            const endAngle = Math.PI + (end / tickCount) * Math.PI;

            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.lineTo(
                centerX + radius * Math.cos(endAngle),
                centerY + radius * Math.sin(endAngle)
            );
            ctx.arc(centerX, centerY, 0, endAngle, startAngle, true);
            ctx.closePath();

            ctx.fillStyle = color;
            ctx.fill();
        }

        function highlightRange() {
            highlightStart = Math.floor(Math.random() * (tickCount - 20));
            const randomPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
            leftWord = randomPair[0];
            rightWord = randomPair[1];
            drawRange(highlightStart - 0.5);
            console.log(`Highlighted range: ${highlightStart}-${highlightEnd}`);
        }

        function toggleHighlight() {
            highlightVisible = !highlightVisible;
            const button = document.getElementById("toggleButton");
            button.textContent = highlightVisible ? "Hide Highlight" : "Reveal Highlight";
            drawRange(highlightStart - 0.5);
        }

        drawBoard();