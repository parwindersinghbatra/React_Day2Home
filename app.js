const h2 = React.createElement('h1',{
    style:{
        color:'green'
    }
},'Topics covered');

const p1 = React.createElement('p',
{
    className: "paragraph_content"
},
'The following is a list of the topics we covered in the MDN learning area');


const firstLink = React.createElement('p',{className:'fistDiv'},'Getting started with the web');

const p2 = React.createElement('p', {className: "paragraph_content"}, 'Provides a practical introduction to web development for complete beginners');

const firstDiv = React.createElement('div',{
    style:{
        margin:'5px;',
   }
},[firstLink, p2]);





const secondLink = React.createElement('p',{className:'fistDiv'},'HTML - Structure the Web');

const p3 = React.createElement('p',
{
    className: "paragraph_content"
},
'HTML is the Language the we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.');


const secondDiv = React.createElement('div',{
    style:{
        margin:'5px;',
   }

}, secondLink,p3)

const thirdLink = React.createElement('p',{className:'fistDiv'},'CSS - Styling the web');

const p4 = React.createElement('p',
{
    className: "paragraph_content"
},
'CSS is the Language the we use to control our web content style and layout, as well as adding behavior like animation. This topic Provides comprehensive coverage of CSS');


const thirdDiv = React.createElement('div',{
    style:{
        margin:'5px;',
   }

}, thirdLink,p4)


const div = React.createElement('div',{}, [h2, p1, firstDiv ,secondDiv,thirdDiv]);

const flexDiv = React.createElement("div", {className: "main_div"} ,div)

ReactDOM.render(flexDiv, document.getElementById('root'))