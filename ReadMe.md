Hello! Thanks for the opportunity for letting me take up the Frontend Skill test.

Release notes:

App name: Mercariv1
version: 0.0.1
Release date: 24 Sep 2019

Contents:

I. Functional features
II. Technical features
III. Known issues
IV. Pre-requisites
V. Application deployment

________________________________________________________________________________________________

I. Functional features implemented:

    1. Application header will have the following features
        a. Category menu
        b. Mercari logo
        c. Search box
        d. Notification icon
        e. Shopping cart
        f. Link to Mercari facebook page
        g. Link to Mercari Instagram page

    2. Clicking the Menu hamburger will open a side menu with categories fetched from the service.
    3. Clicking on a category will fetch the respective items that belong to the category. (Check 'Known issues')
    4. Default category will be the first category of the category list, it is configurable.
    5. Items list page has been made the default view
    6. Item List page has been implemented as per the specifications
    7. Hovering on the image will zoom the image by 10%.
    8. A sold/unavailable item will bear the SOLD logo over it.
    9. Clicking on an item will take the user to its respective Product detail page
    10. The product detail page will bear a unique URL with query param bearing the selected ID
    11. And product and its detail can be fetched by passing the URL with its respecive ID (For eg:http://localhost:4500/detail?id=2 )
    12. The sold out item will be displayed with SOLD icon
    13. The mobile view of the Product detail page will have the price and buttons displayed as overlay to the bottom.
    14. There will be a Live News ticker on the product detail page with auto scroll set at 5 seconds. The news ticker is implemented using Google News API.
    15. Clicking on 'Read more..' link of a news will take user to the respective news, outside the application
    16. Selecting a category from the detail page will take the user back to Product List page.

II. Technical features:

    1. The application is developed using Angular 7
    2. The UI components are developed using Angular material design
    3. This is a responsive application. Flex layout has been used mixed with media queries to achieve responsiveness.
    4. The product detail cards are implemented using Reusable components
    5. The header is implemented using mat-toolbar
    6. The routing is handled using angular router
    7. The API calls are handled using Angular HttpClient
    8. ClickOutside directive has been used to handle click outside the side menu
    9. convert-uts pipe has been used to convert UTC time to local time.
    10. Animations are used for images
    11. Custom loaders are used to hand page loading
    12. Implemented polyfills for cross browser compatibility
    13. A production build of the app is kept at build/MercariBuild. The main.js is rendered with ~800kb. Its an AOT build. 
    14. The app is lightweight, sized at ~1mb.
    15. To create a new build, run '$npm run prod-build'
     

III. Known issues

    1. The api server doesnot return data encoded with UTF-8 or UTF-16., hence the Japanese texts are receieved as garbage values, and the same has been displayed. Created an issue already. (https://github.com/m-rec/97065ad8e508a300c3d6d0b43600345ada74aba2/issues/3)
    2. There will be no search box in tab and mobile view, shall be released in next version, if provided time.

IV. Pre-requisites

To run this application, following are the pre-requisites

    1. node version: v10.13.0
    2. npm version: 6.4.1

IV. Application Deployment

    To run the application, start the api-server app with the following commands

    $ cd api-server
    $ bundle install
    $ bundle exec foreman start
    $ open http://localhost:5000

    Then run the following commands to start the Angular application

    $ yarn install
    $ npm run start
    $ open http://localhost:4500

Author:

Athif J

Mail @: athifbijli@gmail.com
Call @: +91 9944089079 (India)
GitHub: https://github.com/athifjey