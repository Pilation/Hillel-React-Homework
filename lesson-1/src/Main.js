function Main() {
    return (
        <main className="main">
            <div className="container">
            <ol className="main__ol">
            <li>
            React expands your reach to mobile.
            I learned React for web first, then transitioned to React Native. That transition from React to React Native wasn’t as daunting as I had anticipated. The real challenges were the concepts of web vs. mobile that I found difficult, specifically things like styling, routing/navigating, setup, design, etc. That is to say, the way you design/build a website is very different from a mobile site. The technology itself was not the big barrier.
            So, if you think you might want to do a bit of mobile development one day, React is a great place to start.
            </li>
            <li>
            You learn ES6 & Vanilla Javascript.
            JavaScript libraries are convenient and powerful, but they hide a lot of JavaScript behind the magic of a library. Vanilla JavaScript refers to JavaScript without the use of libraries (aka “plain” JavaScript).
            I learned more ES6 (a version of JavaScript) and Vanilla JavaScript doing React than I did Angular. When you use React, everything is in Vanilla JavaScript, instead of some framework version of the language (like, for example, when you use jQuery to avoid browser incompatibility, you may be missing out on a better understanding of these concepts). React also gives you a lot of freedom to build a wide range of functionality and customization into your apps. Working in this framework helped me understand all sorts of Javascript concepts that simply weren’t getting into my head while I was using other frameworks.
            </li>
            <li>
            React saves you time.
            Efficiency requires writing self-contained pieces of code that work within the larger code set. And in my experience with JavaScript frameworks, nothing makes you work efficiently like React does. Since you’re literally already working with a bunch of components that communicate with each other, it’s easy to write utility functions or other services in this vein, too. So this architectural pattern is something you can take with you to other frameworks and libraries. In other words, React's modular approach allows you to change a component once, and it will change in every place it exists across the site, rather than having to change it for each individual instance.
            </li>
            <li>
            You can use any technology with React.
            React is super flexible in terms of how it renders a view, so you can use this library with basically any other framework of your choosing. For example, many developers will use Node.js with React to utilize server-side rendering. It gives you the flexibility to write awesomely fast and clean code while using any other technologies that your project calls for.
            </li>
            </ol>
            </div>
        </main>
    );
}

export default Main;

