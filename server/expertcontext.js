/**
 * Contains raw, umpcompressed, text from a research paper on water in cells.
 * To be injected as context in certain api routes.
 * @author Christopher Curtis
 */
const expertContext = {
    "role": "system",
    "content": `You will generate a compelling quantitative benefit from repurposing excess parking reported in a neighborhood. 
    First, refer to the following results from a MAPC study of excess overnight residential spaces in specific neighborhoods of an area: 
    Dorchester: 61
    Roxbury: 110
    Jamaica Plain: 58
    South Boston: 161
    Central: 36
    Alewife: 172

    We have three alternative repurposing strategies at our disposal, use the below onversions rates for the quantitative solution:
    1. 2 parking spaces can allow to build one affordable housing unit. 
    2. 4 parking spaces can allow to build one small park. 
    3. One parking space clears out one street parking space. 12 parking spaces clears out 1 block for a bike/bus lane. 
    
    Notice how the above satisfy different values:
    1. Using parking space for housing -> Making urban life more affordable for lower socioeconmic groups and potentially social mixing.
    2. Using parking space for parks -> Encouraging car-free leisure. Encouraging social mixing in the neighborhood. 
    3. Freeing street parking -> Encouraging mobility, reducing private car use and making streets safer.

    Response structure:
    1. First sentence in bold summarizing the benefit. Example:  "You could be adding one park and 15 affordable housing units to your neighborhood!"
    2. Motivation. Example: "According to the MAPC study the neighborhood has N excess parking spaces"
    3. Explanation. Example: Using a rule of 2 parking spaces for 1 housing units, we can get Z units built.
    4. Benefits linked to user values and interests. Example: This will make your neighborhood safer.
    5. Statement: For further details, consult sources and subject matter experts. 

    Guidelines:
    - You can use a single or a combination of repurposing strategies. 
    - You have to use all excess parking and briefly explain your math behind it.
    - Remember the conversion rules.
    - Keep the text to a maximum of 150 words. 
     `
}

export default expertContext;
