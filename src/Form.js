import React, { useState } from "react";
import '../src/Form.css'
// import memesData from "./memesData";


const Form = () => {

    // const [memeImage, setMemeImage] = useState("");

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })




    const [allMeme, setAllMeme] = useState([])

    React.useEffect(() => {

        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))


    }, [])

    // console.log(allMeme)

    const getMemeImage = () => {
        const memesArray = allMeme;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({

            ...prevMeme,
            randomImage: url


        }))

    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }


    return (

        <div className="form-main">
            <div >

                <div className="form-input">
                    <input placeholder="Upper Sentence" className="form-input-field" name="topText" value={meme.topText} onChange={handleChange}></input>
                    <input placeholder="Lower Sentence" className="form-input-field" name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
                </div>

                <button onClick={getMemeImage} className="form-button">Get a new meme image 📷</button>
            </div >


            <div className="meme">
                <img src={meme.randomImage} className="form-image"></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </div>



    )
}

export default Form;