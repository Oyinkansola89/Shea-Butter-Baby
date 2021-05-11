 function buyButter() {
            let name = prompt("What is your name?");
            let skinType = prompt("Hi👋🏾 butter baby, is your skin type dry, combination or oily?");
            let whipped = prompt("Would you prefer whipped or raw organic shea butter?");
            skinType = skinType.toLowerCase().trim().replace("oilly", "oily");
            whipped = whipped.toLowerCase().trim().replace("whiped", "whipped");
            name = name.toLowerCase().trim();

            if (skinType === "dry" && whipped === "raw") {
                alert(" Great! we have just the thing for you" + " " + name + ",try our raw organic shea moisture balm, it'll make you feel coca warm and revitalise your skin🧖🏾‍♀️");

            }

            if (skinType === "dry" && whipped === "whipped") {
                alert(`Great! we have just the thing for you ${name}, try our whipped organic shea moisture balm, it'll make you feel coca warm and revitalise your skin🧖🏾‍♀️`);

            }
            if (skinType === "combination" && whipped === "raw") {
                alert(`Great! we have just the thing for you ${name}, try our raw organic shea combined nurture & nature butter! it'll moisturize and revitalise your skin🧖🏾‍♀️`);

            }

            if (skinType === "combination" && whipped === "whipped") {
                alert(`Great! we have just the thing for you ${name}, try our whipped organic shea combined nurture & nature butter, it'll moisturize and revitalise your skin🧖🏾‍♀️`);

            }
            if (skinType === "oily" && whipped === "raw") {
                alert(`Great! we have just the thing for you ${name}, try our raw organic shea gleam reduction nature butter, it'll moisturize your skin without leaving it feeling greasy, fantastic right?🧖🏾‍♀️`);

            }
            if (skinType === "oily" && whipped === "whipped") {
                alert(`Great! we have just the thing for you ${name}, try our whipped organic shea gleam reduction nature butter, it'll moisturize your skin without leaving it feeling greasy, fantastic right?🧖🏾‍♀`);

            }
        }

        let tryButterButton = document.querySelector("button");
        tryButterButton.addEventListener("click", buyButter);