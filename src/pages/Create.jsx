import React, { useState, useContext } from 'react'
import Layout from '../components/Layout';
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import '../styles/Create.css'

function Create() {
    const [title, setTitle] = useState('');   
    const [author, setAuthor] = useState('');   
    const [cover, setCover] = useState('');   
    const [intro, setIntro] = useState('');   
    const [completed, setCompleted] = useState(false);   
    const [reviews, setReviews] = useState('');
    
    const { createBook } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleOnChangeFile = (e) => {
        const element = e.target
        const file = element.files[0];
        const reader = new FileReader();
        
        reader.onloadend = function() {
            console.log("READER RESULT:", reader.result);
            setCover(reader.result.toString());
        };
        reader.readAsDataURL(file);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            reviews
        };

        console.log(newBook)

        createBook(newBook);
        navigate('/home')
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case 'title':
                setTitle(value);
                break;
            case 'author':
                setAuthor(value);
                break;
            case 'intro':
                setIntro(value);
                break;
            case 'completed':
                setCompleted(e.target.checked);
                break;
            case 'reviews':
                setReviews(value);
                break;
            default:
                break;
        }
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="title" 
                        id="title" 
                        value={title}
                    />
                </div>
                <div>
                    <label htmlFor='author'>Author</label>
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="author" 
                        id="author" 
                        value={author}
                    />
                </div>
                <div>
                    <label htmlFor='cover'>Cover</label>
                    <input 
                        onChange={handleOnChangeFile}
                        type="file" 
                        name="cover" 
                        id="cover" 
                    />
                    {
                        !!cover ? 
                        <img 
                            src={cover} 
                            alt="Photo preview" 
                        /> 
                        : ''
                    }
                </div> 
                <div>
                    <label htmlFor='intro'>Intro</label>
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="intro" 
                        id="intro" 
                        value={intro}
                    />
                </div>
                <div>
                    <label htmlFor='completed'>Completed</label>
                    <input 
                        onChange={handleChange}
                        type="checkbox" 
                        name="completed" 
                        id="completed" 
                        value={completed}
                    />
                </div>
                <div>
                    <label htmlFor='reviews'>Reviews</label>
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="reviews" 
                        id="reviews" 
                        value={reviews}
                    />
                </div>
                <input 
                    type="submit" 
                    value="Register book" 
                />
            </form>
        </Layout>
    )
}

export default Create