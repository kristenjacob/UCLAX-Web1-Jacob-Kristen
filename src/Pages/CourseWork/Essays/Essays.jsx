import styled from 'styled-components';

/* Component -------------*/
import Essay from'./Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h2>Essays</h2>
            <Essay question='Q1: Explain the difference between HTML, CSS and Javascript.'>
                1. Front-end web development uses HTML, or Hyper Text Markup Language, is the fundamental structure of the site presenting information like *what* text displays in the header, what text displays in the body, and what to name the page on the browser tab. CSS, or Cascading Style Sheet, controls the formatting and layout of the content written in HTML. Often these two are spoken in the same sentence when in the context of front end web development because without formatting, a website would look unexciting and likely difficult to read. Javascript allows interaction between the user and the webpage. For example, we can display an image of a sun on a page and when the user hovers the mouse over this image, it can flip to a moon. The interaction of the user hovering a mouse over an image and triggering the image to change is coded in Javascript.
            </Essay>
            <Essay question='Q2: What is the difference between Git and GitHub?'>
                2. This is my answer.
            </Essay>
            <Essay question='Q3: What is the difference between JQuery and React?'>
                3. This is my answer.
            </Essay>
            <Essay question='Q4: This will be question 4.'>
                4. This is my answer.
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;