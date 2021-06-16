# Taco Loco Delivery App Frontend.

## Table of Contents
- [Quick Start](#start)
- [About](#about)
- - [MVP](#MVP)
- [Design Considerations](#design)
- [Next Steps](#next)
## Quick Start {#start}
### Prerequisites:
Before running the frontend, you should have already
1. Cloned the backend API.
2. Loaded your database server
3. Launched your backend at `localhost` on port `3210`

### Launch the frontend
1. Clone this repository.
2. Install dependencies by typing `npm install`.
3. Type `npm start` to run in development mode.
4. You can now access the app by pointing your browser to [http://localhost:3000](http://localhost:3000)

## About
This is the frontend for Taco Loco's delivery app. Deliveries consist of a customer name and address.
### MVP {#MVP}
Required features:
* Allow users to view a list of all deliveries.
* Allow users to create, edit, and delete deliveries.

Not required:
* Authentication, protected routes.
* Testing.

## Design Considerations {#design}
This is a very small app, requiring only a small amount of data to be managed using an API.
* React was used to create a single page application. This allows changes to be made "in place" on the page quickly using the Virtual DOM.
* Prop drilling was used since all components that share state are nested. Future expansion should use either Conext API or Redux.
* Routes are not used. Everything is accessed through the `/` default route.

## Next Steps {#next}
* **Testing!** Add script for `npm test` to run all unit tests.
* Styling.
* Additional features:
* * User registration. Private routes.
* * Separate data to make app more flexible:
* * * A customer has a name, address, phone, etc.
* * * An order contains individual items and quantities.
* * * A delivery contains a customer, order, times, and status.
* * * A menu can contain items to select for an order.

