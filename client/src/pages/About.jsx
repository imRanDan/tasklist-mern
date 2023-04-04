import React from 'react'

function About() {
  return (
    <div>
      <section class="hero">
      <h1>About myTaskList</h1>
      <p>myTaskList is a tool designed to help you keep on track on your day-to-days.</p>
      </section>

      <section class="about">
      <h2>Why myTaskList?</h2>
      <p>myTaskList is to be used as a supplement to your other task-management apps. Apps such as Notion, Obsidian, Evernote, and more.</p>
      </section>

      <section class="functions">
        <h2>How does it work?</h2>
        <p>On a day to day basis, you want to keep track of when you set your tasks, and myTaskList timestamps when you set one. It keeps it open as long as it takes and once you are done, you can then close the task.</p>
      </section>
    </div>
  )
}

export default About