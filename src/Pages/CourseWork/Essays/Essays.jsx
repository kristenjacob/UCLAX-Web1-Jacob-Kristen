import styled from 'styled-components';

/* Component -------------*/
import Essay from'./Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h2>Essays</h2>
            <Essay question='Q1: Explain the difference between HTML, CSS and Javascript.'>
                Front-end web development uses <b>HTML</b>, or Hyper Text Markup Language, is the fundamental structure of the site presenting information like *what* text displays in the header, what text displays in the body, and what to name the page on the browser tab. <b>CSS</b>, or Cascading Style Sheet, controls the formatting and layout of the content written in HTML. <br></br> <br></br>Often these two are spoken in the same sentence when in the context of front end web development because without formatting, a website would look unexciting and likely difficult to read. <b>Javascript</b> allows interaction between the user and the webpage. For example, we can display an image of a sun on a page and when the user hovers the mouse over this image, it can flip to a moon. The interaction of the user hovering a mouse over an image and triggering the image to change is coded in Javascript.
            </Essay>
            <Essay question='Q2: What is the difference between Git and GitHub?'>
                Both are developer tools for saving and versioning work. However <b></b>Git is saved on local desktop and while GitHub is shared on an online repository for other developers to pull from and collaborate. When a developer is working on work independently, work can be saved on the local desktop and when the work is ready to for sharing and collaborating, the work can be pushed to GitHub. The two can work in tandem and are not competitors.
            </Essay>
            <Essay question='Q3: What is the difference between JQuery and React?'>
                Both JQuery and React act a library of commonly written tasks and can condense several lines of JavaScript code into a single line of code - called a method. This can expedite the creation of tasks and reduce errors in manually developing. <br></br> <br></br>Both are open source which means it is available for others to inspect and modify. jQuery came first in 2006. And 7 years later, React became available. While most of what can be done in jQuery can also be acheived in React, React has the ability to embed HTML in JavaScript to create more refined single-page applications.
            </Essay>
            <Essay question='Q4: What is the difference between a Front-End and Back-End Developer?'>
                Front end developers work on the client-side or the visual aspects of the application while back-end developers work with the server side of the application. For example, when I use Google Maps, the images, icons, filter buttons, etc. are control by front end development. When map directions are made between point A and B, an API call is made to the information in the back end to retrieve the origin and destination address and calulated route. Then the display of that route to the user is front end display. In this case, we are working with front end development languages such as HTML, CSS, Javascript, and React. Languages used for back-end development include Ruby and Python.
            </Essay>
            <Essay question='Q5: What are the different ways we can link files/resources to our application?'>
                We explored a few ways to acheive this in class. One way is we can link to our application is through a document link which can tell the program to look for a - say - image or body of text within the directory to return back a file/resource. This allows for a more dynamic way of referencing that image - for example - by tagging it with a label with "image1". Document relative links can be used in this context by giving instructions to look for a file in the context of the same folder so when that folder is moved around, the directory doesn't break. <br></br> <br></br>Another way is more static - or hard coded - where the image is directly referenced in the program with a name like "image1". The drawbacks to this is that if that image or text needs to change, the developer may need to go through the entire program to change everywhere an asset was hard coded.
            </Essay>
            <Essay question='Q6: What is the difference between jpg, gif, png and svg images?'>
                <b>JPG</b> - or Joint Photographic Experts Group - is the most common file format for compressing digital images and can display a lot of different colors. It does not support transparency and since it is rasterized, its quality could be compromised when shrinking or sizing up images. <br></br> <br></br><b>GIF</b> - or Graphics Interchange Format - is best known for its ability to add animation to an image by combining images or frames. <br></br> <br></br><b>PNG</b> - or Portable Network Graphic - is similar to JPG with the largest difference being able to support transparency or semi-transparency with the transparent pixel. <br></br> <br></br><b>SVG</b> is a vector-based file format - and not rasterized - which means it can be sized up and down without degrading the quality of the image; however, it does not support lots of colors - like a JPG. It can be used in the use cases of a logo - as a opposed to a photograph - where there are not too many colors.
            </Essay>
            <Essay question='Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.'>
                <b>Product manager</b> works with many stakeholders in the business - like customers, strategy, sales, other product teams, etc - to define the product vision and prioritize features against a roadmap. <b>Product owner</b> and manager can oftens be the same person, but if differentiated in a company may be broken out by a more strategic role for the product manager and a more tactile role for the owner. Product manager / owner is more tactile meaning they are involved in daily sprint stand ups, write epics and stories for developers to pick up work, and groom / maintain the backlog. <br></br><br></br><b>Business analysts</b> support the team with documentation, product planning, research and reporting to inform design decisions. <b>Scrum Master</b> leads daily stand up meeting, plans sprints, and help track deliverables to deadlines; this is role is most like a project manager. <br></br><br></br><b>UX designer</b> is focused on how the product looks and is experienced. The UX designer can sometimes also be the UI designer and has a background in design fundamental to guide users through product most intuitively and with an aesthetic polish. <b>Developers</b> pick up stories - or requirements - written by the product manager or owner in typically 2 week long sprint cycles to build requirements into the application. <br></br><br></br><b>QA</b> tests the work done by development in a given sprint afterward. <b>DevOps</b> support development teams across an organization with automated processes - like running scripts to stage test scenarios.
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;