# Excess Parking Tool

To run follow the running commands from the React Workshop in class (below). The only amendment is that we should add the OpenAI key in a .env file inside server/ with API_KEY={key goes here}.

## Basic description
- **What is it?** A chatbot to ideate on ways to repurpose unused parking for the benefits of the community. 
- **What goal does it serve?** To help the user engage with the land use unused parking and ways to repurpose it for more housing, green areas, or bike/bus lanes. 
- **What type of user does it serve?** It is designed for users with and without familiarity of urban planning, and listens to the values and preferences of the user.
- **What data is the model trained on?** Data on reported unused parking in the broader Boston area, as well as broader urban planning insights on how to convert unused parking spaces to serve the community (e.g., green areas) 

The user workflow is currently very simple:
1. Complete the forms on the basic interest, the neighborhood, the values, and the familiarity with terminology
2. Submit the form for an idea generation by the trained LLM.
3. Contextualize the idea with basic information collected for the neighborhood. 

## Use case (Screenshots)

![alt text](https://github.com/joerovar/CS5170-GPT-React-Workshop/blob/main/start%20use.png?raw=true)

![alt text](https://github.com/joerovar/CS5170-GPT-React-Workshop/blob/main/full%20use.png?raw=true)


# Generic instructions from CS5170-GPT-React-Workshop

Follow along workshop for CS5170

To install necessary software go the project root folders for both the frontend and server folders, and enter: `npm i`

Enter the server folder, and run `npm install -g nodemon`

Enter your OPENAI api key in the corresponding server file.

First run the server with `nodemon index.js` from the server folder.

Then, from a different terminal window, run the frontend with `npm run dev` from the frontend folder.

NOTE: Your editor may show errors when using `react-hook-form` in a couple of the components, such as: `Module '"react-hook-form"' has no exported member 'useForm'.` This should not prevent the code from running, and can be ignored.


