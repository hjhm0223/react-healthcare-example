## Directory Structure

[React Docs - 파일구조](https://ko.reactjs.org/docs/faq-structure.html)
[React Architecture Directory](https://www.taniarascia.com/react-architecture-directory-structure/)


The top level directory structure will be as follows:

- assets - global static assets such as images, svgs, company logo, etc.
- components - global shared/reusable components, such as layout (wrappers, navigation), form components, buttons
- services - JavaScript modules
- store - Global Redux store
- utils - Utilities, helpers, constants, and the like
- views - Can also be called "pages", the majority of the app would be contained here


I like keeping familiar conventions wherever possible, so src contains everything, index.js is the entry point, and App.js sets up the auth and routing.