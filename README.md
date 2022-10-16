# FreeTime

## Inspiration
We noticed that as college students with busy schedules, it’s hard to schedule time to meetup, especially when it comes to scheduling events with groups of 3+ people. Although scheduling apps like calendly, when2meet, and cal.com exist, these apps either require excessive user intervention (such as manually copying over their calendar) or primarily serve the purpose of one-on-one meetings.

## What it does
Insync aggregates all e-calendars from each person in a group to provide an easy, centralized group scheduling solution. Insync achieves this by creating a heat map of everyone in a groups schedules, outlining times throughout the week where overlap in availability is minimized and maximized. A user can categorize their friends into different groups, streamlining and lowering the barrier to smart scheduling.

## How we built it
We started with a white-board and a brainstorm of problems we could relate to before mapping out a few case user experiences for us to choose from. Once we decided on the issue of group scheduling we talked with a few of our peers in the dining hall to assess the relevance of our idea to students (our most reachable demographic). Once we chose the path and finished our concept design, we decided on React with Recoil as our frontend framework for state management and UI, and Flask as our backend which interfaces with the Google Calendar API in order to process calendar data and send it back to our frontend. Adding cells into the frontend for visualizing calendar time was challenging, but we eventually were able to implement it as well as a hover feature which shows which users are busy at what times.

## Challenges we ran into
Two of the four teammates that dropped out of the hackathon due to personal reasons which pushed us to make up for the lost man power. The adjustment was difficult but challenged us to burn the midnight oil and finish strong. Jumping through multiple security hurdles when dealing with Google Identity Services and the google calendar API - without going through the lengthy process of app verification, google IS doesn’t allow non-test users to use certain API features.

## Accomplishments that we're proud of
Writing over 1,200 lines of raw code to create a functioning product after losing teammates and nearly losing motivation to keep going. Learning Figma in a day to create UI/UX wireframes to better visualize our goal and iterate/improve our product. Using G-IS’s domain wide delegation to allow interfacing with the Gcal API without active user authentication

## What we learned
Choosing a team of diverse and complementary skill sets is important to ensuring that all bases are covered (frontend, backend, wire-frames, pitch deck, etc). Working in a lively area with interesting people can go a long way in boosting team morale Working with other teams and helping each other with a positive-sum mentality can create positive sum outcomes in which both teams learn more than possible alone

## What's next for Insync
Social Networking Suggest shared events to attend based on free time & interests Show live activity status of friends with ping capability

Machine Learning Predictive scheduling and activity recommendations
Automated hangout and meeting time seeker

Miscellaneous Integrate with Calendly and other online scheduling web apps Group reminder system (ex., tests, assignments)