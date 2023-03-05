import { MathJax, MathJaxContext } from 'better-react-mathjax';
import React, { useEffect, useState } from 'react'
import "./Question.css"

const Question = (props) => {

    const [question, setQuestion] = useState("")
    const [error, setError] = useState()

    let questionId = props.questionId;

    useEffect(() => {
        fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionId}`)
            .then(res => res.json())
            .then(data => {
                setQuestion(data[0].Question)
                setError()
            })
            .catch(err => setError(err))
    }, [questionId])


    return (
        <div className='question-container'>
            {error && <h2 className='error-msg'>No Question to show</h2>}
            <MathJaxContext>
                <MathJax><h2 className='question-text'>{question}</h2></MathJax>
            </MathJaxContext>
        </div>
    )
}

export default Question