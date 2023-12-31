# luna - tech tasks

If you are reading this then you have successfully found our git repo and are ready to take on our technical tasks!

All tasks are based around the fictional **luna** web app, which is a rudimentary React application built with Create React App and TypeScript that you will run on your local machine. The app is very crude and uses a local JSON file as it's data source - but please approach each task as you would in your normal working life if contributing to a production grade application.

Each task has a "YOUR COMMENTS HERE" section that we encourage you to leave some comments in relevant to the task you have just completed.

If you struggle with a particular task, or feel the instructions are not clear - that's not a problem. Just do the best you can and leave a note in the comments area for that task.

## Prerequisite - get the app up and running

Install the required dependencies and then run the app as a local dev build with:

```
npm start
```

## Task 1 - Product Tweaks 🔧

The following feedback has come in from the product owner, can you apply these updates?

- Sort the Category filter buttons alphabetically
- Add a "count" display to the Category filter buttons showing how many articles exist within each category
- Add a mechanism for users to clear any selected Category filter
- Ensure that all of the "View" button CTAs on the article grid are aligned with the equivalent buttons in the same row

```
For your information, while installing the dependencies, there were multiple warnings about deprecations but I ignored them to not break something accidentally and affect how I complete the tasks. I am sorry if that was intended!

To sort the Category filter button alphabetically, I  used the sort() and .localeCompare() methods. The method allows us to sort strings alphabetically, and it is case-insensitive. 

For the "count" display, I created a utility function. I added the relevant types to interfaces, such as adding the 'Article' type to the ICategorySelector interface, I then ensured that all the required modules were imported and exported for it to work.

My mechanism to clear filters is pretty easy, if clicked to the selected button again, it clears your selection!

Lastly, I aligned the "View" buttons by adding the align items: last baseline CSS property to the ArticleGrid class. This causes some cells to appear taller but I think the UI still looks good. I also added a margin-top property to add separation between the ArticleGrid and CategorySelector divs.
```

## Task 2 - Test Coverage 🤓

The app currently has a test coverage of around `70%` which can be checked by running:

```
npm run test:coverage
```

Can you add extend the `App.test.tsx` file to get our overall coverage to in excess of `85%`?

```
I increased the coverage to 97.5%. I divided the tests to describe blocks. I also wrote unit tests for my utility function. I used test data to test the function in case the original data alters in the future and to test an edge case.
```

## Task 3 - Article List Content 📜

The `ArticleDisplay` component isn't quite complete as it is not able to render any lists that appear in the article content (i.e. if you view the "Explaining eye bags" article you should see two red blocks stating "LIST CONTENT NEEDS TO APPEAR HERE")

Can you finish off the implementation by ensuring that list content is displayed in articles appropriately. Feel free to overhaul the existing implementation as you see fit

```
I finished off this task by completing the existing logic. However, it is worth noting that in types.ts line 13, the ListContent type was assigned to Paragraph OR ParagraphContent - I changed this to assign it only to the Paragraph type, because the ParagraphContent type is not applicable to the "bullet-list" or "ordered-list" type of objects.
```

## Task 4 - Shared Components 👪

The product owner has asked that the main CTAs in the app (i.e. the "View" and "Close" buttons on the `ArticleGrid` and `ArticleDisplay` components) have their text displayed in uppercase. As an optimisation while making this change can you refactor those two components to use a common `Button` component (so that when the product owner decides to revert this change we only have to do it in one place 🤭)

```
I created a Button component and an interface for its props. To make them uppercase, the textTransform css property handled the situation. Lastly, replacing the button tags with the component and passing the appropriate props provided the desired optimisation.
```

## Task 5 - Mobile Responsiveness 📱

We have had some feedback that the web app isn't working particularly well for users on mobile devices when viewing articles. Can you upgrade our ArticleDisplay component to be more mobile friendly while not impacting the current desktop experience?

```
From what I saw, the problem with mobile screens was the disappeared Close button and slightly unproportioned article display container in smaller screens. To fix this and not affect the desktop experience, I added the @media rule to the ArticleDisplay.css. When fixed to max-width: 393px and reducing the max-height property to half, the problem seems to be fixed.
```

## Task 6 - Accessibility 👓

An independent accessibility audit has highlighted some issues with our app. Can you explain what accessibility means in this context and implement some accessibility related enhancements to our app?

```
In the context of software, accesibility means inclusive designs and practises that allow users with disabilities to use digital products in ease. This includes people with visual, auditory or/and motor disabilities, and more. Ensuring that our products meet with accessibility standards is non-negotiable.

I ran a lighthouse audit on my browser and the report says the app is at 97% regarding accessibility. This is after I added an alt text to the images in ArticleGrid. According to the report, the problem is: 'Background and foreground colors do not have a sufficient contrast ratio.'. However, I thought I could still improve the accessibility using semantic tags, aria labels, making sure to have alt texts and avoid keyboard traps. I also changed the h2 elements' gray tone in ArticleGrid to get the right contrast using Chrome DevTools. It still has room for improvement but these are what I've done so far.

```

## Task 7 - New Search Feature 🔎

It's time to roll you out your very first feature! The brief is short and there are no designs for us to use as it needs to be shipped tomorrow! 😬

The brief: Users need to be able to search across all of our articles via text

```
To complete this task, I created a search bar component between the CategorySelector and ArticleGrid components. The feature allows our users to search their words, and if the keyword is in any articles, the results show up. I first implemented the feature to search within just the article titles but then I changed it for it to search throughout the article content. I utilised the flatMap() method to flatten the data and concatanate the paragraph/list items into single strings, and then searched within them by using .includes().
```

## Bonus Task - Make the app "Pop" ❤️

As our newest team member, seeing the (albeit rudimentary) **luna** web app with fresh eyes for the first time is a moment that we like to capitalise on! Can you comment on the UX of our web app, and implement some changes that you think would **delight and surprise** our users.

```
The app is really easy to navigate, everything is extremely intuitive to use. The colorful palette is eye-pleasing and vibrant, which is appropriate for our target audience. Since the Hero section is what users immediately see, I added a CTA element for downloading the app. I also added a scroll to the top button to give a little touch to the UX. Overall, the app can use more movement, adding a carousel of images to the Hero section, some animations here and there without overdoing it can be fun for the audience. Adding light/dark mode also would delight the users!
```
