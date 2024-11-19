# Excess Parking Tool

To run follow the running commands from the React Workshop in class (below). The only amendment is that we should add the OpenAI key in a .env file inside server/ with API_KEY={key goes here}.

## Basic description
- **What is it?** A chatbot to ideate on ways to repurpose unused parking for the benefits of the community. 
- **What goal does it serve?** To help the user engage with the land use unused parking and ways to repurpose it for more housing, green areas, or bike/bus lanes. 
- **What type of user does it serve?** It is designed for users with and without familiarity of urban planning, and listens to the values and preferences of the user.
- **What data is the model trained on?** Data on reported unused parking in the broader Boston area, as well as broader urban planning insights on how to convert unused parking spaces to serve the community (e.g., green areas) 

The user workflow is currently very simple:
1. Complete the forms on the basic interest, the neighborhood, the values, and the familiarity with terminology.
2. Submit the form for an idea generation by the trained LLM.
3. Contextualize the idea with a table of basic information collected for the neighborhood referenced.

## Use case (Screenshots)

![alt text](https://github.com/joerovar/CS5170-GPT-React-Workshop/blob/main/start%20use.png?raw=true)

![alt text](https://github.com/joerovar/CS5170-GPT-React-Workshop/blob/main/full%20use.png?raw=true)

# User Feedback Plan

## Recruitment Strategy Plan

For strategies of recruitment, we combine experiences from the COVID screening diagnostic tool (Schilling, 2023) and the sustainability chatbot (Gebrewold, 2024; Hasan, 2023):

- To get general public representation, with mixed levels of urban planning topic awareness, via LinkedIn, email lists, friend circles, and flyers.
- Invite practitioners via email.

## Questionnaire Design Document

To inspire the design, we rely primarily on the usability frameworks proposed in the literature. Given the potential integration of a language-based model to communicate the insights of the tool and the general applicability of chatbot evaluations to AI tools, the evaluation draws from a comprehensive set of attributes in the literature (Borsci, 2022). 

In the study by Borsci (2022), people lightly to very familiar with chatbot development ranked the importance of various factors. We have selected those relevant to this tool:

- **Integration into website:** How visible the chatbot is and whether it enhances the user experience.
- **Perceived ease of use.**
- **Linguistic flexibility:** The ability to communicate relatively advanced details (e.g., the relationship between household occupancy).
- **Sensitivity to safety and social concerns:** For example, suggesting the removal of excess parking in a low-income neighborhood with car-dependent households might unintentionally worsen their situation by increasing the time needed to find parking at night.

In our tool, we aim to guide the user to navigate the region map and select a tract that interests them the most to investigate excess parking. Then, a potential chatbot can structure details in intuitive language. A sample statement from the model could be: "There is a large residential building with an unusually large amount of excess parking located in the selected tract."

Additionally, we draw from questions used in the COVID screening diagnostic tool (Schilling, 2023) on ease of use and perceived accuracy. To accommodate feedback from both expert and general users (Hasan, 2023), we add questions on familiarity with the subject, allowing us to filter results by the level of expertise:

- How familiar are you with urban planning concepts, such as the relationship between private vehicle reliance and neighborhood walkability?  
  **Options:** Not familiar / Lightly familiar / Very familiar.
- How familiar are you with the context of Boston urban areas?  
  **Options:** Not familiar / Lightly familiar / Very familiar.
- How easy was the tool to use or understand?  
  **Options:** Not easy / Moderately easy / Very easy.
- Did you perceive the tool to accurately reflect the reality of excess parking?  
  **Options:** Yes / No / Not sure.
- Did you perceive the tool to fairly consider social inequalities?  
  **Example:** By not presenting excess parking cuts in already disadvantaged, low-income neighborhoods.  
  **Options:** Yes / No / Not sure.
- If you were previously unfamiliar with urban planning concepts, did you become more familiar after using the tool?  
  **Options:** Yes / No / Not sure.
- If you were previously unfamiliar with the socioeconomic and urban context of Boston, did you become more familiar after using the tool?  
  **Options:** Yes / No / Not sure.

Additionally, domain experts will be interviewed to provide further assessments on the accuracy, relevance, and practicality of chatbot responses:

- How applicable is the tool for urban planning decisions practitioners make?  
  **Options:** Not applicable / Lightly applicable / Very applicable.
- Did the tool reflect intuitions of urban planning?  
  **Options:** Yes / No.

## Observation and Activity Plan

For observation-based evaluation, we will rely on the usage logs generated during experiments, focusing on the following metrics:

- Measure average response time as a proxy for ease of use.
- Count the number of quality interactions per user, as reported in the survey by Maroengsit (2019).  
  - **Low-quality interactions:** Simple selection of tracts to check raw excess parking numbers.  
  - **High-quality interactions:** Filling out forms with specific queries on the potential benefits of excess parking cuts.  
  - The average number of high-quality interactions per user can indicate how much users exploit the tool's advantages.

These statistics will be documented in a report with visualizations such as charts.

# Generic instructions from CS5170-GPT-React-Workshop

Follow along workshop for CS5170

To install necessary software go the project root folders for both the frontend and server folders, and enter: `npm i`

Enter the server folder, and run `npm install -g nodemon`

Enter your OPENAI api key in the corresponding server file.

First run the server with `nodemon index.js` from the server folder.

Then, from a different terminal window, run the frontend with `npm run dev` from the frontend folder.

NOTE: Your editor may show errors when using `react-hook-form` in a couple of the components, such as: `Module '"react-hook-form"' has no exported member 'useForm'.` This should not prevent the code from running, and can be ignored.


