function About() {

    //Internal CSS

    const headingStyles = {

        color : "yellow",
        fontSize : "30px",
        fontWeight : "bold"

    }

    const paragraphStyles = {

        fontStyle : "Italic"

    }

    const imageStyles = {

        width : "400px",
        height : "400px",
        borderRadius : "10px"
    }





    return(

        <div>

            <h1 style={headingStyles}>About UrbanCart</h1>

            <img src="images/image.png" alt="" style={imageStyles}/>


            <p style={paragraphStyles}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate repellendus fugiat nisi aperiam necessitatibus! Error unde minima eos ipsum minus ullam necessitatibus, dolorem enim inventore, pariatur voluptatibus tenetur excepturi eligendi.
            Facere eos possimus sit corporis impedit odio fuga saepe, dignissimos minima. Voluptates veritatis fuga assumenda corporis odio exercitationem voluptatibus unde maxime tenetur minima aspernatur, dolores reprehenderit laborum minus adipisci aliquid.
            Eos laudantium atque reiciendis placeat obcaecati magni fugiat. Eos perspiciatis animi culpa, provident rerum atque at totam omnis alias? Pariatur sit sed error rerum soluta quis expedita officia nobis. Quae.</p>
       


        </div>

    );




}

export default About;