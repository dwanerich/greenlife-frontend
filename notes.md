<!-- WORKS IN PROGRESS  -->

// REACTION BUTTON LOGIC SECTION //

    // LOGIC FOR HAPPY
    When happy is clicked, increment counter +1


    // LOGIC FOR SAD
    when said is clicked, remove Plant from DOM


    Persisting Incrementation to the database

    BACKEND
        - Make a migration to add happy_count (integer) field to Plant model. Set default to 0 (google how to set a defualt in a Rails migration)
        - migrate the database
        - add a new action to the plants controller (maybe call it increment_happy_count)
            -   action will need to find the plant by ID, update the count, save the plant, and return json of the new plant
        - add a new route (method: PUT) that links to the new controller action (maybe put "/plants/:id/increment_happy_count", to: "plants#increment_happy_count )


    FRONTEND
        - Inside APIService, add a new method that will PUT to the new route (localhost:3000/plants/${id}/increment_happy_count)
        - Use the response from the API service call to update the plant's card on the DOM with the new info 