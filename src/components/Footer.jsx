import React from 'react'
import { AiFillCode, AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

function Footer() {
  return (
    <footer>
        <div>
            <img
            src='https://avatars.githubusercontent.com/u/95642350?v=4'
            alt= "Founder"/>

            <h2>Rohit Kumar Mahato</h2>
            <p>Be consistent</p>

        </div>

        <aside>
            <h2>Social Media</h2>

            <article>
                <a href='https://github.com/Rohitkr2510' target = {"blank"}>
                    <AiFillGithub/>
                </a>
                <a href='https://www.linkedin.com/in/rohit-kumar-mahato-036478202/' target = {"blank"}>
                    <AiFillLinkedin/>
                </a>
                <a href='https://leetcode.com/Rohitkr2510/' target = {"blank"}>
                    <AiFillCode/>
                </a>
            </article>

        </aside>
        <a href='#home'>
            <AiOutlineArrowUp/>
        </a>
    </footer>
  )
}

export default Footer