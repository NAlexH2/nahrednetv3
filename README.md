
# Table of Contents
- [Table of Contents](#table-of-contents)
- [nah-red.net V3](#nah-rednet-v3)
  - [Tech Stack Used](#tech-stack-used)
  - [About](#about)
  - [Why Vite?](#why-vite)
  - [Where Is This Deployed?](#where-is-this-deployed)
  - [How Long Did This Take?](#how-long-did-this-take)
  - [Can We See Version 1 and Version 2?](#can-we-see-version-1-and-version-2)

# nah-red.net V3

## Tech Stack Used
- AWS Amplify (Hosting)
- [Vite](https://vite.dev/)
- React
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- HTML
- [react-code-blocks](https://www.npmjs.com/package/react-code-blocks)


## About
This website was put together as an update to my previous versions. I elected 
to rework all of the content and presentation, and started fresh because of 
this. Even with a fresh start, I was able to bring over a lot of my already 
created material for the projects section, which a allowed me to also revisit 
how I wanted to organize and which projects I wanted to showcase. I trimmed 
down the tools being used so I could learn more by doing more. Getting rid of 
Material UI and Framer Motion forced me to create components I wanted to 
use/reuse and learn how to (lightly) animate with CSS - granted, the animation 
is done with Tailwind CSS, but that itself takes some learning too!

With custom components, to CSS overriding AND customization/extending, and out 
of the box ready components, this stack allowed me to learn far more than I had 
expected to. I went into this personal project expecting it to be a lot of 
placing components and customizing them the way I wanted them to be, but that 
turned into recreating and building my own components to behave exactly how I 
wanted them to.

## Why Vite?
Quite simple reasoning actually: I used it before! I knew how to set it up,
and customize various features, while learning how to do new ones too (such as 
aliasing, but that's not necessarily Vite specific.) Unlike previous versions 
of the website, which started off with raw HTML/CSS with very little JavaScript. 
Then I created a NextJS version, but found myself stressing over client side 
rendering and server side rendering, though it provided easy to use features 
like custom fonts to be incorporated. Not vital to the project, but I wanted 
it that badly, I found a way! Though, with this version of the site, I'm using 
Vite as the framework, while being able to use all the features I had with 
NextJS, and also able to use the React Router to be very explicit about the 
routing which, was another issue I was having/had with NextJS - just didn't 
quite trust the automatic nature of it.

I quickly found myself stuck in a corner with React though! I could not find a 
clean and easy way to do some things - such as adding custom fonts - in a nice 
manner. NextJS however, made it super easy to do that! Then, I was running into 
issues where certain packages I was trying to use were, strangely enough, 
having issues being compatible. I had thought to myself how strange that was 
and that it should not matter.

## Where Is This Deployed?
The website is built and deployed from AWS Amplify. AWS Amplify can 
automatically detect and build/rebuild a website if it detects any changes to 
the source, much like GitHub actions can too. I also used GitHub pages and 
GitHub actions to do test deployments just to ensure it looked fine 
periodically.

## How Long Did This Take?
In total, if worked on every day, about a week, off and on. This was a personal 
project that just took a bit more time though because of other commitments. 
Though looking at the commit history exclusively, it was 3 weeks. Not bad, and 
is far less time than the V2, which took me a about 2.5 months of learning and 
researching on my own simply because of the volume of new stuff I was learning 
everyday.

## Can We See Version 1 and Version 2?
You can visit the source code for [version 1 here](https://github.com/NAlexH2/nahrednetv1). 
While you can find [version 2 here](https://github.com/NAlexH2/nahrednetv2). 
Neither of these websites are currently deployed.