1) Create Redux state
    - store/configureStore.js - file with Redux store
    - reducers/  - folder with all app reducers
    - constants/actionName.js - file contains all reducers action actionName
    - actions  - all Redux actions

1) create app components 
    - WelcomeScreen - first component contain login and registration forms
    - Home - component contain Navigations, Search Fields, Chat
    - ChatArea - component with input field and chat ChatArea
    - Navigations - setup component for React Router
        - contains redirect and check user login, if user was logined it sed user t o home page, otherwise to Login/Registration
    - SearchField - component for search users or chat

2) create login and registeration form
    - Use react state for validate input data and Redux to contain selected form LOGIN/REGISTRATION
    - After form was submited, validation starts. Compare all input fields and save to State
    - if form valide app redirect user to the home page if no it show some info about validation error
    