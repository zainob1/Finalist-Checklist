# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Zainob Adeyemi


## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used this to explain the ID and class specifics- https://blog.hubspot.com/website/css-id
I used this website to explain the different conditionals and how it can be used since i've only encountered python conditions- https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
I really loved everything about creating this game. It was exciting to challenge myself and see my ideas come to life through coding. Learning three new languages in just a few hours was a great experience, and it gave me a deeper appreciation for how different languages interact to build a complete project. A few things I struggled with were understanding classes and IDs in HTML and CSS. Since we created an ID for each button, I initially thought I needed to use "." instead of "#". I assumed that because the buttons were inside #gameButtonArea, it meant they were part of a class. However, after checking my resources, I realized that since each button had an ID, I needed to use # to alter the color of each button rather than ".". Once I understood that concept, it became much easier to manipulate individual elements. Another issue I encountered was with debugging. After finishing the main structure of the game, I noticed that when I lost, my button didn’t switch back to “Start.” I spent time experimenting with different solutions, tweaking my code, and testing different approaches until I was able to fix the issue. Debugging required patience, but it was satisfying to see the final result working smoothly. Adjusting to the syntax wasn’t necessarily difficult, but it did take some time. I had to constantly remind myself to properly use {} and close them correctly. Otherwise, the program would either throw errors or interpret my functions incorrectly, sometimes treating them as nested loops. To overcome this, I became more mindful of indentation and spacing, ensuring that each function was structured correctly before moving on. By the end of the project, I felt much more confident in my ability to code efficiently. I was able to adjust to the syntax and problem-solve more effectively. This experience has motivated me to continue learning and improving my coding skills.
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
After completing this assignment, I wonder how big companies manage software development with multiple people working on the same part of a project. I've never experienced coding  with a team where multiple people work on the same code, and I'm fascinated to see how that collaboration functions. Developing this made me think about how teams add different features to mobile apps. On Instagram or TikTok, different users interact with various features, and I wonder how they manage and maintain different users' information. The game I worked on was straightforward, but I want to understand what development looks like on a larger scale. I also wondered, since games like Call of Duty and FIFA aren’t websites, do they follow a similar development process, and how do they integrate graphics? Additionally, I hope to ask my mentor or other professionals how long it takes the average person to develop an app and get it published. What does the qualification process for web development look like, and what standards do developers need to meet?
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more hours to work on the project, I would add more features, such as a homepage before starting the game. The light and sound game jumps straight into gameplay, whereas most games usually have a starter page that provides a noticeable transition. While implementing that, I would also add a game song before the game begins to leave a memorable impression on the user. Personally, I tend to remember the songs and sounds of games when I play them. Since I kept forgetting how many guesses I made, I think adding a level counter would be beneficial. This would help players track how close they are to winning.
For a game like this, I would introduce different levels by shortening the duration of the sound, making the user rely more on memory to recall the last color or sound. This would make the game more challenging and engaging. People thrive on competition, and if the game increases in difficulty, I believe it would attract more players who enjoy a competitive challenge.
## Video Walkthrough 

Add your screen recordings for specified implemented features here:
![losing screen recording](https://www.loom.com/share/e55633470000494db71a3046ec0b69f2?sid=a61aa41d-d493-4816-ac1a-d21ed34afaa7)

## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/41D6hpjKRLs?si=uSrHHjE19WN2IzG3)


## License

    Copyright Zainob Adeyemi

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.